const mongoose = require("mongoose");

const favoritesSchema = new mongoose.Schema({
  lat: { type: String, required: true },
  lon: { type: String, required: true },
  favoriteLocation: { type: String, required: true },
  createdOn: { type: Date, default: Date.now, required: true },
});

module.exports = mongoose.model("favorite", favoritesSchema);
