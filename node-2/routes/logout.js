var express = require('express');
var router = express.Router();
var check = require('./../public/javascripts/logcheck.js');

/* GET users listing. */
router.get('/', check.checkLogin);
router.get('/', function(req, res, next) {
  // res.send('logout');
  //  res.render('post', { 
  //           title: '退出登录',
  //           ask: "成功",
  //           user: req.session.user
  //         });
  req.session.user = null;
  req.flash('success', '登出成功!');
  res.redirect('/');
});



module.exports = router;
