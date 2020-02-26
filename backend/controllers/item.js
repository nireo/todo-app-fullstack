const router = require('express').Router();
const Item = require('../models/item');
const jwt = require('jsonwebtoken');

const getToken = req => {
  const authorization = req.get('authorization');
  if (authorization && authorization.toLowerCase().startsWith('bearer')) {
    return authorization.substring(7);
  }
  return null;
};

router.get('/all', async (req, res) => {
  const items = await Item.find({});
  return res.json(items);
});

router.get('/', async (req, res) => {
  const token = getToken(req);
  try {
    const decodedToken = jwt.verify(token, process.env.SECRET);
    if (!token || !decodedToken) {
      return res.status(401).json({
        error: 'invalid token'
      });
    }

    const items = await Item.find({ byUser: decodedToken.id });
    return res.json(items);
  } catch (e) {
    return res.status(500);
  }
});

router.post('/', async (req, res) => {
  const { name, itemTime } = req.body;
  const token = getToken(req);
  try {
    if (req.body === undefined) {
      return res.status(400).json({
        error: 'invalid body'
      });
    }

    const decodedToken = jwt.verify(token, process.env.SECRET);
    if (!token || !decodedToken) {
      return res.status(401).json({
        error: 'invalid token'
      });
    }

    const item = new Item({
      name,
      itemTime,
      byUser: decodedToken.id
    });

    const saved = await item.save();
    return res.json(saved);
  } catch {
    return res.status(500);
  }
});

router.delete('/:id', async (req, res) => {
  const token = getToken(req);
  try {
    const decodedToken = jwt.verify(token, process.env.SECRET);
    if (!token || !decodedToken) {
      return res.status(401).json({
        error: 'invalid token'
      });
    }

    await Item.findByIdAndRemove(req.params.id).exec(() => {
      return res.status(204).end();
    });
  } catch {
    return res.status(500);
  }
});

module.exports = router;
