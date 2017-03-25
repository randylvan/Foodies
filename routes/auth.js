const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');

const isAuthenticated = (req, res, next) => {
  if (req.user)
    next();
   else
     return res.json({ })
}

router.post('/signup', (req, res) => {
  let { email, password, firstName, lastName, zipCode, enabledCategories } = req.body;
  User.register(new User({username: email, firstName, lastName, zipCode, enabledCategories }), password, (err, user) => {
    if (err)
      return res.status(500).json(err);
    user.save( (err, user) => {
      if (err)
        return res.status(500).json(err);
      return res.json(user)
    });
  });
});

router.post('/signin', (req, res) => {
 let { email, password } = req.body
 User.findOne({ username: req.body.email}, (err, user) => {
   if (!user)
     return res.status(500).json({ message: 'Invalid Username Or Password' });
   user.authenticate(req.body.password, (err, user, passwordErr) => {
     if (err)
       return res.status(500).json({ message: 'Invalid Username Or Password' });
     if (passwordErr)
       return res.status(500).json({ message: 'Invalid Username Or Password' });

     req.logIn(user, (err) => {
       return res.json(user);
     })
   });
  });
});

router.get('/user', isAuthenticated, (req,res) => {
  return res.json(req.user)
});

// router.get('/info')

router.delete('/sign_out', (req, res) => {
  req.logout();
  res.status(200).json({});
});

// Add a category to the user enabledCategories array
// This works but sends only one category
router.put('/addUserCat', (req, res) => {
 let { id, title } = req.body
 User.findOneAndUpdate({ _id: id}, { enabledCategories: title }, (err, user) => {
   if (!user)
     return res.status(500).json({ message: 'Invalid Username' });
  });
});


// router.put('/addUserCat', (req, res) => {
//  let { id, title } = req.body
//  User.findById(id, (err, user )=> {
//   //  let currCats = user.enabledCategories;
//   //  currCats.push(title);
//   //  user.enabledCategories = currCats;
//   console.log("here in addUserCat");
//    user.enabledCategories.push(title);
//    user.save( (err, user) => {
//      res.json(user)
//    });
//  });
// });

module.exports = router;
