const mysql = require('mysql2/promise');

const con = mysql.createPool({
  host: "localhost",
  user: "root",
  port:3307,
  password: "password",
  database: "todo_list"
});




module.exports = con