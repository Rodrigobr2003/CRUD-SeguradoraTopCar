require("dotenv").config();

const express = require("express");
const path = require("path");
const routes = require("./routes");
const mongoose = require("mongoose");

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

//Setando engine EJS
app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.use(express.static(path.resolve(__dirname, "public", "assets", "css")));
app.use(express.static(path.resolve(__dirname, "public", "assets", "images")));

app.use(routes);

app.on("DB conectado", () => {
  app.listen(3000, () => {
    console.log("Servidor está funcionando!");
    console.log("Acessar em: http://localhost:3000");
  });
});
