const diConfig = require("../config/config");
const { body, validationResult } = require('express-validator');

class UserController {
  constructor(){
    this.repository = diConfig.repository;
  }

  clear = async (req, res) => {
    await this.repository.clearUsers();
    res.status(200);
  }

  getAll = async (req, res) => {
    const userList = await this.repository.getAllUsers();
    res.status(200).json(userList);
  }

  add = async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const user = req.body;
    await this.repository.addUser(user);
    res.location("/users/" + user.id);
    res.status(201).end();
  }

  get = async (req, res) => {
    const userID = req.params.id;
    const user = await this.repository.getUser(userID);
    res.status(200).json(user);
  }

  update = async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const user = req.body;
    await this.repository.updateUser(user);
    res.status(200).json(user);
  }

  delete = async (req, res) => {
    const userID = req.params.id;
    const deletedUser = await this.repository.deleteUser(userID);
    
    if(deletedUser) {
      res.status(204).end();
    } else {
      res.status(404).end();
    }
  }

  getServices = async (req, res) => {
    const userID = req.params.id;
    const services = await this.repository.getServicesByUserID(userID);

    res.status(200).json(services);
  };

  validations = [
    body('name').exists().withMessage('must have user name')
  ];
};

module.exports = new UserController();