const express = require('express');
const router = express.Router();

const ctrlAbout = require('../controllers/about');
const ctrlAuth = require('../controllers/auth');
const ctrlDesserts = require('../controllers/dessert');

// About API routes
router.get('/about', ctrlAbout.aboutList);
router.get('/about/:id', ctrlAbout.aboutReadOne);

// Auth API routes  
router.post('/auth/register', ctrlAuth.userRegister);
router.post('/auth/login', ctrlAuth.userLogin);

// Dessert API routes
router.get('/dessert', ctrlDesserts.dessertList);
router.get('/dessert/:id', ctrlDesserts.dessertReadOne);

module.exports = router;