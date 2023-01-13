const express = require("express");
const settingsController = require("../controllers/settingsController.js");
const settingsRouter = express.Router();

settingsRouter.use("/", settingsController.index);
 
module.exports = settingsRouter;