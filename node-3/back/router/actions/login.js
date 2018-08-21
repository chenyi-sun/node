var express = require('express');
var path = require('path');
var url = require("url");
var common = require("./../../../common.js");
var root = require("./../../data/static/root.js");

common = common.common;

module.exports = function(req, res, app){
    if(common.isLogin){ //如果测试设置了默认登录
        req.session.islogin = root.islogin.trueVlue; //赋值系统的登录值
        console.log(req.session.islogin);
        res.end('====login test start====');
    }
    res.end('login is do');
};
