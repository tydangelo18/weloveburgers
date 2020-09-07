// Import MySQL connection from connection.js
let connection = require("../config/connection.js");

// Helper function for MySQL Syntax
// num is the number of values to pass into the query
function pushQuestionMarks(num) {
    // Declare empty array 
    let questionArr = [];
    
    // Loop through questionArr and push a "?" at each iteration
    for (let i = 0; i < num; i++) {
        questionArr.push("?");
    }

    return questionArr.toString();
}

// Helper function to covert key:value pairs into MySQL syntax
function objectToSql(obj) {
    let objectArr = [];

    // Loop through keys and convert to a string
    for (let key in obj) {
        let value = ob[key];
        // Find hidden properties
        if (Object.hasOwnProperty.call(obj, key)) {
            // add quotes for strings with spaces
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            // Allow key to equal the value as a string
            objectArr.push(key + "=" + value);
        }
    }

    // Convert array of strings into a single comma-separated string
    return objectArr.toString();
}

// Object for SQL Statement functions
let orm = {
    // SELECT method
    all: function(tableInput, cb) {
        // SELECT method
        let queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // CREATE method
    create: function(table, cols, vals, cb) {
        
        let queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += pushQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    // UPDATE method
    update: function(table, objColVals, condition, cb) {
        let queryString = "UPDATE " + table;

        queryString += " SET";
        queryString += objectToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    // DELETE method
    delete: function(table, condition, cb) {
        let queryString = "DELETE FROM " + table;
        queryString += "WHERE ";
        queryString += condition;

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
};

// Export ORM object for the Model to use
module.exports = orm;



