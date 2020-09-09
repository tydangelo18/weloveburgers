// Require Express
let express = require("express");

// Set the Port for listening
let PORT = process.env.PORT || 8080;

// Set up express app
let app = express();

// Serve static content from the app to public views
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars
let exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give server route access
let routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});



