const mongoose = require("mongoose");

const favoritesSchema = new mongoose.Schema({
  loc_aqi: { type: String, required: true },
  lat: { type: String, required: true },
  lon: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  favoriteLocation: { type: String, required: true },
  lastRefreshed: { type: Date, required: true },
});

module.exports = mongoose.model("favorite", favoritesSchema);
