const express = require('express');
const router = express.Router();
const yelp = require('yelp-fusion');
const MainPage = require('../client/components/Yelp');
 
const token = yelp.accessToken(process.env.YELP_CONSUMER_KEY, process.env.YELP_CONSUMER_SECRET).then(response => {
  console.log('Good job!');
}).catch(e => {
  console.log(e);
});

const client = yelp.client(process.env.YELP_TOKEN_SECRET);
 

router.get('/api', (req,res) => {
  console.log(req.query)
  let {category, zipCode} = req.query;
  console.log(category);
  client.search({
  categories: category,
  location: zipCode,
  limit: "50"
  }).then(response => {
  res.json(response.jsonBody.businesses);
  }).catch(e => {
  console.log(e);
  });
});




module.exports = router;