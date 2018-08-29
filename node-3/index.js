var express = require('express');
var fs = require("fs");
var mysql = require('mysql');
let server = require('./back/server/server.js');
let routers = require('./back/router/router.js');
let session = require('./back/session/setsession.js');
let datebase = require('./back/data/connect.js'); //数据库的链接
var path = require('path');

var app = express();

app.use(express.static('html/staticpublic'));
session.session(app);//session服务
server.server(app); //http服务
routers.routers(app); //路由服务
// datebase(app); //服务器连接





