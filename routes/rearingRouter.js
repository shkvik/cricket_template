const express = require("express");
const rearingController = require("../controllers/rearingController.js");
const rearingRouter = express.Router();

rearingRouter.use("/", rearingController.index);

module.exports = rearingRouter;