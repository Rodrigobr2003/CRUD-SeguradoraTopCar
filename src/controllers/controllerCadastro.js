const Cadastro = require("../models/CadastroModel");

exports.cadastro = async (req, res) => {
  try {
    const cadastro = new Cadastro(req.body);
    await cadastro.register();

    if (cadastro.errors.length > 0) {
      req.flash("errors", cadastro.errors);
      req.session.save(() => res.redirect("/index"));
      return;
    }

    req.flash("success", "Cadastro realizado com sucesso!");
    req.session.save(() => res.redirect("/home"));
    return;
  } catch (err) {
    console.log(err);
    res.render("error");
  }
};
