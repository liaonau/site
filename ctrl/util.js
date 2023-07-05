var async  = require('async')
const ejs  = require('ejs')
const fs   = require('fs')
const path = require('path')

const model =
{
    Worker:  require('../model/worker'),
    Sphere:  require('../model/sphere'),
    Product: require('../model/product'),
}

const birthday = new Date('1992-09-24')

const ls_dir = function(dir)
{
    const dir_static  = 'static/'
    const base = path.join(dir_static, dir)
    if (fs.existsSync(base) && fs.lstatSync(base).isDirectory())
        return fs.readdirSync(base).map((f) => path.join(dir, f))
    return []
}

var util = {}

var sorces =
{
    spheres: async function()
    {
        return await model.Sphere.findAll()
    },
    workers: async function()
    {
        return await model.Worker.findAll()
    },
    age: async function()
    {
        let now      = new Date()
        let addOne   = (now.getMonth() - birthday.getMonth() >= 0) && (now.getDate() - birthday.getDate() >=0)
        let age      = (now.getFullYear() - birthday.getFullYear() - 1) + (addOne ? 1 : 0)
        return age
    },
}

util.collect_and_render = async function(route, req, res, srs)
{
    srs = srs ? srs : [];
    async.parallel(
        (srs.reduce(
            function(a, v)
            {
                if (typeof sorces[v] == 'function')
                    return { ...a, [v]: sorces[v]}
                else
                    return a
            },
            {}
        )),
    async function(err, results)
    {
        const html = await ejs.renderFile(
            path.join('view', route + '.ejs'),
            {
                data:   results,
                opts:   res.locals.opts,
                url:    req.url,
                model:  model,
                ls_dir: ls_dir,
            },
            {async: true}
        )
        res.send(html)
    })
}

module.exports = util
