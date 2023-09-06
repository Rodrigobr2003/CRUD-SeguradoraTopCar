const express = require("express");
const routes = express.Router();

const indexController = require("./src/controllers/controllerIndex");
const homeController = require("./src/controllers/homeController");
const seguroController = require("./src/controllers/controllerSeguro");
const servicoController = require("./src/controllers/controllerServico");
const simularSeguroController = require("./src/controllers/controllerSimularSeguro");
const sinistroController = require("./src/controllers/controllerSinistro");
const relatarProblemaController = require("./src/controllers/controllerRelatarProblema");
const solicitarServicoController = require("./src/controllers/controllerSolicitarServico");
const chatController = require("./src/controllers/controllerChat");
const controllerCadastro = require("./src/controllers/controllerCadastro");

//Rotas Index
routes.get("/", indexController.paginaIndex);

//Rotas Home
routes.get("/home", homeController.paginaHome);

//Rotas Seguro
routes.get("/seguro", seguroController.paginaSeguro);

//Rotas Serviços
routes.get("/servicos", servicoController.paginaServico);

//Rotas Simular Seguro
routes.get("/simular-seguro/carro", simularSeguroController.paginaCarro);
routes.get("/simular-seguro/segurado", simularSeguroController.paginaSegurado);
routes.get(
  "/simular-seguro/utilizacao",
  simularSeguroController.paginaUtilizacao
);

//Rotas Sinistro
routes.get("/sinistro", sinistroController.paginaSinistro);
routes.get("/sinistro/chuva", sinistroController.paginaChuva);
routes.get("/sinistro/colisao", sinistroController.paginaColisao);
routes.get("/sinistro/fogo", sinistroController.paginaFogo);
routes.get("/sinistro/furto", sinistroController.paginaFurto);
routes.get("/sinistro/vidro", sinistroController.paginaVidro);

//Rotas Relatar Problema
routes.get(
  "/relatar-problema",
  relatarProblemaController.paginaRelatarProblema
);

//Rotas Solicitar Serviço
routes.get("/solicitar-servico", solicitarServicoController.paginaSolicitar);

//Rotas Chat Online
routes.get("/chat-online", chatController.paginaChat);

//Rotas Cadastro
routes.post("/login", homeController.paginaHome);

module.exports = routes;
