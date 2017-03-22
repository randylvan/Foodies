const express = require('express');
const router = express.Router();
const yelp = require('yelp-fusion');
 
const token = yelp.accessToken(process.env.YELP_CONSUMER_KEY, process.env.YELP_CONSUMER_SECRET).then(response => {
  console.log('Good job!');
}).catch(e => {
  console.log(e);
});

const client = yelp.client(process.env.YELP_TOKEN_SECRET);
 
let cat = ['salvadoran', 'german', 'american', 'thai', 'chinese', 'mexican'];

let category = () => {
  let random = (Math.floor(Math.random() * cat.length) + 1);
  return(cat[random]);
}

client.search({
  categories: category(),
  location: '84116'
}).then(response => {
  console.log(response.jsonBody.businesses);
}).catch(e => {
  console.log(e);
});

module.exports = router;