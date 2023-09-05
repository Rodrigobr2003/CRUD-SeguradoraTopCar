const mongoose = require("mongoose");

const HomeSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  sobrenome: { type: String, required: true },
  idade: { type: String, required: true },
  email: { type: String, required: true },
  telefone: { type: Number, required: true },
  senha: { type: String, required: true },
});

const HomeModel = new mongoose.model("Home", HomeSchema);

module.exports = HomeModel;
