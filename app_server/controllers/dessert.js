const request = require('request');

const apiOptions = {
    server: 'http://localhost:3000'
};

if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://web-frameworks-project-xcuw.onrender.com';
}

// CONTROLLER FUNCTION for dessert list
const dessertList = function(req, res) {
    const requestOptions = {
        url: apiOptions.server + '/api/dessert',
        method: 'GET',
        json: {}
    };
    
    request(requestOptions, (err, response, body) => {
        if (err) {
            console.error('API error:', err);
            return res.status(500).send('API request failed');
        }
        if (response.statusCode !== 200) {
            return res.status(response.statusCode).send('Error from API');
        }
        res.render('dessert-info', {
            title: 'Dessert Delight',
            desserts: body
        });
    });
};

const dessertReadOne = function(req, res) {
    const requestOptions = {
        url: apiOptions.server + '/api/dessert/' + req.params.id,
        method: 'GET',
        json: {}
    };
    
    request(requestOptions, (err, response, body) => {
        if (err) {
            console.error('API error:', err);
            return res.status(500).send('API request failed');
        }
        if (response.statusCode !== 200) {
            return res.status(response.statusCode).send('Error from API');
        }
        res.render('dessert-details', {
            title: body.name,
            dessert: body
        });
    });
};

module.exports = {
    dessertList,
    dessertReadOne
};