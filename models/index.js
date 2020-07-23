// Exporting an object containing all of our models
// This allows for use of db

module.exports = {
    Article: require("./article"),
    Note: require("./note")
};