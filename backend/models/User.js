const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  college: String,
  year: String,
  email: { type: String, unique: true },
  password: String,
});

module.exports = mongoose.model('User', userSchema);
