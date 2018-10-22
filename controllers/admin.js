const randomstring = require("randomstring");
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
            res.json(err);
        });
    },
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
        console.log(req.body);     
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
            res.json(err);
        });
    },
    refreshTablePsws: function(req, res) {
        //Pending, map across current tables and then redo generate and save.
    }

}

// new/view/edit menu, new/view/edit tables, generate new table passwords