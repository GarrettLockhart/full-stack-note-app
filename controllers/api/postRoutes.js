const router = require('express').Router();
const Post = require('../../models/Post.js');

// /api/posts

router.get('/', async (req, res) => {
  try {
    const allPosts = await Post.findAll();
    if (!allPosts) {
      res.status(404).json({ message: 'No posts found.' });
    }
    res.status(200).json(allPosts);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const newPostDb = await Post.create(req.body);

    if (!newPostDb) {
      res.status(400).json({ message: 'Failed to create post' })
    }
    res.status(200).json(newPostDb);
  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
})

module.exports = router;
