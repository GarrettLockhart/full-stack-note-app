const router = require('express').Router();

// /api/notes

router.get('/', (req, res) => {
  res.send('notes')
})

module.exports = router;