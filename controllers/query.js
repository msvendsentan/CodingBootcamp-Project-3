const db = require("../models");

module.exports = {
    create: function(req, res) {
        db.Query.create(req.body.query).then(function(query) {
            res.json(query)
            return db.Guest.findOneAndUpdate(
                { _id: req.body.gid },
                { $push: { queries: query._id } },
                { new: true }
            );
        }).then(function(guest) {
            console.log(guest);
        }).catch(function(err) {
            console.log(err);
        });
    },
    getAllByGuest: function(req, res) {
        db.Guest.findOne({ _id: req.body.gid })
            .populate("queries")
            .then(function(guest) {
                res.json(guest);
            }).catch(function(err) {
                console.log(err);
            });
    },
    getAllByTable: function(req, res) {
        db.Table.findOne({ _id: req.body.tid })
            .populate({
                path: "guests",
                populate: { path: "queries" }
            })
            .then(function(table) {
                res.json(table);
            }).catch(function(err) {
                console.log(err);
            });
    },
    getAllByRestaurant: function(req, res) {
        db.Restaurant.findOne({ _id: req.body.rid })
            .populate({
                path: "tables",
                populate: {
                    path: "guests",
                    populate: { path: "queries" }
                }
            })
            .then(function(restaurant) {
                res.json(restaurant);
            }).catch(function(err) {
                console.log(err);
            });
    },
    getAllByGuest: function(req, res) {
        db.Guest.findOne({ _id: req.body.gid })
            .populate("queries")
            .then(function(guest) {
                res.json(guest);
            }).catch(function(err) {
                console.log(err);
            });
    },
    delete: function(req, res) {
        db.Query.findByIdAndRemove({ _id: req.body.id }).then(function(query) {
            return db.Guest.findOneAndUpdate(
                { _id: req.body.gid },
                { $pull: { queries: req.body.gid } },
                { new: true }
            );
        }).then(function(guest) {
            res.json(guest);
        }).catch(function(err) {
            console.log(err);
        });
    }
        
}

// add/edit items in order, get bill, post requests to server, get request status