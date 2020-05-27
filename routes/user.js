const express = require('express');
const router = express.Router();

const controllerUser = require("../controller/user");
const controllerService = require("../controller/service");

// List all users
router.get("/", controllerUser.getAll);

// Add user
router.post("/", controllerUser.add);

// Get user
router.get("/:id", controllerUser.get);

// Update user
router.put("/:id", controllerUser.update);

// Delete user
router.delete("/:id", controllerUser.delete);

// Get services of user
router.delete("/:id/services", controllerService.getByUserId);

module.exports = router;