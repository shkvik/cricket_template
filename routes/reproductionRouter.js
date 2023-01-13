const express = require("express");
const reproductionController = require("../controllers/reproductionController.js");
const reproductionRouter = express.Router();

reproductionRouter.use("/", reproductionController.index);

module.exports = reproductionRouter;