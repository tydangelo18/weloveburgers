// Import mysql dependency
const mysql = require('mysql');

// Set up MySQL connection and Hook with JawsDB
let connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password",
        database: "burger_db"
    });
};

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