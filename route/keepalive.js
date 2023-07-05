var express    = require('express');
var router     = express.Router();

var ctrl = require('../ctrl/keepaliveCtrl')

router.get('/', ctrl.ping)

module.exports = router;
// vim:foldmethod=marker
