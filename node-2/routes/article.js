var express = require('express');
var router = express.Router();
var check = require('./../public/javascripts/logcheck.js');
var allConnect = require('./../data/public.js');

/* GET users listing. */
router.get('/', check.checkLogin);
var mysql  = require('mysql'); 
router.get('/', function(req, res, next) {
//     var connection = mysql.createConnection({
//     host     : '127.0.0.1',
//     user     : 'root',
//     password : '',
//     port: '3306',
//     database: 'my_news_test',
//   });
//    connection.connect();
//    var aa = 2;
//    var  userDelSql = 'DELETE FROM name WHERE aa = '+aa;
//    connection.query(userDelSql,function (err, result) {
//         if(err){
//           console.log('[DELETE ERROR] - ',err.message);
//           return;
//         }  
         res.render('article', { 
            title: '发表文章',
            ask: '删除成功',
            user: req.session.user,
        });
         
//    });
});

router.post('/', function(req, res, next) {
    var data;
        data = [
        req.session.user,
        req.body.title,
        req.body.article,
        2015-02-30
        ];
        allConnect.publishArticle(data);
        req.flash('success', '发布成功!');
        return res.redirect('/'); 
});
module.exports = router;
