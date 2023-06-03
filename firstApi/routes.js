const UserController = require("./controllers/UserController");
module.exports = [
  {
    endpoint: "/users",
    method: "GET",
    hendler: UserController.listUsers,
  },

  {
    endpoint: "/users/:id",
    method: "GET",
    hendler: UserController.getUserById,
  },
];
