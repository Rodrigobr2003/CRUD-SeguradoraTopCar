const express = require("express");
const routes = express.Router();
const indexController = require("./src/controllers/indexController");

routes.get("/", indexController.paginaIndex);

module.exports = routes;
