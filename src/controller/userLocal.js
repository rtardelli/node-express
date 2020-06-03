const localStorage = require("../database/localStorage");

class UserController {
  constructor(){}

  clear = async (req, res) => {
    localStorage.clearUsers();
    await res.status(200);
  }

  getAll = async (req, res) => {
    await res.send('NOT IMPLEMENTED: Get all users');
  }

  add = async (req, res) => {
    await res.send('NOT IMPLEMENTED: Addind user');
  }

  get = async (req, res) => {
    await res.send('NOT IMPLEMENTED: Get user ' + req.params.id);
  }

  update = async (req, res) => {
    await res.send('NOT IMPLEMENTED: Update user ' + req.params.id);
  }

  delete = async (req, res) => {
    await res.send('NOT IMPLEMENTED: Delete user ' + req.params.id);
  }
};

module.exports = new UserController();