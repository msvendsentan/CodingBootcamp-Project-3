const Auth = require('../models/Auth');
const LocalStrategy = require('passport-local').Strategy

const strategy = new LocalStrategy(
	{
		usernameField: 'username' // not necessary, DEFAULT
	},
	function(username, password, done) {
		Auth.findOne({ username: username }, (err, user) => {
			if (err) {
				return done(err)
			}
			if (!user) {
				return done(null, false, { message: 'Username and/or Password is incorrect' })
			}
			if (!user.checkPassword(password)) {
				return done(null, false, { message: 'Username and/or Password is incorrect' })
			}
			return done(null, user)
		})
	}
)

module.exports = strategy