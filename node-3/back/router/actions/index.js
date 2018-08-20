var express = require('express');
var path = require('path');
var url = require("url");

module.exports = function(req, res, app){

    let paths  = path.resolve(__dirname, '../../..')

    req.session.lastPage = '/awesome';
    console.log(req.session.cookie.maxAge);
    console.log("==========");
    console.log(req.session.secret);
    res.end(JSON.stringify(req.session));
    // res.sendFile(paths  + "/html/index.html");
};














