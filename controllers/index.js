const router = require('express').Router();
const postRoutes = require('./api/postRoutes.js');
const userRoutes = require('./api/userRoutes.js')
const homeRoutes = require('./homeRoutes');

router.use('/api/posts', postRoutes)
router.use('/api/user', userRoutes);
router.use('/', homeRoutes);

module.exports = router;