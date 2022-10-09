const router = require('express').Router();
const User = require('../../models/User.js');

// /api/user

// returns all users in the db
router.get('/', (req, res) => {
  User.findAll({
    attributes: { exclude: ['password'] }
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// return a specific user by their id
router.get('/:id', async (req, res) => {
  try {
    const oneUser = await User.findOne({
      attributes: { exclude: 'password' },
      where: {
        id: req.params.id
      }
    });
    if (!oneUser) {
      res.status(404).json({ message: 'No user found' });
      return;
    }
    res.status(200).json(oneUser);
  } catch (err) {
    console.log(err);
    res.status(500).json();
  }
});

// create a new user when they signup, and sets their session to be logged in
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.username = userData.username;
      req.session.loggedIn = true;

    });
    res.status(200).json(userData);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;
