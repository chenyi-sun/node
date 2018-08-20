var session = require("express-session");
var cookieParser = require("cookie-parser");
var common = require('./../../common.js');

let sessionact = function(app){
    console.log("============");
    
    console.log("session");

    console.log(common);

    console.log("=============");
    
    app.use(cookieParser());
    
    app.use(session({
        secret: '123456',   //这里的name值得是cookie的name，默认cookie的name是：connect.sid
        name: 'testapp',    //设置maxAge是80000ms，即80s后session和相应的cookie失效过期
        cookie: {maxAge: 800000 }, //800000ms 时间 800s 14分钟
        resave: false,
        saveUninitialized: true
    }));


}

exports.session = sessionact;