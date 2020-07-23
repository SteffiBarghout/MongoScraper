//Require Mongoose
var mongoose = require("mongoose");
//Require express
var express = require("express");
//var express-handlebars
var exphbs = require("express-handlebars");
//var 

// Create an instance of the express app.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Requiring the `Example` model for accessing the `examples` collection
var Example = require("./exampleModel.js");

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/schemaexample", { useNewUrlParser: true });

// Create an object containing dummy data to save to the database
var data = {
    array: ["item1", "item2", "item3"],
    boolean: false,
    string: "\"Don't worry if it doesn't work right. If everything did, you'd be out of a job\" - Mosher's Law of Software Engineering",
    number: 42
};

// Save a new Example using the data object
Example.create(data)
    .then(function(dbExample) {
        // If saved successfully, print the new Example document to the console
        console.log(dbExample);
    })
    .catch(function(err) {
        // If an error occurs, log the error message
        console.log(err.message);
    });