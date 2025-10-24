const express = require('express');
const router = express.Router();
const ctrlAbout= require('../controllers/about');
const ctrlAuth = require('../controllers/auth');
const ctrlDest = require('../controllers/dessert');

/* Home page */
router.get('/', ctrlDest.dessertList);

/* Other pages */
router.get('/about', ctrlAbout.aboutPage);
router.get('/login', ctrlAuth.login);
router.get('/register', ctrlAuth.register);
router.get('/dessert-info', ctrlDest.dessertList);


module.exports = router;
