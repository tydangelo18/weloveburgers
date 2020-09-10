// Import mysql dependency
const mysql = require('mysql');

// Set up MySQL connection and Hook with JawsDB
let connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'burger_db' || process.env.DATABASE
    });
};

// Make MySQL connection
connection.connect();

// Export connection for ORM to use
module.exports = connection;