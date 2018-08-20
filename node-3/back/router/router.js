/* 路由配置情况 */
const util = require('util');
let router = require('./routeexcute');
var url = require("url");
var path = require('path');
router = router.router; //所有的地址对应的路由和方法

let routers = function(app){ //get name -> 对应方法
    beforePath(app);
    //获取 当前url地址 如果不匹配任何一个路由的name 就跳转到404页面
    for(var i= 0; i< router.length; i++){
        let name = router[i].name;
        let fun  = router[i].getfun;
        app.get(router[i].name, function(req, res){
            commonRouter(req, res);
            fun(req, res, app);
        });
    }
    app.use(function(req, res){
        let paths  = path.resolve(__dirname, '../..');
        res.sendFile(paths  + "/html/static/nofound.html");
    });
}

let commonRouter = function(req, res){ // 通用路由配置
    // var pathname = url.parse(req.url);
    // 
};

let beforePath = function(app){

}

exports.routers = routers;