const express = require('express');
const router = express.Router();
const Category = require('../models/category');

router.get('/', (req, res) => {
  Category.find( ( err, categories) => {
    console.log(categories)
    res.json(categories);
  });
});

module.exports = router