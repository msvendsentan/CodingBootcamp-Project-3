const db = require("../models");

module.exports = {
    create: function(req, res) {
        db.Guest.create(req.body.name).then(function(guest) { //no logic for incorrect password!
            res.json(guest);
            return db.Table.findOneAndUpdate(
                { _id: req.body.tid },
                { $push: { guests: guest._id } },
                { new: true }
            );
        }).then(function(table) {
            console.log(table);
        }).catch(function(err) {
            console.log(err);
        });
    },
        
}

// add/edit items in order, get bill, post requests to server, get request status