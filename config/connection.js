// Import mysql dependency
const mysql = require('mysql');

// Set up MySQL connection
let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burger_db"
});

// Make MySQL connection
connection.connect(function(err) {
    if (err) {
        console.error("Error Connecting: " + err.stack);
        return;
    }
    console.log("Connected as id " + connection.threadId);
});

// Export connection for ORM to use
module.exports = connection;