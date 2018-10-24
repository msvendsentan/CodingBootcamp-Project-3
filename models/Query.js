const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const querySchema = new Schema({
    query: { type: String },
});

const Query = mongoose.model("Query", querySchema);

module.exports = Query;