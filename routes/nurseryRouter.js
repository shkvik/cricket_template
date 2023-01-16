const express = require("express");
const nurseryController = require("../controllers/nurseryController.js");
const nurseryRouter = express.Router();


nurseryRouter.get("/", nurseryController.index);

nurseryRouter.post("/addColony", nurseryController.addColony);

module.exports = nurseryRouter;
