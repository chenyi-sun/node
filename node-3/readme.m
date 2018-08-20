1. 获取上一级的路径方法
 
    let paths  = path.resolve(__dirname, '../../..')
        // res.end();
    res.sendFile(paths  + "/html/index.html");

2.页面重定向 redirect 使用方法
  app.get('/', function(req, res){
    res.redirect('/index');
  })

3.node登录权限设置
https://www.cnblogs.com/chenchenluo/p/4197181.html

require('express-session');
require('cookie-parser');
权限设置问题


  