var async = require('async')

var util = require('./util')

exports.page404 = async function(req, res)
{
    res.status(404);
    util.collect_and_render('page404', req, res)
}
// vim:foldmethod=marker
