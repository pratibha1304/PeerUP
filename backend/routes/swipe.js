const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');

// POST /api/swipe
router.post('/api/swipe', async (req, res) => {
  const { from, to, direction } = req.body; // from = current user, to = target user

  try {
    const fromUser = await Profile.findOne({ userId: from });
    const toUser = await Profile.findOne({ userId: to });

    if (!fromUser || !toUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Handle Right Swipe
    if (direction === 'right') {
      if (toUser.rightSwipes.includes(fromUser.userId)) {
        // Mutual match
        if (!fromUser.matches.includes(toUser.userId)) {
          fromUser.matches.push(toUser.userId);
        }
        if (!toUser.matches.includes(fromUser.userId)) {
          toUser.matches.push(fromUser.userId);
        }
        await fromUser.save();
        await toUser.save();
        return res.json({ message: '🎉 It’s a match!', matched: true });
      }

      // Else, just record right swipe
      if (!fromUser.rightSwipes.includes(toUser.userId)) {
        fromUser.rightSwipes.push(toUser.userId);
        toUser.notifications.push(`${fromUser.email} liked your profile`);
      }
      await fromUser.save();
      await toUser.save();
      return res.json({ message: 'Swipe saved. Waiting for mutual interest.' });
    }

    // Handle Left Swipe (optional — just remove them from potential matches)
    return res.json({ message: 'Disliked, not saving.' });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Swipe error' });
  }
});

module.exports = router;
