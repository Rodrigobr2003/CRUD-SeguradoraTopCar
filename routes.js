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
const cadastroController = require("./src/controllers/controllerCadastro");
const profileController = require("./src/controllers/controllerPerfil");

const { loginRequired } = require("./src/middlewares/middlewaresGlobais");

//Rotas Index
routes.get("/", indexController.paginaIndex);

//Rotas Home
routes.get("/home", loginRequired, homeController.paginaHome);

//Rotas Seguro
routes.get("/seguro", loginRequired, seguroController.paginaSeguro);

//Rotas Serviços
routes.get("/servicos", loginRequired, servicoController.paginaServico);

//Rotas Simular Seguro
routes.get(
  "/simular-seguro/carro",
  loginRequired,
  simularSeguroController.paginaCarro
);
routes.get(
  "/simular-seguro/segurado",
  loginRequired,
  simularSeguroController.paginaSegurado
);
routes.get(
  "/simular-seguro/utilizacao",
  loginRequired,
  simularSeguroController.paginaUtilizacao
);

//Rotas Sinistro
routes.get("/sinistro", loginRequired, sinistroController.paginaSinistro);
routes.get("/sinistro/chuva", loginRequired, sinistroController.paginaChuva);
routes.get(
  "/sinistro/colisao",
  loginRequired,
  sinistroController.paginaColisao
);
routes.get("/sinistro/fogo", loginRequired, sinistroController.paginaFogo);
routes.get("/sinistro/furto", loginRequired, sinistroController.paginaFurto);
routes.get("/sinistro/vidro", loginRequired, sinistroController.paginaVidro);

//Rotas Relatar Problema
routes.get(
  "/relatar-problema",
  loginRequired,
  relatarProblemaController.paginaRelatarProblema
);

//Rotas Solicitar Serviço
routes.get(
  "/solicitar-servico",
  loginRequired,
  solicitarServicoController.paginaSolicitar
);

//Rotas Chat Online
routes.get("/chat-online", loginRequired, chatController.paginaChat);

//Rotas Cadastro
routes.post("/cadastro", cadastroController.cadastro);

//Rotas Profile
routes.get("/profile", loginRequired, profileController.paginaPerfil);

module.exports = routes;
