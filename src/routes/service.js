const express = require('express');
const router = express.Router();

const controllerService = require("../controller/serviceController");

// List all staff
router.get("/", controllerService.getAll);

// Add staff
router.post("/", controllerService.validations, controllerService.add);

// Get staff
router.get("/:id", controllerService.get);

// Update staff
router.put("/:id", controllerService.validations, controllerService.update);

// Delete staff
router.delete("/:id", controllerService.delete);

module.exports = router;