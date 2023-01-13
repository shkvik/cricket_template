const express = require("express");
const nurseryController = require("../controllers/nurseryController.js");
const nurseryRouter = express.Router();

nurseryRouter.use("/", nurseryController.index);

module.exports = nurseryRouter;