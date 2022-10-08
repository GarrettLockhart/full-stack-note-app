const router = require('express').Router();
const notesRoutes = require('./api/notesRoutes.js');
const userRoutes = require('./api/userRoutes.js')
const homeRoutes = require('./homeRoutes');

router.use('/api/notes', notesRoutes)
router.use('./api/user', userRoutes);
router.use('/', homeRoutes);

module.exports = router;