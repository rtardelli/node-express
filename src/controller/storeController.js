const diConfig = require("../config/config");

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
    const store = req.body;
    // TODO: Validate store
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
    const store = req.body;
    // TODO: Validate store
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
  }
};

module.exports = new StoreController();