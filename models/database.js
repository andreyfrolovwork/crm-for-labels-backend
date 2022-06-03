require("dotenv").config();
const mysql_promise = require("mysql2/promise");
const mysql = mysql_promise.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 3307,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
module.exports = mysql;
