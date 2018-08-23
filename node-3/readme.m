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

5.用 vue 嵌套写 js模块随便加 打包用gulp

6.原生的文件读取
fs.readFile( "user.json", "utf-8", function (err, data) {
      if(err){
        res.end(JSON.stringify(err));
      }
      else{
        let localdata = JSON.parse(data);
        let id = req.query.id;
        delete localdata['user'+id];
        res.end(JSON.stringify(localdata));
      }
  });
  
  7. ejs输出变量
  <%= list %>
  即使页面代码被注释掉了，注释也会被翻译出来

  8.dist页面只是打包以后的测试页面
    (是public/staticpublic----->public/html/staticpublic ----> css和json注入ejs页面--->dist测试页面，页面结构混乱，
    仅用来测试页面数据和样式)
    html是路由去获取的页面
    ()
    public下面是所有原始的页面 样式

  9.https://www.jianshu.com/p/5cd186600afe
    


