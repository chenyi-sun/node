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

4.设置缓存
 app.use(cookieParser());
    
 app.use(session({
      secret: '123456',   //这里的name值得是cookie的name，默认cookie的name是：connect.sid
      name: 'testapp',    //设置maxAge是80000ms，即80s后session和相应的cookie失效过期
      cookie: {maxAge: 800000 }, //800000ms 时间 800s 14分钟
      resave: false,
      saveUninitialized: true
 }));

设置缓存
req.session.islogin = 'sss'; //设置缓存的值

5.

  