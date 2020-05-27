const express = require('express');
const router = express.Router();

const controllerUser = require("../controller/user");
const controllerService = require("../controller/service");

// List all users
router.get("/", controllerUser.getAll);

// Add user
router.post("/", controllerUser.add);

// Get user
router.get("/:id", controllerUser.getUser);

// Update user
router.put("/:id", controllerUser.updateUser);

// Delete user
router.delete("/:id", controllerUser.deleteUser);

// Get services of user
router.delete("/:id/services", controllerService.getServicesByUserId);

module.exports = router;