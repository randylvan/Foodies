let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let passportLocalMongoose = require('passport-local-mongoose');

let User = new Schema({
  username: { type : String, unique : true, required : true, dropDups: true },
  password: { type : String },
  email:{type: String, unique: true},
  firstName:{type: String},
  lastName:{type: String},
  zipCode:{type: Number},
  role: { type: String, default: 'user' }
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model( 'User', User );
