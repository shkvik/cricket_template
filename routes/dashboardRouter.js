const express = require("express");
const dashboardController = require("../controllers/dashboardController.js");
const dashboardRouter = express.Router();

dashboardRouter.get("/", dashboardController.index);

dashboardRouter.get("/get_temperature", dashboardController.get_temperature);

dashboardRouter.get("/get_humidity", dashboardController.get_humidity);

dashboardRouter.get("/get_fcr", dashboardController.get_fcr);

dashboardRouter.get("/get_scoreboard", dashboardController.get_scoreboard);

module.exports = dashboardRouter;
