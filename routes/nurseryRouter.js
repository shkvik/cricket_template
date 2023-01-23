const express = require("express");
const nurseryController = require("../controllers/nurseryController.js");
const nurseryRouter = express.Router();


nurseryRouter.get("/", nurseryController.index);

nurseryRouter.post("/addIncubationBox", nurseryController.addIncubationBox);

nurseryRouter.post("/addNeonatesTrays", nurseryController.addNeonatesTrays)

module.exports = nurseryRouter;
