const localStorage = require("../database/localStorage");

class StaffController {
  constructor(){}

  clear = async (req, res) => {
    localStorage.clearStaffs();
    res.status(200);
  }

  getAll = async (req, res) => {
    const staffList = localStorage.getAllStaffs();
    res.status(200).json(staffList);
  }

  add = async (req, res) => {
    const staff = req.body;
    // TODO: Validate staff
    localStorage.addStaff(staff);
    res.location("/staffs/" + staff.id);
    res.status(201).end();
  }

  get = async (req, res) => {
    const staffID = req.params.id;
    const staff = localStorage.getStaff(staffID);
    res.status(200).json(staff);
  }

  update = async (req, res) => {
    const staff = req.body;
    // TODO: Validate staff
    localStorage.updateStaff(staff);
    res.status(200).json(staff);
  }

  delete = async (req, res) => {
    const staffID = req.params.id;
    const deletedStaff = localStorage.deleteStaff(staffID);
    
    if(deletedStaff) {
      res.status(204);
    } else {
      res.status(404);
    }
    res.end();
  }

};

module.exports = new StaffController();