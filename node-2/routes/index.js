var express = require('express');
var router = express.Router();
// var mongo = require('mongodb');
// var monk = require('monk');
// var db = monk('localhost:27017/nodetest1');

/* GET home page. */
var mysql = require('mysql'); 
router.get('/', function(req, res, next) {
  // var connection = mysql.createConnection({
  //   host     : '127.0.0.1',
  //   user     : 'root',
  //   password : '',
  //   port: '3306',
  //   database: 'my_news_test',
  // });

  // connection.connect();
  // connection.query( 
  //   'SELECT * FROM '+'name', 
  //   function  selectCb(err, results, fields){
  //     console.log(results);
  //     if(results){
  //         res.render('index', { 
  //             title: 'Express',
  //             ask: "dd",
  //             results: results
  //           });
  //     }
  //   }
  // );
  // connection.end();
  // var collection = db.get('usercollection');
  // collection.find({},{},function(e,docs){
       res.render('index', { 
              title: 'Express',
              ask: "dd",
              user: req.session.user,
              success: req.flash('success').toString(),
            });    
});

module.exports = router;
