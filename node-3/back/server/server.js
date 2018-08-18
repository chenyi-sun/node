/* http服务配置 */
let server = function(app){
   var server = app.listen(8081, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("[SERVER] : http://%s:%s", host, port)

    });
};

exports.server = server;