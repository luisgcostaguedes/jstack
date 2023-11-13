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

  {
    endpoint: "/users",
    method: "POST",
    hendler: UserController.createUser,
  },

  {
    endpoint: "/users/:id",
    method: "PUT",
    hendler: UserController.updateUser,
  },

  {
    endpoint: "/users/:id",
    method: "DELETE",
    hendler: UserController.deleteUser,
  },
];
