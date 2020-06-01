class StoreController {
  getAll = (req, res) => {
    res.send('NOT IMPLEMENTED: Get all');
  }

  add = (req, res) => {
    res.send('NOT IMPLEMENTED: Addind store');
  }

  get = (req, res) => {
    res.send('NOT IMPLEMENTED: Get store ' + req.params.id);
  }

  update = (req, res) => {
    res.send('NOT IMPLEMENTED: Update store ' + req.params.id);
  }

  delete = (req, res) => {
    res.send('NOT IMPLEMENTED: Delete store ' + req.params.id);
  }
};

module.exports = new StoreController();