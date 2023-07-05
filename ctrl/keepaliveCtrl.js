var async = require('async')

exports.ping = async function(req, res)
{
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify('pong'));
}
// vim:foldmethod=marker
