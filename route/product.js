var express    = require('express');
var router     = express.Router();

var ctrl = require('../ctrl/productCtrl')

router.get('/',      ctrl.all)
router.get('/:name', ctrl.name)

module.exports = router;
// vim:foldmethod=marker
