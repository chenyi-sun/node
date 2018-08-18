/* 路由配置情况 */
let router = require('./routeexcute');
let routers = function(app){
    app.get('/index', router[0].fun);
    app.get('/name', function(req, res){

    });
}

exports.routers = routers;