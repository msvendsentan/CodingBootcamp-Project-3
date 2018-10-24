const db = require("../models");

module.exports = {
    getMenu: function(req, res) {
        db.Restaurant.findOne({ _id: req.body.rid })
            .populate("menu")
            .then(function(restaurant) {
                res.json(restaurant);
            }).catch(function(err) {
                console.log(err);
            });
    },
    addMenuItem: function(req, res) {
        db.Menu.create(req.body.item).then(function(item) {
            return db.Restaurant.findOneAndUpdate(
                { _id: req.body.rid },
                { $push: { menu: item._id } },
                { new: true }
            );
        }).then(function(restaurant) {
            res.json(restaurant);
        }).catch(function(err) {
            console.log(err);
        });
    },
    deleteMenuItem: function(req, res) {        
        db.Menu.findByIdAndRemove({ _id: req.body.id }).then(function(item) {
            return db.Restaurant.findOneAndUpdate(
                { _id: req.body.rid },
                { $pull: { menu: req.body.id } },
                { new: true }
            );
        }).then(function(restaurant) {
            res.json(restaurant);
        }).catch(function(err) {
            console.log(err);
        });
    }
}