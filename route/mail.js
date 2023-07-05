var express    = require('express');
var router     = express.Router();

var ctrl = require('../ctrl/mailCtrl')

router.post('/', ctrl.mail)

module.exports = router;
// vim:foldmethod=marker
