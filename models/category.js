const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Category = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    enabled: { type: Boolean, default: true }
});

module.exports = mongoose.model('Category', Category);