'use strict';
let country = require('./../controllers/country.controller');
module.exports = (app) => {
    app.route('/country').get(country.get);
    app.route('/country').post(country.post);
    app.route('/country').put(country.put);
}
