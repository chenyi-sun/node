var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('post发表');
});
router.post('/', function(req, res, next) {
 
});

module.exports = router;
