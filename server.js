require("dotenv").config();

const express = require("express");
const path = require("path");
const routes = require("./routes");
const mongoose = require("mongoose");
// const csrf = require("csurf");
const {
  checkCsrfError,
  middlewareGlobal,
  csrfMiddleware,
} = require("./src/middlewares/middlewaresGlobais");

const app = express();

//Conectando ao mongoDB
mongoose
  .connect(process.env.CONNECTIONSTRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Base de dados conectada!");
    app.emit("DB conectado");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Setando engine EJS
app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

//Caminhos CSS e Imagens
app.use(express.static(path.resolve(__dirname, "public", "assets", "css")));
app.use(express.static(path.resolve(__dirname, "public", "assets", "images")));

//Utilitários do server
app.use(routes);

// app.use(csrf()); //usa o csrf
// app.use(checkCsrfError); //middleware para checar
// app.use(csrfMiddleware); //middleware para checar
app.use(middlewareGlobal);

app.on("DB conectado", () => {
  app.listen(3000, () => {
    console.log("Servidor está funcionando!");
    console.log("Acessar em: http://localhost:3000");
  });
});
