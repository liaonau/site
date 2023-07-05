var async = require('async')
var path  = require('path')

var util = require('./util')

exports.index = async function(req, res)
{
    util.collect_and_render('index', req, res, ['age', 'spheres'])
}

exports.contact = async function(req, res)
{
    util.collect_and_render('contact', req, res, ['workers'])
}

exports.spheres = async function(req, res)
{
    util.collect_and_render('spheres', req, res, ['spheres'])
}

exports.custom = async function(req, res)
{
    util.collect_and_render('custom', req, res, ['age'])
}
// vim:foldmethod=marker
