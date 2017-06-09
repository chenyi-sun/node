var express = require('express');
var router = express.Router(),crypto = require('crypto');;
var allConnect = require('./../data/public.js');
var check = require('./../public/javascripts/logcheck.js');
/* GET users listing. */

router.get('/', check.checkNotLogin);
router.get('/', function(req, res, next) {
    if(req.session.user){
      req.flash('error', '已登录!'); 
    }
     res.render('login', { 
              title: '登录',
              user: req.session.user,
              error: req.flash('error').toString(),
            }); 
      console.log("用户名"+req.session.user);   
});
router.post('/', function(req, res, next) {
  var md5 = crypto.createHash('md5'),
      password = md5.update(req.body.password).digest('hex');
    var boolflag_name = 0;
    var boolflag_password = 0;
    var name = req.body.name;
    var fun = function(result){
      result.map(item => {
        if(item.name == name){
          boolflag_name = 1;
        }
        if(item.password == password){
          boolflag_password = 1;
        }
      });
      if(boolflag_name&&boolflag_password){
        req.session.user = name;
        req.flash('success', '登陆成功!');
        res.redirect('/'); 
      }
      else if(!boolflag_name){
        req.flash('error', '用户不存在');
        return res.redirect('/login'); 
      }
      else if(!boolflag_password){
         req.flash('error', '密码错误');
        return res.redirect('/login'); 
      }
   }
  var all = allConnect.findUser('', fun)

});

module.exports = router;
