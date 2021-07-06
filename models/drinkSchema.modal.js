"use strict";
const mongoose = require("mongoose");

const drinkSchema = mongoose.Schema({
  id: { type: Number, unique: true },
  name: String,
  img: String,
});

const drinkModel = mongoose.model("drinks", drinkSchema);

module.exports = drinkModel;
