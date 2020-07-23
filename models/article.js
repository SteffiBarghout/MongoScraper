//Require Mongoose
var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new ArticleSchema object
var ArticleSchema = new Schema({
    // 'image' maybe do not use if this is not something on the site scraped, if site does not have image that is fine
    image: {
        type: String,
        required: false,
    },
    // `headline` is required and of type String
    headline: {
        type: String,
        required: true
    },
    // `url` is required and of type String
    url: {
        type: String,
        required: true
    },
    // `summary` is required and of type String
    summary: {
        type: String,
        required: true
    },
    // `note` is an object that stores a Note id
    // The ref property links the ObjectId to the Note model
    // This allows us to populate the Article with an associated Note
    // To Do: Set a cap on the number of notes if there is time at the end
    //[] allows for multiple notes, makes this an array
    note: [{
        type: Schema.Types.ObjectId,
        ref: "Note"
    }]
});

// This creates our model from the above schema, using mongoose's model method
var Article = mongoose.model("Article", ArticleSchema);

// Export the Article model
module.exports = Article;