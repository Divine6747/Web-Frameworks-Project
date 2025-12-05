const express = require('express');
const router = express.Router();

const ctrlAbout = require('../controllers/about');
const ctrlAuth = require('../controllers/auth');
const ctrlDesserts = require('../controllers/dessert');  // Imports the controller

/* About page */
router.route('/about').get(ctrlAbout.aboutPage);

/* Login page */
router.route('/login').get(ctrlAuth.login);

/* Register page */
router.route('/register').get(ctrlAuth.register);

/* Homepage - Angular version */
router.get('/', function(req, res) {
    res.render('dessert-angular', { 
        title: 'Dessert Delight',
        pageHeader: {
            title: 'Dessert Delight',
            strapline: 'Sweet treats for everyone!'
        },
        sidebar: {
            context: 'is the number one place to find the best dessert recipes.',
            callToAction: 'Looking for a specific dessert? Check out our original Pug version at dessert-old!'
        }
    });
});

/* Original Pug dessert list - ROUTE USING CONTROLLER */
router.route('/dessert-old').get(ctrlDesserts.dessertList);  // This calls the controller function

/* Individual dessert details */
router.route('/dessert/:id').get(ctrlDesserts.dessertReadOne);

/* Angular test page */
router.get('/angular-test', function(req, res) {
    res.render('dessert-angular', { 
        title: 'Dessert Delight - Angular Test',
        pageHeader: {
            title: 'Dessert Delight - Angular Test',
            strapline: 'Testing our new Angular integration'
        },
        sidebar: {
            context: 'This is a test page for our Angular component.',
            callToAction: 'Visit the main homepage for the live version.'
        }
    });
});

module.exports = router;