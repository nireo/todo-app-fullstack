require('dotenv').config();
const express = require('express');
const Item = require('./models/item');
const bodyParser = require('body-parser');
const cors = require('cors');
const itemRouter = require('./controllers/item');
const userRouter = require('./controllers/user');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors());

app.use('/', itemRouter);
app.use('/user', userRouter);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
