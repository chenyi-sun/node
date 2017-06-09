var mysql  = require('mysql'); 
var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : '',
    port: '3306',
    database: 'my_news_test',
});
connection.connect();
var allConnect = {};

allConnect.add = function (data,fun){
    var  userAddSql = 'INSERT INTO login(id,name,password,email) VALUES(0,?,?,?)';
    var  userAddSql_Params = data
    connection.query(userAddSql,userAddSql_Params,function (err, result) {
         if(err){
          console.log('[INSERT ERROR] - ',err.message);
          return;
        }
        fun();
    });
}

allConnect.findUser = function(data, fun, funerr){
    var  userGetSql = 'SELECT * FROM login';

    connection.query(userGetSql,function selectCb(err, result) {
         if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
        fun(result);
    });
    return 'dddd';
}

module.exports = allConnect;
