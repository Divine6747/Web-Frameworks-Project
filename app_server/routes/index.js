const express = require('express');
const router = express.Router();
const ctrlOthers = require('../controllers/others');
const ctrlAuth = require('../controllers/auth');
const ctrlDest = require('../controllers/dessert');

/* Home page */
router.get('/', ctrlDest.dessertList);

/* Other pages */
router.get('/about', ctrlOthers.about);
router.get('/login', ctrlAuth.login);
router.get('/register', ctrlAuth.register);
router.get('/dessert-info', ctrlDest.dessertList);

module.exports = router;
