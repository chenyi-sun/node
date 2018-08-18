var express = require('express');
var path = require('path');
var url = require("url");
var app = express();

app.set('views', path.join(__dirname, 'html'));
module.exports = function(req, res){
    // res.end('ssssddd');
    let paths  = path.resolve(__dirname, '../../..')
    // res.end();
    res.render('index', { name: 'ssss' });
};