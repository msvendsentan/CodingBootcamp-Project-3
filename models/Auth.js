const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const authSchema = new Schema({
    user: { type: String},
    password: { type: String},
    email: { type: String}
});

const Auth = mongoose.model("Auth", authSchema);

module.exports = Auth;