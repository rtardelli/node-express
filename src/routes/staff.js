const express = require('express');
const router = express.Router();

const controllerStaff = require("../controller/staffController");
const controllerService = require("../controller/serviceController");

// List all staff
router.get("/", controllerStaff.getAll);

// Add staff
router.post("/", controllerStaff.validations, controllerStaff.add);

// Get staff
router.get("/:id", controllerStaff.get);

// Update staff
router.put("/:id", controllerStaff.validations, controllerStaff.update);

// Delete staff
router.delete("/:id", controllerStaff.delete);

// Get services of a staff
router.get("/:id/services", controllerService.getByStaffId);

module.exports = router;