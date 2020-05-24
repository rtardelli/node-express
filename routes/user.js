const express = require('express');
const router = express.Router();

const controller = require("../controller/user");

// List all users
router.get("/", controller.getAll);

// Add user
router.post("/", controller.add);

// Get user
router.get("/:id", controller.getUser);

// Update user
router.put("/:id", controller.updateUser);

// Delete user
router.delete("/:id", controller.deleteUser);

// Get services of user
router.delete("/:id/services", controller.getServices);

module.exports = router;