var path = require('path');
module.exports = function(req, res){
    // res.end('ssssddd');
    let paths  = path.resolve(__dirname, '../../..')
    // res.end();
    res.sendFile(paths  + "/html/index.html");
};