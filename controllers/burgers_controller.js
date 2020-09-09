// Import Express
let express = require("express");

// Import Router
let router = express.Router();

// Import the burger Model
let burger = require('../models/burger.js');


// Routes for CRUD operations

// Get all burgers from DB
router.get("/", function(req, res) {
    burger.all(function(data) {
        let hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// Create a burger
router.post("/api/burgers", function(req, res) {
    console.log(req.body);
    burger.create([
        "burger_name", "munched"
    ], [
        req.body.burger_name, req.body.munched
    ], function(result) {
        res.json({ id: result.insertId });
    });
});

// Update a burger
router.put("/api/burgers/:id", function(req, res) {
    let condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        munched: req.body.munched
    }, condition, function(result) {
        // If no rows were changed, Id does not exist (404 Error)
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Delete a burger
router.delete("/api/burgers/:id", function(req, res) {
    let condition = "id = " + req.params.id;

    burger.delete(condition, function(result) {
        // If no rows were changed, Id does not exist (404 Error)
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use
module.exports = router;
