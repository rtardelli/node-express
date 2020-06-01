const express = require('express');
const router = express.Router();

const controllerStore = require("../controller/storeLocal");
const controllerService = require("../controller/serviceLocal");

// List all stores
router.get("/", controllerStore.getAll);

// Add store
router.post("/", controllerStore.add);

// Get store
router.get("/:id", controllerStore.get);

// Update store
router.put("/:id", controllerStore.update);

// Delete store
router.delete("/:id", controllerStore.delete);

// Get services of a store
router.delete("/:id/services", controllerService.getByStoreId);

module.exports = router;