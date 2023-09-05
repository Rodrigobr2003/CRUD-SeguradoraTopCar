const HomeModel = require("../models/HomeModel");

HomeModel.create({
  nome: "Rod",
  sobrenome: "Teste",
  idade: "17/04/2003",
  email: "rod@email.com",
  telefone: 11999999,
  senha: 1234,
})
  .then((dados) => {
    console.log(dados);
  })
  .catch((err) => {
    console.log(err);
  });
