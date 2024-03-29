const mongoose = require("mongoose");
const validator = require("validator");
const bcrypjs = require("bcryptjs");

const CadastroSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  sobrenome: { type: String, required: true },
  idade: { type: Date, required: true },
  email: { type: String, required: true },
  telefone: { type: String, required: true },
  senha: { type: String, required: true },
});

const CadastroModel = mongoose.model("Cadastro", CadastroSchema);

class Cadastro {
  constructor(body) {
    this.body = body;
    this.errors = [];
    this.cadastro = null;
  }

  async register() {
    this.validacao();

    if (this.errors.length > 0) return;

    await this.userExists();

    if (this.errors.length > 0) return;

    const salt = bcrypjs.genSaltSync();
    this.body.senha = bcrypjs.hashSync(this.body.senha, salt);

    this.cadastro = await CadastroModel.create(this.body);
  }

  async userExists() {
    this.cadastro = await CadastroModel.findOne({ email: this.body.email });

    if (this.cadastro) this.errors.push("O usuário já foi cadastrado");
  }

  validacao() {
    this.cleanUp();

    if (!this.body.email) this.errors.push("Email é um campo obrigatório");
    if (this.body.email && !validator.isEmail(this.body.email))
      this.errors.push("Email inválido");

    if (!this.body.senha) this.errors.push("Senha é um campo obrigatório");
    if (this.body.senha.length < 3 || this.body.senha.length > 50)
      this.errors.push("Senha deve ter entre 3 e 50 caracteres");
  }

  cleanUp() {
    for (let dado in this.body) {
      if (typeof this.body[dado] !== "string") {
        this.body[dado] = "";
      }
    }

    this.body = {
      nome: this.body.nome,
      sobrenome: this.body.sobrenome,
      idade: this.body.idade,
      email: this.body.email,
      telefone: this.body.telefone,
      senha: this.body.senha,
    };
  }

  async login() {
    this.validacao();

    //verifica erros
    if (this.errors.length > 0) return;

    //procurar email no BD
    this.cadastro = await CadastroModel.findOne({ email: this.body.email });

    if (!this.cadastro) {
      this.errors.push("Usuário não existe");
      return;
    }

    //compara a senha do input com a do usuario
    if (!bcrypjs.compareSync(this.body.senha, this.cadastro.senha)) {
      this.errors.push("Senha inválida");
      return;
    }
  }

  static async buscarPorId(id) {
    if (typeof id !== "string") return;

    const cadastro = await CadastroModel.findById(id);

    return cadastro;
  }

  async editar(id) {
    if (typeof id !== "string") return;

    if (this.errors.length > 0) return;

    this.cadastro = await CadastroModel.findByIdAndUpdate(id, this.body, {
      new: true,
    });
  }

  async delet(id) {
    if (typeof id !== "string") return;

    const cadastro = await CadastroModel.findByIdAndDelete({ _id: id });

    return cadastro;
  }
}

module.exports = Cadastro;
