const express = require('express');
const router = express.Router();

const controllerStaff = require("../controller/staff");
const controllerService = require("../controller/service");

// List all staff
router.get("/", controllerStaff.getStaff);

// Add staff
router.post("/", controllerStaff.add);

// Get staff
router.get("/:id", controllerStaff.getStaff);

// Update staff
router.put("/:id", controllerStaff.updateStaff);

// Delete staff
router.delete("/:id", controllerStaff.deleteStaff);

// Get services of a staff
router.delete("/:id/services", controllerService.getServicesByStaffId);

module.exports = router;