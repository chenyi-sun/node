var express = require('express');
var router = express.Router();

/* GET users listing. */

var mysql  = require('mysql'); 
router.get('/', function(req, res, next) {
    var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : '',
    port: '3306',
    database: 'my_news_test',
  });
   connection.connect();
   var aa = 2;
   var  userDelSql = 'DELETE FROM name WHERE aa = '+aa;
   connection.query(userDelSql,function (err, result) {
        if(err){
          console.log('[DELETE ERROR] - ',err.message);
          return;
        }  
         res.render('ask', { 
            title: '删除',
            ask: '删除成功',
            user: req.session.user,
        });     
   });
  
});

module.exports = router;
