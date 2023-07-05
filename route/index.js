var express    = require('express');
var router     = express.Router();

var ctrl        = require('../ctrl/indexCtrl')
var productCtrl = require('../ctrl/productCtrl')

let redir = function(o, n)
{
    router.get(o, (req, res) => res.redirect(n))
}

router.get('/',        ctrl.index  )
router.get('/contact', ctrl.contact)
router.get('/custom',  ctrl.custom )

router.get('/sphere',         ctrl.spheres)
router.get('/sphere/:sphere', productCtrl.all)

//{{{ старый сайт
//{{{ старый сайт, основные разделы
redir('/index',         '/'       )
redir('/index.html',    '/'       )
redir('/about.html',    '/#about' )
redir('/spheres',       '/sphere' )
redir('/contacts',      '/contact')
redir('/contact.html',  '/contact')
redir('/contacts.html', '/contact')
redir('/products.html', '/spheres')
redir('/spheres.html',  '/spheres')
redir('/custom.html',   '/custom' )
//}}}
//{{{ старый сайт, продукция
redir('/polimernye-kompozicii.html',                              '/sphere/construction')
redir('/kompoziciya-talkonapolnennogo-polipropilena.html',        '/product/t40')
redir('/kompoziciya-polipropilena-ponizhennoi-goruchesti.html',   '/product/21-15c')
redir('/kompoziciya-melonapolnennogo-polipropilena.html',         '/product/m40')
redir('/kompoziciya-steklonapolnennogo-polipropilena.html',       '/product/st30')
redir('/kompoziciya-mineralonapolnennogo-polipropilena.html',     '/product/mn40')
redir('/kompoziciya-polipropilena-i-sopolimera-propilena.html',   '/product/01-pv2')
redir('/kompoziciya-polietilena-silanol\'nosshivayemogo.html',    '/product/spa')
redir('/kompoziciya-polietilena-vysokogo-davleniya.html',         '/product/102-57k')
redir('/kompoziciya-polietilena-ponizhennoi-goruchesti.html',     '/product/153-115')
redir('/kompoziciya-sevilena-i-polietilena-pralen.html',          '/product/113-20')
redir('/kompoziciya-sevilena-ponizhennoi-goruchesti.html',        '/product/113-vs')
redir('/kompoziciya-adgezionnaya.html',                           '/product/adhesive_03')
redir('/kompoziciya-polistirola-s-ponizhennoi-goryuchestyu.html', '/product/825e-1c')

redir('/plenki.html',                                    '/sphere/matt_films')
redir('/plenka-sevilenovaya-matirovannaya.html',         '/product/matt_film_white')
redir('/plenka-polietilenovaya-matirovannaya.html',      '/product/matt_film_pe')
redir('/plenka-polietilenovaya-sshivayushchayasya.html', '/sphere/crosslinking_films')

redir('/lenty.html',                                                 '/sphere/anticorrosive')
redir('/lenta-germetiziruyushchaya-termoplavkaya-pralen.html',       '/product/gta')
redir('/lenta-termousazhivayuschayasya-dvuhsloinaya-pralen.html',    '/product/stp')
redir('/lenta-termousazhivayuschayasya-polietilenovaya-pralen.html', '/product/ob')

redir('/profili.html',                  '/sphere/pipes_construction')
redir('/obramleniya.html',              '/sphere/pipes_construction')
redir('/profil-polimernyi-pralen.html', '/product/msv')

redir('/antipiren.html',           '/product/flame_retardant')
redir('/klei.html',                '/sphere/adhesives')
redir('/koncentraty-melovye.html', '/product/calcium_carbonate_masterbatch')
redir('/truby.html',               '/sphere/pipes_crosslinking')
//}}}
//}}}

module.exports = router;
// vim:foldmethod=marker
