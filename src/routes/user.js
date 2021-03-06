const express = require('express');
const router = express.Router();

const controllerUser = require("../controller/userController");
const controllerService = require("../controller/serviceController");
const userController = require('../controller/userController');

// List all users
router.get("/", controllerUser.getAll);

// Add user
router.post("/", userController.validations, controllerUser.add);

// Get user
router.get("/:id", controllerUser.get);

// Update user
router.put("/:id", userController.validations, controllerUser.update);

// Delete user
router.delete("/:id", controllerUser.delete);

// Get services of user
router.get("/:id/services", controllerService.getByUserId);

module.exports = router;