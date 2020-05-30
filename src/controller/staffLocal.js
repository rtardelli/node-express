module.exports = class StaffController {
  getAll = (req, res) => {
    res.send('NOT IMPLEMENTED: Get all staff');
  }

  add = (req, res) => {
    res.send('NOT IMPLEMENTED: Addind staff');
  }

  get = (req, res) => {
    res.send('NOT IMPLEMENTED: Get staff ' + req.params.id);
  }

  update = (req, res) => {
    res.send('NOT IMPLEMENTED: Update staff ' + req.params.id);
  }

  delete = (req, res) => {
    res.send('NOT IMPLEMENTED: Delete staff ' + req.params.id);
  }

}