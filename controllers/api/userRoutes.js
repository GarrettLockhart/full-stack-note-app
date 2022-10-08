const router = require('express').Router();

// /api/user

router.get('/', (req, res) => {
  res.send('user')
});

module.exports = router;