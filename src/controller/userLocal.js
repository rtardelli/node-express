const localStorage = require("../database/localStorage");

class UserController {
  constructor(){}

  clear = async (req, res) => {
    localStorage.clearUsers();
    await res.status(200);
  }

  getAll = async (req, res) => {
    const userList = localStorage.getAllUsers();
    await res.status(200).json(userList);
  }

  add = async (req, res) => {
    const user = req.body;
    // TODO: Validate user
    localStorage.addUser(user);
    res.location("/users/" + user.id);
    res.status(201).end();
  }

  get = async (req, res) => {
    const userID = req.params.id;
    const user = localStorage.getUser(userID);
    await res.status(200).json(user);
  }

  update = async (req, res) => {
    await res.send('NOT IMPLEMENTED: Update user ' + req.params.id);
  }

  delete = async (req, res) => {
    await res.send('NOT IMPLEMENTED: Delete user ' + req.params.id);
  }
};

module.exports = new UserController();