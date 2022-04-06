const mysql = require("mysql")

let sqlInfo = {
    host: '47.105.61.1',
    port: "3306",
    user: "root",
    password: "root",
    database: "expressProject"
}

select_Login_User_Info = function(name,info = sqlInfo){
    let connection = mysql.createConnection({
        host: info.host,
        port: info.port,
        user: info.user,
        password: info.password,
        database: info.database
    })

    connection.connect();
    // 2022-02-22 22:36:00
    let sqlRequest = "SELECT * FROM login_user_info ;";
    connection.query(sqlRequest, function (error, results, fields) {
        if (error) throw error;
        if (results.length!=0){
            console.log(results);
            return results;
        }else{
            console.log('用户不存在！');
            return '用户不存在！';
        }
    });
    connection.end();
}
exports.select_Login_User_Info = select_Login_User_Info;
