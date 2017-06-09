var express = require('express');
var router = express.Router(),crypto = require('crypto');
var allConnect = require('./../data/public.js');
var check = require('./../public/javascripts/logcheck.js');
/* GET users listing. */
router.get('/', check.checkNotLogin);
router.get('/', function(req, res, next) {
        res.render('reg', { 
              title: '注册',
              user: req.session.user,
              error: req.flash('error').toString(),
              success: req.flash('success').toString()
            });       
});
router.post('/', function(req, res, next) {
  var md5 = crypto.createHash('md5');
  var name = req.body.name;
  var password = req.body.password;
  var passwordre = req.body.repeat;
  var email = req.body.email;
  
  if(name.length<=0){
    req.flash('error', '请填写账户');
    return res.redirect('/reg');
  }
  if(password.length<=0){
    req.flash('error', '请填写密码');
    return res.redirect('/reg');
  }
  else if(passwordre != password){
     req.flash('error', '两次密码不一致');
    return res.redirect('/reg');
  }
  else{
      password = md5.update(password).digest('hex');
      console.log(password);
  }
 
  if(email.length<=0){
    req.flash('error', '请填写邮箱');
    return res.redirect('/reg');
  }
  var data = [name, password, email]
  var fun = function(){
     req.flash('success', '注册成功');
     res.redirect('/')
  }
  allConnect.add(data,fun);
 
  
});
module.exports = router;
