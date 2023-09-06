const Cadastro = require("../models/CadastroModel");

exports.cadastro = (req, res) => {
  const cadastro = new Cadastro(req.body);
};
