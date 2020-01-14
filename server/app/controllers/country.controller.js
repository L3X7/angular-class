var mongoose = require('mongoose'),
    Country = mongoose.model('Country'),
    hr = require('./../helpers/response.helper');

exports.get = (req, res) => {
    let response = null;
    if (req.params.id != null) {
        Country.findOne({ _id: req.params.id }, (err, el) => {
            if (err) {
                response = hr.helper.response500();
                res.status(500).send(response);
            } else {
                response = hr.helper.response200();
                response.parameters = el;
                res.status(200).send(response);
            }
        });
    } else {
        Country.find({}, (err, el) => {
            if (err) {
                response = hr.helper.response500();
                res.status(500).send(response);
            } else {
                response = hr.helper.response200();
                response.parameters = el;
                res.status(200).send(response);
            }
        });
    }
}

exports.post = (req, res) => {
    let body = req.body;
    let country = new Country();
    let properties = hr.helper.getPropertiesFromSchema(country);
    country = hr.helper.prepareToCreateForSchema(body, properties, country);
    country.createdAt = new Date();
    country.save((err) => {
        let response = null;
        if (err) {
            response = hr.helper.response500();
            res.status(500).send(response);
        }
        else {
            response = hr.helper.response200();
            res.status(200).send(response);
        }
    });
}

exports.put = (req, res) => {
    let body = req.body;
    Country.findOne({
        _id: body.id
    }, (err, el) => {
        if (err) {
            response = hr.helper.response500();
            res.status(500).send(response);
        } else {
            el.update({
                name: body.name,
                code: body.code
            }, (err, el) => {
                if (err) {
                    response = hr.helper.response500();
                    res.status(500).send(response);
                } else {
                    response = hr.helper.response200();
                    res.status(200).send(response);
                }
            })
        }
    });
}   