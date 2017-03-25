const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Category = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    enabled: { type: Boolean }
});

module.exports = mongoose.model('Category', Category);