var express = require('express');
var path = require('path');
var url = require("url");

module.exports = function(req, res, app){
    let paths  = path.resolve(__dirname, '../../..')
    req.session.lastPage = '/awesome';
    res.end(JSON.stringify(req.session));
};














