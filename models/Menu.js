const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = new Schema({
    item: { type: String, required: true },
    description: { type: String, required: true },
    type: { type: String, required: true },
    price: { type: Number, required: true },
    imageSrc: { type: String }
});

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;