const mongoose = require('mongoose');
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
  }
});

itemSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__V;
  }
});

module.exports = mongoose.model('Item', itemSchema);
