const express = require('express');
const router = express.Router();

const User = require('../models/User');
const Profile = require('../models/Profile');

// 🟢 Signup
// router.post('/api/auth/signup', async (req, res) => {
//   try {
//     const user = new User(req.body);
//     await user.save();
//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (err) {
//     res.status(400).json({ error: 'Signup failed or email exists' });
//   }
// });
router.post('/api/auth/signup', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();

    res.status(201).json({
      message: 'User registered successfully',
      userId: user._id  // ✅ return userId to frontend
    });
  } catch (err) {
    res.status(400).json({ error: 'Signup failed or email already exists' });
  }
});

// 🔵 Onboarding
// router.post('/api/onboarding', async (req, res) => {
//   try {
//     const profile = new Profile(req.body);
//     await profile.save();
//     res.status(201).json({ message: 'Profile saved successfully' });
//   } catch (err) {
//     res.status(400).json({ error: 'Onboarding failed' });
//   }
// });

// module.exports = router;
router.post('/api/onboarding', async (req, res) => {
  try {
    const profile = new Profile({
      userId: req.body.userId,  // ✅ assign userId
      ...req.body               // rest of the form data
    });

    await profile.save();
    res.status(201).json({ message: 'Profile saved successfully' });
  } catch (err) {
    res.status(400).json({ error: 'Onboarding failed' });
  }
});
module.exports = router;