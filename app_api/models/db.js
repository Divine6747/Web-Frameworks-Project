const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://Divine:1234@cluster0.fkrib2b.mongodb.net/DessertDelight?retryWrites=true&w=majority';

mongoose.connect(dbURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));


require('./dessert');
require('./about');
require('./user');

module.exports = mongoose;
