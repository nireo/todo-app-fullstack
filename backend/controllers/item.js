const router = require('express').Router();
const Item = require('../models/item');

router.get('/', async (req, res) => {
  try {
    const items = await Item.find();
    return res.json(items);
  } catch (e) {
    return res.status(500);
  }
});

router.post('/', async (req, res) => {
  const { name, itemTime } = req.body;

  console.log(name);

  if (req.body === undefined) {
    return res.status(400).json({
      error: 'invalid body'
    });
  }

  const item = new Item({
    name,
    itemTime
  });

  const saved = await item.save();
  return res.json(saved);
});

router.delete('/:id', async (req, res) => {
  try {
    await Item.findByIdAndRemove(req.params.id);
    return res.status(204).end();
  } catch {
    return res.status(500);
  }
});

module.exports = router;
