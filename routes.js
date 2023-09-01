const express = require("express");
const routes = express.Router();
const indexController = require("./src/controllers/indexController");
const seguroController = require("./src/controllers/controllerSeguro");
const servicoController = require("./src/controllers/controllerServico");
const simularSeguroController = require("./src/controllers/controllerSimularSeguro");

//Rotas Index
routes.get("/", indexController.paginaIndex);

//Rotas Seguro
routes.get("/seguro", seguroController.paginaSeguro);

//Rotas Serviços
routes.get("/servicos", servicoController.paginaServico);

//Rotas Simular Seguro
routes.get("/simular-seguro", simularSeguroController.paginaSimularSeguro);

module.exports = routes;
