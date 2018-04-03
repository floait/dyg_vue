
// 数据接口 登入数据库
let mysql = require('mysql');
let pool  = mysql.createPool({
  host:'localhost',
  port:'3306',
  database:'test',
  user:'root',
  password:'root'
});



pool.getConnection(function(err, connection) {
  if (err) {console.log(err)}
  else{
    console.log('链接数据库OK');
  }
});




