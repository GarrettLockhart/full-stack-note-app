const withAuth = require('../utils/helpers');

const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('homepage');
});

router.get('/dashboard', withAuth, (req, res) => {
  res.render('dashboard');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.get('/login', (req, res) => {
  res.render('login');
});

module.exports = router;