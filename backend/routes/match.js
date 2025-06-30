const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');

// Weighted match scoring
function calculateMatchScore(current, other) {
  let score = 0;

  // Match skills ↔ interests
  const skillMatch = current.interests?.filter(interest => other.skills?.includes(interest)) || [];
  const interestMatch = current.skills?.filter(skill => other.interests?.includes(skill)) || [];

  score += skillMatch.length * 30;
  score += interestMatch.length * 30;

  // Shared vibeTags
  const vibeOverlap = current.vibeTags?.filter(tag => other.vibeTags?.includes(tag)) || [];
  score += vibeOverlap.length * 10;

  // Same goal
  if (current.goal === other.goal) score += 15;

  // Matching availability / interaction
  if (current.availability === other.availability) score += 10;
  if (current.interaction === other.interaction) score += 5;

  return score;
}

router.get('/api/match/:userId', async (req, res) => {
  const current = await Profile.findOne({ userId: req.params.userId });

  if (!current) return res.status(404).json({ error: 'Profile not found' });

  let potential = [];

  if (current.role === 'mentee') {
    potential = await Profile.find({ role: 'mentor' });
  } else if (current.role === 'mentor') {
    potential = await Profile.find({ role: 'mentee' });
  } else {
    potential = await Profile.find({ role: 'buddy', userId: { $ne: current.userId } });
  }

  const matches = potential
    .map(user => ({
      ...user._doc,
      matchScore: calculateMatchScore(current, user)
    }))
    .filter(u => u.matchScore > 0)
    .sort((a, b) => b.matchScore - a.matchScore);

  res.json(matches);
});

module.exports = router;
