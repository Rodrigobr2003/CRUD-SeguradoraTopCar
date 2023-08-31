const express = require("express");
const path = require("path");
const routes = require("./routes");

const app = express();

//Setando engine EJS
app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.use(express.static(path.resolve(__dirname, "public", "assets", "css")));
app.use(express.static(path.resolve(__dirname, "public", "assets", "images")));

app.use(routes);

app.listen(3000, () => {
  console.log("Servidor está funcionando!");
  console.log("Acessar em: http://localhost:3000");
});
