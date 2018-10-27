const db = require("../models");

module.exports = {
    create: function (req, res) {
        db.Auth.findOne({ user: req.body.user })
            .then((account) => {
                if (account) {
                    res.send('Username is taken');
                } else {
                    db.Auth.create(req.body)
                        .then(() => {
                            res.send('Account created');
                        }).catch((err) => {
                            console.log(err);
                        })
                }
            }).catch((err) => {
                console.log(err);
            })
    },
    login: function (req, res) {
        db.Auth.findOne({
            user: req.body.user,
            password: req.body.password
        })
            .then((account) => {
                if (account) {
                    res.send('Login successful, Welcome!')
                } else {
                    res.send('Username and/or password incorrect')
                }
            }).catch((err) => {
                console.log(err);
            })
    }
}

// might not be needed, but placeholder to handle auth (login) queries