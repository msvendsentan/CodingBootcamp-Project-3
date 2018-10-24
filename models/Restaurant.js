const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    address: { type: String, required: true },
    imageSrc: { type: String, required: true },
    menu: [
        {
            type: Schema.Types.ObjectId,
            ref: "Menu"
        }
    ],
    tables: [
        {
            type: Schema.Types.ObjectId,
            ref: "Table"
        }
    ]
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;