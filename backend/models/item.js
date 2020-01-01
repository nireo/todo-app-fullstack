const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.set('useFindAndModify', false);

// set database url
const url = process.env.MONGO_URI;

// connect to database
mongoose
  .connect(url, { useNewUrlParser: true })
  .then(() => {
    console.log('successfully connected to mongodb');
  })
  .catch(error => {
    console.log('error conencting while connecting to mongod', error.message);
  });

// set todo item schema
const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  itemTime: {
    type: String,
    required: true
  },
  byUser: {
    type: Schema.Types.ObjectId,
    ref: 'Item'
  }
});

module.exports = mongoose.model('Item', itemSchema);
