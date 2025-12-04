const express = require('express');
const router = express.Router();

const ctrlAbout = require('../controllers/about');
const ctrlAuth = require('../controllers/auth');
const ctrlDesserts = require('../controllers/dessert');


/* Homepage showing the list of desserts */
router
  .route('/')
  .get(ctrlDesserts.dessertList);

/* About page */
router
  .route('/about')
  .get(ctrlAbout.aboutPage);

/* Login page for VEIWs ONLY not the api*/
router
  .route('/login')
  .get(ctrlAuth.login);

/* Register page VEIWs ONLY not the api */
router
  .route('/register')
  .get(ctrlAuth.register);

/* Dessert list page */
router
  .route('/dessert')
  .get(ctrlDesserts.dessertList);

/* Dessert details page */
router
  .route('/dessert/:id')
  .get(ctrlDesserts.dessertReadOne);

module.exports = router;
