const mysql = require('mysql2/promise');

const con = mysql.createPool({
  host: "localhost",
  user: "root",
  port:3307,
  password: "password",
  database: "blog"
});




module.exports = con