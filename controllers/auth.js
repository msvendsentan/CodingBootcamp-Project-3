const Auth = require("../models/Auth");

module.exports = {
    create: function (req, res) {
        Auth.findOne({ username: req.body.username })
            .then((account) => {
                if (account) {
                    res.send('Username is taken');
                } else {
                    Auth.create(req.body)
                        .then(() => {
                            res.send('Account created');
                        }).catch((err) => {
                            console.log(err);
                        })
                }
            }).catch((err) => {
                console.log(err);
            })
    }
}

// might not be needed, but placeholder to handle auth (login) queries