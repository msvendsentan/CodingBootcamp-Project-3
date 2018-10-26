const db = require("../models");

module.exports = {
    create: function (req, res) {
        db.Auth.findOne({user: req.body.user})
            .then(function (account) {
                if (account) {
                    res.send('Username is taken');
                } else {
                    db.Auth.create(req.body)
                        .then(function (account) {
                            res.send('Account created');
                        }).catch(function (err) {
                            console.log(err);
                        })
                }
            })
    },
    login: function (req, res) {
        db.Auth.findOne({
            user: req.body.user,
            password: req.body.password
        })
            .then(function (account) {
                res.json(account)
            }).catch(function (err) {
                console.log(err);
            })
    }
}

// might not be needed, but placeholder to handle auth (login) queries