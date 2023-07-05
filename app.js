const express      = require('express')
const robots       = require('express-robots-txt')
const paginate     = require('express-paginate')
const fs           = require('fs')
const http         = require('http')
const https        = require('https')
const createError  = require('http-errors')
const path         = require('path')
const cookieParser = require('cookie-parser')
const logger       = require('morgan')

require('dotenv').config()

const sequelize = require('./db')
const opts      = require('./opts')
const sitemap   = require('./sitemap')
if (process.env.INIT)
    require('./init')

const errorCtrl = require('./ctrl/errorCtrl')
const router =
{
    index:     require('./route/index'),
    keepalive: require('./route/keepalive'),
    mail:      require('./route/mail'),
    product:   require('./route/product'),
}

const app = express()

//ебаный Passenger
if (typeof(PhusionPassenger) !== 'undefined')
{
    //app.listen('passenger')
    app.listen(process.env.PORT || 8000)
}

app.use(robots(
{
    UserAgent:  '*',
    Allow:      '/',
    Sitemap:    opts.base_url + '/sitemap.xml',
    //CrawlDelay: '5',
}))

const pagination_limit =
{
    min: 12,
    max: 48,
}
app.use(paginate.middleware(pagination_limit.min, pagination_limit.max))

app.use(function(req, res, next)
{
    res.locals.opts = opts
    next()
})

app.set('views', path.join(__dirname, 'view'))
app.set('view engine',  'ejs')
app.set('view options',
    {
        rmWhitespace: true,
    }
)
app.locals.viewDir = path.join(process.cwd(), 'view')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use(express.static(path.join(__dirname, '/static')))
app.get('/sitemap.xml', sitemap)

app.use('/',        router.index)
app.use('/ping',    router.keepalive)
app.use('/mail',    router.mail)
app.use('/product', router.product)
app.use(errorCtrl.page404)

app.use(function(err, req, res, next)
{
  res.locals.message = err.message
  res.locals.error   = req.app.get('env') === 'development' ? err : {}

  res.status(err.status || 500);
  res.render('error');
})

module.exports = app;
// vim: foldmethod=marker
