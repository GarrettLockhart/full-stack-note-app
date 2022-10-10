const withAuth = require('../utils/helpers');
const Post = require('../models/Post.js');
const sequelize = require('../config/connection');

const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    const dbPostsData = await Post.findAll({
      attributes: {
        exclude: ['id', 'content', 'post_creator']
      }
    });

    const posts = dbPostsData.map((post) => post.get({ plain: true }));

    res.render('homepage', {
      posts
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
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
