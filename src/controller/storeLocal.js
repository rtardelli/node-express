const localStorage = require("../database/localStorage");

class StoreController {
  constructor(){}

  clear = async (req, res) => {
    localStorage.clearStores();
    res.status(200);
  }

  getAll = async (req, res) => {
    const storeList = localStorage.getAllStores();
    res.status(200).json(storeList);
  }

  add = async (req, res) => {
    const store = req.body;
    // TODO: Validate store
    localStorage.addStore(store);
    res.location("/stores/" + store.id);
    res.status(201).end();
  }

  get = async (req, res) => {
    const storeID = req.params.id;
    const store = localStorage.getStore(storeID);
    res.status(200).json(store);
  }

  update = async (req, res) => {
    const store = req.body;
    // TODO: Validate store
    localStorage.updateStore(store);
    res.status(200).json(store);
  }

  delete = async (req, res) => {
    const storeID = req.params.id;
    const deletedStore = localStorage.deleteStore(storeID);
    
    if(deletedStore) {
      res.status(204);
    } else {
      res.status(404);
    }
    res.end();
  }
};

module.exports = new StoreController();