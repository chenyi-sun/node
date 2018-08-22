var express = require('express');
var path = require('path');
var url = require("url");
var common = require("./../../../common.js");
var root = require("./../../data/static/root.js");
var ejshome = require("./../../ejshome/ejshome.js");

common = common.common;
module.exports = function(req, res, app, type){
    if(common.isLogin){ //如果测试设置了默认登录
        req.session.islogin = root.islogin.trueVlue; //赋值系统的登录值
        let fun = function(data){
            res.end(data);
        }
        let showValue = '';
        let isinput = false;
        if(type == 'post'){
            par = {
              showValue: "success",
              isinput: false  
            }
        }
        else{
            par = {
              showValue: "please do",
              isinput: true  
            }
        }
        // res.end("sssss");
        ejshome(1,{
            path: '/login/login.ejs',
            par: par,
            fun: function(err,data){
               fun(data);
            }
        }, req, res);
    }
    res.end('login is do');
};
