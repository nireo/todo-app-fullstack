const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    if (!username || !password) {
      return res.status(400).json({
        error: 'invalid body'
      });
    }

    const salt = 10;
    await bcrypt.hash(password, salt, async (err, passwordHash) => {
      if (err) return res.status(500);
      const newUser = new User({
        username,
        password: passwordHash
      });

      const saved = await newUser.save();
      return res.json(saved);
    });
  } catch {
    return res.status(500);
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username }).populate('items');

    const checkPassword =
      user === null ? false : await bcrypt.compare(password, user.password);

    if (!(user && checkPassword)) {
      return res.status(401).json({
        error: 'invalid username or password.'
      });
    }

    const userToken = {
      username: user.username,
      id: user._id
    };

    const token = jwt.sign(userToken, process.env.SECRET);
    return res.status(200).send({ token, user });
  } catch {
    return res.status(500);
  }
});

module.exports = router;
