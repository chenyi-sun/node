var mysql = require("mysql");
var dateconect = require("./datebase/base.js");
var createconect = require("./createdate/createtable.js");
//https://blog.csdn.net/lymm000/article/details/65937886

//数据库连接失败
module.exports = function(app){
    var connection = mysql.createConnection(dateconect.dateconnect);
    connection.connect(function(err){
        if(err){
            console.log("faile"); 
        }else{
            console.log("success");
            if(dateconect.datetype == "create"){
                createconect(connection);
            }
        }
    });
}

//服务器连接 及时失败了，也能执行页面显示，不需要数据的页面，任然可以显示，需要数据的页面给数据报错提示
//连接报错，把报错写进日志里面

