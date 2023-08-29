const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//Import our model so we can us it to interact with the realated data in MongoDB
const Favorite = require("../models/favorites.model");

const favoritesController = {
  saveFavorite: async function (req, res) {
    //using a try/catch since we are using asyn/await and want to catch any errors if the code in the try block fails
    try {
      let favorite = new Favorite(req.body);
      favorite.save();
      res.status(200).json(favorite);
    } catch (error) {
      //if any code in the try block fails, send the user a HTTP status of 400 and a message
      res.status(400).send("Something went wrong: " + error);
    }
  },
  getFavorites: async function (req, res) {
    try {
      let allFavorites = await Favorite.find({ userId: req.params.userId }).sort({ 'lastRefreshed': -1 })
      // return all the favorites that we found in JSON format
      res.json(allFavorites);
    } catch (error) {
      //if any code in the try block fails, send the user a HTTP status of 400 and a message
      res.status(400).send("Something went wrong: " + error);
    }
  },
  updateFavorite: async function (req, res) {
    const updatedFavorite = req.body;
    try {
      let favorite = await Favorite.findByIdAndUpdate(req.params.id, updatedFavorite, { returnOriginal: false })
      // return all the favorites that we found in JSON format
      res.json(favorite);
    } catch (error) {
      //if any code in the try block fails, send the user a HTTP status of 400 and a message
      res.status(400).send("Something went wrong: " + error);
    }
  },
  deleteFavorite: async function (req, res) {
    try {
      await Favorite.findByIdAndRemove(req.params.id);

      res.status(204).send("Successfully deleted");
    } catch (error) {
      //if any code in the try block fails, send the user a HTTP status of 400 and a message
      res.status(400).send("Something went wrong: " + error);
    }
  },
};

module.exports = favoritesController;
