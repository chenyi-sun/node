var express = require('express');
var router = express.Router();
var allConnect = require('./../data/public.js');
// var mongo = require('mongodb');
// var monk = require('monk');
// var db = monk('localhost:27017/nodetest1');

/* GET home page. */
var mysql = require('mysql'); 

router.get('/', function(req, res, next) {
  var post = [];
 
  var fun = function(result){
        if(!req.session.user){
          post = [];
        }else{
          result.map(item=>{
            if(item.name == req.session.user){
              post.push(item);
               
            }
          });
         
        }
        
        res.render('index', { 
              title: 'Express',
              ask: "dd",
              user: req.session.user,
              success: req.flash('success').toString(),
              posts: post,
            });  
    }


allConnect.showArticle(req.session.user,fun)
        
});

module.exports = router;
