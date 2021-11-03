const express = require('express');
const router = express.Router();
const { validateJwtMiddleware } = require("../auth");

const userController = require("../controllers/user.controller")

router.post("/", userController.createUser)
router.get("/", validateJwtMiddleware, userController.getUsers)
router.put("/:email", validateJwtMiddleware, userController.updateUser)

module.exports = router;
