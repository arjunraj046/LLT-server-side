//models/UserData.js
const mongoose = require('mongoose');

const userDataSchema = new mongoose.Schema({
  tokenNumber: { type: Number, required: true },
  count: { type: Number, required: true },
});

const UserData = mongoose.model('UserData', userDataSchema);

module.exports = UserData;
