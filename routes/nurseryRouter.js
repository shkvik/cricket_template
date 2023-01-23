const express = require("express");
const nurseryController = require("../controllers/nurseryController.js");
const nurseryRouter = express.Router();


nurseryRouter.get("/", nurseryController.index);

nurseryRouter.get("/incubationBox/:id", nurseryController.get_cart_incubation_box);

nurseryRouter.post("/addIncubationBox", nurseryController.add_incubation_box);

nurseryRouter.post("/addNeonatesTrays", nurseryController.add_neonates_trays)



module.exports = nurseryRouter;
