class ServiceController {
  getAll = (req, res) => {
    res.send('NOT IMPLEMENTED: Get all services');
  }

  add = (req, res) => {
    res.send('NOT IMPLEMENTED: Addind service');
  }

  get = (req, res) => {
    res.send('NOT IMPLEMENTED: Get service ' + req.params.id);
  }

  update = (req, res) => {
    res.send('NOT IMPLEMENTED: Update service ' + req.params.id);
  }

  delete = (req, res) => {
    res.send('NOT IMPLEMENTED: Delete service ' + req.params.id);
  }

  getByUserId = (req, res) => {
    res.send('NOT IMPLEMENTED: Get services by UserId: ' + req.params.id);
  }

  getByStoreId = (req, res) => {
    res.send('NOT IMPLEMENTED: Get services by StoreId: ' + req.params.id);
  }

  getByStaffId = (req, res) => {
    res.send('NOT IMPLEMENTED: Get services by StaffId: ' + req.params.id);
  }

};

module.exports = new ServiceController();