const express = require("express");
const colonyCartController = require("../controllers/colonyCartController.js");
const colonyCartRouter = express.Router();


colonyCartRouter.get("/:id", colonyCartController.getCart);


module.exports = colonyCartRouter;