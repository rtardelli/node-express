const diConfig = require("../config/config");
const { body, validationResult } = require('express-validator');

class StoreController {
  constructor(){
    this.repository = diConfig.repository;
  }

  clear = async (req, res) => {
    await this.repository.clearStores();
    res.status(200);
  }

  getAll = async (req, res) => {
    const storeList = await this.repository.getAllStores();
    res.status(200).json(storeList);
  }

  add = async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const store = req.body;
    await this.repository.addStore(store);
    res.location("/stores/" + store.id);
    res.status(201).end();
  }

  get = async (req, res) => {
    const storeID = req.params.id;
    const store = await this.repository.getStore(storeID);
    res.status(200).json(store);
  }

  update = async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const store = req.body;
    await this.repository.updateStore(store);
    res.status(200).json(store);
  }

  delete = async (req, res) => {
    const storeID = req.params.id;
    const deletedStore = await this.repository.deleteStore(storeID);
    
    if(deletedStore) {
      res.status(204).end();
    } else {
      res.status(404).end();
    }
  };

  validations = [
    body('name').exists().withMessage('store must have name'),
    body('address').exists().withMessage('store must have an address')
  ];
};

module.exports = new StoreController();