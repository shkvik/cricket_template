const express = require("express");
const dashboardController = require("../controllers/dashboardController.js");
const dashboardRouter = express.Router();

dashboardRouter.use("/", dashboardController.index);

module.exports = dashboardRouter;
