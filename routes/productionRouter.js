const express = require("express");
const productionController = require("../controllers/productionController.js");
const productionRouter = express.Router();

productionRouter.use("/", productionController.index);

module.exports = productionRouter;