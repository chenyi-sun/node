/* 路由配置情况 */
const util = require('util');
let router = require('./routeexcute');
router = router.router;
let commonRouter = function(){ // 通用路由配置

};
let routers = function(app){ //get name -> 对应方法
    //获取 当前url地址 如果不匹配任何一个路由的name 就跳转到404页面
    for(var i= 0; i< router.length; i++){
        let name = router[i].name;
        let fun  = router[i].getfun;
        app.get(router[i].name, function(req, res){
            commonRouter(req, res);
            fun(req, res);
        });
    }

}

exports.routers = routers;