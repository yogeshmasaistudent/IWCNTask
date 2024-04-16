// Import MySQL library
const mysql = require("mysql2/promise");

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: "localhost", // MySQL host
  user: "root", // MySQL username
  password: "yogesh3672", // MySQL password
  database: "IWCNTask", // Database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Export the connection pool
module.exports = pool;
