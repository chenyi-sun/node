var index = require('./actions/index.js');
var login = require('./actions/login.js');
/**备注信息 */
var routers = [
        {
            name: '/index',
            getfun: index,
            postfun: index,
            descibe: '首页',
            root: [0],//权限
        },
        {
            name: '/',
            getfun: function(req, res, app){ //页面重定向
               res.end(req.session.lastPage);
            },
            postfun: function(req, res){
                 
            },
            root: [0]
        },
        {
            name: '/house',
            getfun: function(req, res, app){
                res.end(req.session.lastPage);
            },
            postfun: function(req, res){

            }
        },
        {
            name: '/login', //登录
            getfun: login,
            postfun: function(req, res, app){

            },
            root: [0]
        }
]

exports.router = routers;

