const express = require('express'),
    app = express(),
    cors = require('cors'),
    port = process.env.PORT || 8082;

const mongoose = require('mongoose');
const mongo = require('./app/helpers/mongo.helper');
const bodyParse = require('body-parser');
require('./app/models/model');
const api = require('./app/routes/route');

app.use(cors());
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: false }));

mongoose.connect('mongodb://' + mongo.prodMongDb + '/' + mongo.mongoDb, { useNewUrlParser: true });

app.use(cors());
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: false }));

app.use('/api', api);

app.listen(port, () => {
    console.log(`${port}`);
});
