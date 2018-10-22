const db = require("../models");

module.exports = {
    getAll: function(req, res) {  
        db.Restaurant.find({}).then(function(restaurants) {
            res.json(restaurants);
        }).catch(function(err) {
            res.json(err);
        });     
    },
    getOne: function(req, res) {
        db.Restaurant.findOne({ _id: req.params.id }).then(function(restaurant) {
            res.json(restaurant);
        }).catch(function(err) {
            res.json(err);
        });
    },
    create: function(req, res) {
        db.Restaurant.create(req.body).then(function(restaurant) {
            res.json(restaurant);
        }).catch(function(err) {
            res.json(err);
        });
    },
    delete: function(req, res) {
        db.Restaurant.findByIdAndRemove({ _id: req.params.id }).then(function(restaurant) {
            res.json(restaurant);
        }).catch(function(err) {
            res.json(err);
        });
    }
}

//initial restaurant creation, req.body will probably be in the form of name, description, image