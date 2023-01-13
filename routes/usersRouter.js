const express = require("express");
const usersController = require("../controllers/usersController.js");
const usersRouter = express.Router();

usersRouter.use("/", usersController.index);
 
module.exports = usersRouter;