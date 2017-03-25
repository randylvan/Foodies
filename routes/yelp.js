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
 
let cat = ['salvadoran', 'german', 'thai', 'chinese', 'mexican'];

let category = () => {
  let random = (Math.floor(Math.random() * cat.length));
  console.log(cat[random])
  return(cat[random]);
}

router.get('/yelp/api', (req,res) => {
  let cate = category();
  client.search({
  categories: cate,
  location: '84116'
}).then(response => {
  res.json(response.jsonBody.businesses);
  console.log(response.jsonBody.businesses);
}).catch(e => {
  console.log(e);
});
});


module.exports = router;