var express = require('express');
var router = express.Router();
var mysql = require('mysql'); 
/* GET users listing. */
router.get('/', function(req, res, next) {
  var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : '',
    port: '3306',
    database: 'my_news_test',
  });
  connection.connect();
  var userModSql = 'UPDATE name SET aa = ?,sss = ? WHERE dddd = 333';
  var userModSql_Params = [12900,99,7];
  connection.query(userModSql,userModSql_Params,function (err, result) {
     if(err){
         console.log('[UPDATE ERROR] - ',err.message);
         return;
     }       
    res.render('post', { 
            title: '修改',
            ask: "成功",
            user: req.session.user
          });
  });
});
router.post('/', function(req, res, next) {
 
});

module.exports = router;
