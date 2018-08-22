var ejs = require("ejs");
var path = require('path');
module.exports = function(num, param, req, res){
      let paths  = path.resolve(__dirname, '../../html')
      ejs.renderFile(paths+param.path, param.par, function(err, data){
           param.fun(err, data);
      });
}