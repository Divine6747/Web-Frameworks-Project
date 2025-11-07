const mongoose = require('mongoose');
const Dessert = mongoose.model('Dessert');

const dessertList = function (req, res) {
  Dessert.find()
    .then(desserts => {
      res.render('dessert-info', { 
        title: 'Simple Dessert Recipes', 
        desserts 
      });
    })
    .catch(err => {
      console.error('Database error:', err);
      res.status(500).send('Database error');
    });
};

module.exports = { dessertList };
