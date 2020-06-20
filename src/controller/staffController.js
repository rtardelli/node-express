const diConfig = require("../config/config");
const { body, validationResult } = require('express-validator');

class StaffController {
  constructor(){
    this.repository = diConfig.repository;
  }

  clear = async (req, res) => {
    await this.repository.clearStaffs();
    res.status(200);
  }

  getAll = async (req, res) => {
    const staffList = await this.repository.getAllStaffs();
    res.status(200).json(staffList);
  }

  add = async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const staff = req.body;
    await this.repository.addStaff(staff);
    res.location("/staffs/" + staff.id);
    res.status(201).end();
  }

  get = async (req, res) => {
    const staffID = req.params.id;
    const staff = await this.repository.getStaff(staffID);
    res.status(200).json(staff);
  }

  update = async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const staff = req.body;
    await this.repository.updateStaff(staff);
    res.status(200).json(staff);
  }

  delete = async (req, res) => {
    const staffID = req.params.id;
    const deletedStaff = await this.repository.deleteStaff(staffID);
    
    if(deletedStaff) {
      res.status(204).end();
    } else {
      res.status(404).end();
    }
  };

  validations = [
    body('name').exists().withMessage('staff must have name'),
  ];
};

module.exports = new StaffController();