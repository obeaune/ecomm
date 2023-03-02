const bodyParser = require('body-parser');

const payments = require('./paymentsRoute.js');

const routes = (app) => {
    app.use(bodyParser.json(), payments);
};

module.exports = routes;
