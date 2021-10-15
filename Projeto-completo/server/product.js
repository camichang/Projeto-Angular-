var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    name: String
});

module.exports = mongoose.model("Product", productSchema) 