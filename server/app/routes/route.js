const express = require('express'),
    router = express.Router();

require('./country.route')(router);

module.exports = router;