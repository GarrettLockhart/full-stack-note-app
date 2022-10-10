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
router.get('/:email', async (req, res) => {
  try {
    const oneUser = await User.findOne({
      attributes: { exclude: 'password' },
      where: {
        email: req.params.email
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


// logs user in
router.post('/login', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }
    
    const validPassword = dbUserData.checkPassword(req.body.password);
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect password. Please try again!' });
      return;
    }
    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.logged_in = true;

      res.json({ user: dbUserData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// logs user out
router.post('/logout', async (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
