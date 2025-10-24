const mongoose = require('mongoose');
const About = mongoose.model('About');

const aboutPage = function (req, res) {
  About.find()
    .then(about => {
      console.log(about); 
      res.render('dessert-text', {
        title: 'About Dessert Delight',
        about
      });
    })
    .catch(err => {
      console.error('Database error:', err);
      res.status(500).send('Database error');
    });
};

module.exports = { aboutPage };
