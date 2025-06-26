const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('PeerUp Backend Running');
});

module.exports = router;
