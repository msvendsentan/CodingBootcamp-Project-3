const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tableSchema = new Schema({
    number: { type: String, required: true },
    password: { type: String, required: true },
    capacity: { type: Number }
});

const Table = mongoose.model("Table", tableSchema);

module.exports = Table;