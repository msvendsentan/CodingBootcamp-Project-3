const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const guestSchema = new Schema({
    name: { type: String },
    order: { type: Array },
    queries: [
        {
            type: Schema.Types.ObjectId,
            ref: "Query"
        }
    ]
});

const Guest = mongoose.model("Guest", guestSchema);

module.exports = Guest;