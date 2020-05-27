const express = require('express');
const router = express.Router();

const controllerStore = require("../controller/store");
const controllerService = require("../controller/service");

// List all stores
router.get("/", controllerStore.getAll);

// Add store
router.post("/", controllerStore.add);

// Get store
router.get("/:id", controllerStore.getUser);

// Update store
router.put("/:id", controllerStore.updateUser);

// Delete store
router.delete("/:id", controllerStore.deleteUser);

// Get services of a store
router.delete("/:id/services", controllerService.getServicesByStoreId);

module.exports = router;