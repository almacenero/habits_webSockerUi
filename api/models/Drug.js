const mongoose = require("mongoose");

const DrugSchema = mongoose.Schema({
  name: { type: String },
  typeDrug: { type: String },
  amount: { type: Number },
  date: { type: Date, default: Date.now() },
  price: { type: Number },
  localization: { type: String },
});

module.exports = mongoose.model("Drug", DrugSchema);
