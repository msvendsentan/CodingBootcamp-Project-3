const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
mongoose.promise = Promise

const authSchema = new Schema({
    username: { type: String },
    password: { type: String },
    email: { type: String }
});

// Define schema methods
authSchema.methods = {
	checkPassword: function (inputPassword) {
		return bcrypt.compareSync(inputPassword, this.password)
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10)
	}
}

// Define hooks for pre-saving
authSchema.pre('save', function (next) {
	if (!this.password) {
		console.log('models/Auth.js =======NO PASSWORD PROVIDED=======')
		next()
	} else {
		console.log('models/Auth.js hashPassword in pre save');
		
		this.password = this.hashPassword(this.password)
		next()
	}
})

const Auth = mongoose.model("Auth", authSchema);
module.exports = Auth;
