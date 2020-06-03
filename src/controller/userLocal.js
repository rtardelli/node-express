const localStorage = require("../database/localStorage");

class UserController {
  constructor(){}

  clear = async (req, res) => {
    localStorage.clearUsers();
    res.status(200);
  }

  getAll = async (req, res) => {
    const userList = localStorage.getAllUsers();
    res.status(200).json(userList);
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
    res.status(200).json(user);
  }

  update = async (req, res) => {
    const user = req.body;
    // TODO: Validate user
    localStorage.updateUser(user);
    res.status(200).json(user);
  }

  delete = async (req, res) => {
    const userID = req.params.id;
    const deletedUser = localStorage.deleteUser(userID);
    
    if(deletedUser) {
      res.status(204);
    } else {
      res.status(404);
    }
    res.end();
  }
};

module.exports = new UserController();