const diConfig = require("../config/config");

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
    const service = req.body;
    // TODO: Validate service
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
    const service = req.body;
    // TODO: Validate service
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
    res.send('NOT IMPLEMENTED: Get services by UserId: ' + req.params.id);
  }

  getByStoreId = async (req, res) => {
    res.send('NOT IMPLEMENTED: Get services by StoreId: ' + req.params.id);
  }

  getByStaffId = async (req, res) => {
    res.send('NOT IMPLEMENTED: Get services by StaffId: ' + req.params.id);
  }
};

module.exports = new ServiceController();