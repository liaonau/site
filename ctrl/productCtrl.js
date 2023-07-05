const async     = require('async')
const Sequelize = require('sequelize')
const Op        = Sequelize.Op
const paginate  = require('express-paginate');
const ejs       = require('ejs')
const fs        = require('fs')
const path      = require('path')
const errorCtrl = require('./errorCtrl')
const model =
{
    Measure:        require('../model/measure'),
    Tu:             require('../model/tu'),
    Sphere:         require('../model/sphere'),
    Sphere_Product: require('../model/sphere_product'),
    Product:        require('../model/product'),
    Claim:          require('../model/claim'),
    Description:    require('../model/description'),
}
const sprintf   = (require('printj')).sprintf

const dir_static  = 'static/'
const dir_product = '/product/'
const default_preview = path.join('/img', 'nophoto.png')

const get_photos = async function(name)
{
    const dir_photo = 'photo'
    const base = path.join(dir_static, dir_product, name, dir_photo)
    if (fs.existsSync(base) && fs.lstatSync(base).isDirectory())
        return fs.readdirSync(base).map((f) => path.join(dir_product, name, dir_photo, f))
    return []
}
const get_views = async function(name)
{
    let pw = default_preview
    let fw = null
    let custom_preview  = 'thumb.' + name + '.jpg'
    let custom_fullview =  name + '.jpg'
    let file

    file = path.join(dir_static, dir_product, name, custom_preview)
    if (fs.existsSync(file) && fs.lstatSync(file).isFile())
        pw = path.join(dir_product, name, custom_preview)

    file = path.join(dir_static, dir_product, name, custom_fullview)
    if (fs.existsSync(file) && fs.lstatSync(file).isFile())
        fw = path.join(dir_product, name, custom_fullview)

    return {preview: pw, fullview: fw}
}

const get_pgnt = function(req, items)
{
    const count = Math.ceil(items / req.query.limit)
    let current = req.query.page || 1
    current = Math.min(current, count)
    const pgs =
    {
        current,
        items,
        count,
        pages:   paginate.getArrayPages(req)(3, count, req.query.page),
        hasPrev: current > 1,
        hasNext: paginate.hasNextPages(req)(count),
        phref:   paginate.href(req),
    }
    return pgs
}
const get_condition = async function(req)
{
    let ret =
    {
        cnd:
        {
            where: { hide: false }
        },
        sphere: null,
    }
    if (req.params.sphere)
    {
        let sphere = await model.Sphere.findOne(
        {
            where: { link: req.params.sphere }
        })
        if (!sphere)
            return ret
        else
            ret.sphere = sphere
        let sp = await model.Sphere_Product.findAll(
        {
            attributes: ['ProductId'],
            where:
            {
                SphereId: sphere.id
            }
        })
        if (!sp)
            return ret
        let prods = sp.map((p) => p.ProductId)
        ret.cnd =
        {
            where:
            {
                [Op.and]:
                [
                    { hide: false },
                    { id:
                        {
                            [Op.in]: prods,
                        }
                    }
                ],
            }
        }
    }
    return ret
}

exports.name = async function(req, res)
{
    const name = req.params.name
    const prod = await model.Product.findOne(
        {
            where:
            {
                [Op.and]:
                [
                    { name: name  },
                    { hide: false },
                ]
            },
            include:
            [
                {
                    model: model.Claim,
                },
                {
                    model: model.Description,
                    group: ['main'],
                },
            ],
        }
    )
    if (prod)
    {
        await prod.update({ hit: (prod.hit + 1) })
        let html = await ejs.renderFile(path.join('view', 'productOne.ejs'),
            {
                data:
                {
                    prod,
                    model,
                    sprintf,
                    photos: await get_photos(name),
                    ...(await get_views(name)),
                },
                opts:  res.locals.opts,
                url:   req.url,
                model: model,
            },
            {async: true}
        )
        res.send(html)
    }
    else
        errorCtrl.page404(req, res)
}

exports.all = async function(req, res)
{
    const { cnd, sphere } = await get_condition(req)
    const products = await model.Product.findAll(
    {
        ...cnd,
        limit:  req.query.limit,
        offset: req.skip,
    })
    const items = await model.Product.count(cnd)

    if (products)
    {
        for (let prod of products)
            prod.preview = (await get_views(prod.name)).preview
        let html = await ejs.renderFile(path.join('view', 'productsAll.ejs'),
            {
                data:
                {
                    products,
                    sphere: sphere,
                },
                opts:  res.locals.opts,
                url:   req.url,
                model: model,
                ...get_pgnt(req, items),
            },
            {async: true}
        )
        res.send(html)
    }
    else
        errorCtrl.page404(req, res)
}
