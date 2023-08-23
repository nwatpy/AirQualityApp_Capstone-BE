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
      let allFavorites = await Favorite.find({});
      // return all the favorites that we found in JSON format
      res.json(allFavorites)
    } catch (error) {
      //if any code in the try block fails, send the user a HTTP status of 400 and a message
      res.status(400).send("Something went wrong: " + error);
    }
  }
};

module.exports = favoritesController;
