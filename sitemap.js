const { SitemapStream, streamToPromise } = require('sitemap')
const { createGzip } = require('zlib')
const opts           = require('./opts')
const Sphere         = require('./model/sphere')
const Product        = require('./model/product')

const getUrls = async function()
{
    let urls = []

    let spheres  = await Sphere.findAll({attributes: ['link']})
    let products = await Product.findAll({attributes: ['name'], where: { hide: false }})

    const main =
    [
        { url: '/',        priority: 1.0, changefreq: 'weekly', },
        { url: '/contact/', priority: 1.0, changefreq: 'weekly', },
        { url: '/custom/',  priority: 0.7, changefreq: 'weekly', },
        { url: '/sphere/',  priority: 0.8, changefreq: 'weekly', },
        { url: '/product/', priority: 0.7, changefreq: 'weekly', },
    ]
    main.map((m) => { urls.push(m) })
    spheres.map( (u) => { urls.push({ url: '/sphere/'  + u.link + '/', priority: 0.7, changefreq: 'weekly', }) })
    products.map((p) => { urls.push({ url: '/product/' + p.name + '/', priority: 0.9, changefreq: 'daily',  }) })

    return urls
}

let sitemapxml
const sitemap = async function(req, res)
{
    res.header('Content-Type', 'application/xml')
    res.header('Content-Encoding', 'gzip')
    if (sitemapxml)
    {
        res.send(sitemapxml)
        return
    }
    try
    {
        let urls = await getUrls()

        const smStream = new SitemapStream({ hostname: opts.base_url })
        const pipeline = smStream.pipe(createGzip())
        urls.forEach( function(u) { smStream.write(u) })
        streamToPromise(pipeline).then(sm => sitemapxml = sm)
        smStream.end()
        pipeline.pipe(res).on('error', (e) => { throw e })
    }
    catch (e)
    {
        console.error(e)
        res.status(500).end()
    }
}

module.exports = sitemap
