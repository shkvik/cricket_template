const express = require("express");
const nurseryController = require("../controllers/nurseryController.js");
const nurseryRouter = express.Router();


nurseryRouter.get("/", nurseryController.index);

module.exports = nurseryRouter;
