const express = require('express');
const router = express.Router();

//middleware used to require authentication
const { validateJwtMiddleware } = require("../auth");

const favoritesController = require("../controllers/favorites.contoller");

router.post("/saveFavorite", favoritesController.saveFavorite)
router.get("/getFavorites", favoritesController.getFavorites)

module.exports = router;
