const diConfig = require("../config/config");
const { body, validationResult } = require('express-validator');

class ServiceController {
  constructor(){
    this.repository = diConfig.repository;
  }

  clear = async (req, res) => {
    await this.repository.clearStores();
    res.status(200);
  }

  getAll = async (req, res) => {
    const serviceList = await this.repository.getAllServices();
    res.status(200).json(serviceList);
  }

  add = async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const service = req.body;
    await this.repository.addService(service);
    res.location("/services/" + service.id);
    res.status(201).end();
  }

  get = async (req, res) => {
    const serviceID = req.params.id;
    const service = await this.repository.getService(serviceID);
    res.status(200).json(service);
  }

  update = async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const service = req.body;
    await this.repository.updateService(service);
    res.status(200).json(service);
  }

  delete = async (req, res) => {
    const serviceID = req.params.id;
    const deletedService = await this.repository.deleteService(serviceID);
    
    if(deletedService) {
      res.status(204).end();
    } else {
      res.status(404).end();
    }
  }

  getByUserId = async (req, res) => {
    const userID = req.params.id;
    const serviceList = await this.repository.getServicesByUserID(userID);
    
    res.status(200).json(serviceList);
  }

  getByStoreId = async (req, res) => {
    const storeID = req.params.id;
    const serviceList = await this.repository.getServicesByStoreID(storeID);
    
    res.status(200).json(serviceList);
  }

  getByStaffId = async (req, res) => {
    const staffID = req.params.id;
    const serviceList = await this.repository.getServicesByStaffID(staffID);
    
    res.status(200).json(serviceList);
  };

  validations = [
    body('description').exists().withMessage('must have description name'),
    body('storeID').exists().withMessage('Service must be ordered in some store'),
    body('userID').exists().withMessage('Service must be ordered by some user'),
  ];
};

module.exports = new ServiceController();