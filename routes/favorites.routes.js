const express = require('express');
const router = express.Router();

//middleware used to require authentication
const { validateJwtMiddleware } = require("../auth");

const favoritesController = require("../controllers/favorites.contoller");

router.post("/saveFavorite", favoritesController.saveFavorite)
router.get("/getFavorites", favoritesController.getFavorites)
router.delete("/deleteFavorite/:id", favoritesController.deleteFavorite)

module.exports = router;
