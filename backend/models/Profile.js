const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  email: String,
  role: String,
  goal: String,
  skills: [{ name: String, level: String }],
  interests: [String],
  vibe: [String],
  availability: String,
  interaction: String,
  rightSwipes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Profile' }],
  matches: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Profile' }],
  notifications: [String], // optional

});
// models/Profile.js or models/User.js
matched = {
  rightSwipes: [String],   // userIds this user liked
  matches: [String],       // mutual matches
};

module.exports = mongoose.model('Profile', profileSchema);
