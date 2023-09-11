require("dotenv").config();

const express = require("express");
const path = require("path");
const routes = require("./routes");
const mongoose = require("mongoose");
const flash = require("connect-flash");
const session = require("express-session");
const MongoStore = require("connect-mongo");
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

const sessionOptions = session({
  secret: "akasdfj0út23453456+54qt23qv  qwf qwer qwer qewr asdasdasda a6()",
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  },
});

//JSON -> submit method POST
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Setando engine EJS
app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

//Caminhos CSS e Imagens
app.use(express.static(path.resolve(__dirname, "public", "assets", "css")));
app.use(express.static(path.resolve(__dirname, "public", "assets", "images")));

//Utilitários do server
app.use(flash());
app.use(sessionOptions);
app.use(middlewareGlobal);
app.use(routes);

// app.use(csrf()); //usa o csrf
// app.use(checkCsrfError); //middleware para checar
// app.use(csrfMiddleware); //middleware para checar

app.on("DB conectado", () => {
  app.listen(3000, () => {
    console.log("Servidor está funcionando!");
    console.log("Acessar em: http://localhost:3000");
  });
});
