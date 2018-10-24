const randomstring = require("randomstring");
const db = require("../models");

module.exports = {
    getTables: function(req, res) {
        db.Restaurant.findOne({ _id: req.body.rid })
            .populate("tables")
            .then(function(restaurant) {
                res.json(restaurant);
            }).catch(function(err) {
                console.log(err);
            });
    },
    addTable: function(req, res) {
        req.body.table["password"] = randomstring.generate(6);  
        db.Table.create(req.body.table).then(function(table) {
            return db.Restaurant.findOneAndUpdate(
                { _id: req.body.rid },
                { $push: { tables: table._id } },
                { new: true }
            );
        }).then(function(restaurant) {
            res.json(restaurant);
        }).catch(function(err) {
            console.log(err);
        });
    },
    deleteTable: function(req, res) {
        db.Table.findByIdAndRemove({ _id: req.body.id }).then(function(table) {
            return db.Restaurant.findOneAndUpdate(
                { _id: req.body.rid },
                { $pull: { tables: req.body.id } },
                { new: true }
            );
        }).then(function(restaurant) {
            res.json(restaurant);
        }).catch(function(err) {
            console.log(err);
        });
    },
    refreshTablePsws: function(req, res) {
        //Pending, map across current tables and then redo generate and save.
    }
}