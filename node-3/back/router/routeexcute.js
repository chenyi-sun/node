var index = require('./actions/index.js');
/**备注信息 */
var routers = [
        {
            name: '/index',
            getfun: index,
            postfun: index,
            descibe: '首页'
        },
        {
            name: '/',
            getfun: function(req, res){ //页面重定向
               res.redirect('/index');
            },
            postfun: function(req, res){
               
            }
        }
]

exports.router = routers;

