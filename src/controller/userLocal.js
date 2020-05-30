module.exports = class UserController {
  constructor(){}

  clear = (req, res) => {
    res.send('NOT IMPLEMENTED: Clear users');
  }

  getAll = (req, res) => {
    res.send('NOT IMPLEMENTED: Get all users');
  }

  add = (req, res) => {
    res.send('NOT IMPLEMENTED: Addind user');
  }

  get = (req, res) => {
    res.send('NOT IMPLEMENTED: Get user ' + req.params.id);
  }

  update = (req, res) => {
    res.send('NOT IMPLEMENTED: Update user ' + req.params.id);
  }

  delete = (req, res) => {
    res.send('NOT IMPLEMENTED: Delete user ' + req.params.id);
  }
};