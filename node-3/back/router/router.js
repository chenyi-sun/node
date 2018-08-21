/* 路由配置情况 */
const util = require('util');
let router = require('./routeexcute');
var url = require("url");
var path = require('path');
var root = require("./../data/static/root.js");
var common = require("./../../common.js");
router = router.router; //所有的地址对应的路由和方法
let paths  = path.resolve(__dirname, '../..');


let routers = function(app){ //get name -> 对应方法
    beforePath(app);
    //获取 当前url地址 如果不匹配任何一个路由的name 就跳转到404页面
    for(var i= 0; i< router.length; i++){
        let name = router[i].name;
        let fun  = router[i].getfun;
        let before = commonRouter;
        app.get(router[i].name, function(req, res){
            let value = commonRouter(req, res);
            let pathname =  url.parse(req.url).pathname;
            if(!value || pathname == '/login'){
                fun(req, res, app);
            }
            else{
                res.redirect('/login');
            }
        });
    }
    app.use(function(req, res){
        res.sendFile(paths  + "/html/static/nofound.html");
    });
}

let commonRouter = function(req, res){ // 通用路由配置
    if(req.session.islogin != root.islogin.trueVlue){
        console.log("============noLogin============");
        return true;
    }
    else{
        console.log("============isLogin============");
        return false;
    }
};

let beforePath = function(app){

}

exports.routers = routers;