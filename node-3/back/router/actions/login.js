var express = require('express');
var path = require('path');
var url = require("url");
var common = require("./../../../common.js");

module.exports = function(req, res, app){

    let paths  = path.resolve(__dirname, '../../..')
    // console.log(common);
    if(common.isLogin){ //如果测试设置了默认登录
        req.session.islogin = 'islogintrue';
        res.end('login is do');
    }

    res.end('login is do');

    // req.session.lastPage = '/awesome';
    // console.log(req.session.cookie.maxAge);
    // console.log("==========");
    // console.log(req.session.secret);
    // res.end(JSON.stringify(req.session));
    // res.sendFile(paths  + "/html/index.html");
};
