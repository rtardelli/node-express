const express = require('express');
const router = express.Router();

const controller = require("../controller/store");

// List all stores
router.get("/", controller.getAll);

// Add store
router.post("/", controller.add);

// Get store
router.get("/:id", controller.getStore);

// Update store
router.put("/:id", controller.updateStore);

// Delete store
router.delete("/:id", controller.deleteStore);

module.exports = router;