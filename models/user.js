let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let passportLocalMongoose = require('passport-local-mongoose');

let User = new Schema({
  username: { type : String, unique : true, required : true, dropDups: true },
  password: { type : String },
  firstName: {type: String},
  lastName: {type: String},
  zipCode: {type: String},
  enabledCategories: {type: Array},
  favorites: {type: Array},
  role: { type: String, default: 'user' }
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model( 'User', User );