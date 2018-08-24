var mysql = require("mysql");
var dateconect = require("./datebase/base.js");
var createconect = require("./createdate/createtable.js");
//https://blog.csdn.net/lymm000/article/details/65937886

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

