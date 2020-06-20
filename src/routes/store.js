const express = require('express');
const router = express.Router();

const controllerStore = require("../controller/storeController");
const controllerService = require("../controller/serviceController");

// List all stores
router.get("/", controllerStore.getAll);

// Add store
router.post("/", controllerStore.validations, controllerStore.add);

// Get store
router.get("/:id", controllerStore.get);

// Update store
router.put("/:id", controllerStore.validations, controllerStore.update);

// Delete store
router.delete("/:id", controllerStore.delete);

// Get services of a store
router.get("/:id/services", controllerService.getByStoreId);

module.exports = router;