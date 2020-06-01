const express = require('express');
const router = express.Router();

const controllerStaff = require("../controller/staffLocal");
const controllerService = require("../controller/serviceLocal");

// List all staff
router.get("/", controllerStaff.getAll);

// Add staff
router.post("/", controllerStaff.add);

// Get staff
router.get("/:id", controllerStaff.get);

// Update staff
router.put("/:id", controllerStaff.update);

// Delete staff
router.delete("/:id", controllerStaff.delete);

// Get services of a staff
router.delete("/:id/services", controllerService.getByStaffId);

module.exports = router;