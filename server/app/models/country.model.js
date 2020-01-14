'use strict';
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CountrySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        require: true
    },
    modifiedAt: {
        type: Date
    }
});

mongoose.model('Country', CountrySchema);