var express = require('express');
var router = express.Router();
// var mongo = require('mongodb');
// var monk = require('monk');
// var db = monk('localhost:27017/nodetest1');


/* GET home page. */
var mysql = require('mysql'); 
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : '',
  port: '3306',
  database: 'mysql',
});
connection.connect();
// connection.query("use"+'my_news_test');
// connection.query( 
//   'SELECT * FROM '+'name', 
 
// );
router.get('/', function(req, res, next) {
  // var collection = db.get('usercollection');
  //  collection.find({},{},function(e,docs){
            res.render('index', { 
            title: 'Express',
            ask: "dd"
          });
        // });
});

module.exports = router;
