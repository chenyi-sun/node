/* http服务配置 */
let common = require('./../../common.js');
let server = function(app){
    var server = app.listen(common.common.port, function () {

    var host = server.address().address;
    var port = server.address().port;

    // console.log("[SERVER] : http://%s:%s", host, port)
        
    });
};

exports.server = server;