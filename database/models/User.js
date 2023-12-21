const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  contact: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userRole:{ type:Number,requried:true},
  status:{type:Boolean,required:true}
});

const User = mongoose.model('User', userSchema);

module.exports = User;
