var express = require('express');
var fs = require("fs");
var mysql = require('mysql');
let server = require('./back/server/server.js');
let routers = require('./back/router/router.js');

var app = express();

server.server(app); //http服务
routers.routers(app); //路由服务

