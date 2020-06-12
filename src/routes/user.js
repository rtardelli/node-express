const express = require('express');
const router = express.Router();

const controllerUser = require("../controller/userController");

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
router.get("/:id/services", controllerUser.getServices);

module.exports = router;