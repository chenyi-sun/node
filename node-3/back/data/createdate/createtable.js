// datetype
function create(param,connection){
    let value = param.values;

    let arr = [
        '', //0
        'int', //1
        'varchar(255)', //2
    ];
    let values = "CREATE TABLE  " + param.table + "(";

    for(var i = 0; i < value.length; i++){
        if(i%2 == 0){
            let type = value[i+1];
            switch(typeof(value[i+1])){
                case 'number':  type = arr[value[i+1]]; break;
                case 'string':  type = value[i+1]; break;
            }
            values = values + value[i]+ ' '+ type + (i==value.length-2?'':',');
        }
    }

    values = values + ")";
    connection.query(values, function(err, result){
        if(err){
            if(param.errfun){
                param.errfun(err);
            }
            throw err;
        }else{
            console.log("创建成功");
            if(param.successfun){
                param.successfun(result);
            }
        }
    })
    console.log(values);
}

module.exports = function(connection){
    param = {
        name: '用户',
        table: 'person', 
        values: ["id", 1, "user", 2, "password", "varchar(255)"],
    };
    
    create(param,connection);
}