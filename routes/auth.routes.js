const express = require('express')
const router = express.Router()

//bringing in our controller so our routes have code to runb
const authController = require("../controllers/auth.controller")

//default get route that returns all recipes
router.post("/login", authController.login)

module.exports = router;