var express = require('express');
var fs = require("fs");
var mysql = require('mysql');
let server = require('./back/server/server.js');
let routers = require('./back/router/router.js');
let session = require('./back/session/setsession.js');
var path = require('path');

var app = express();


session.session(app);//session服务
server.server(app); //http服务
routers.routers(app); //路由服务




