const CadastroModel = require("../models/CadastroModel");

exports.cadastro = async function (req, res) {
  try {
    const cadastro = new CadastroModel(req.body);
    await cadastro.register();

    if (cadastro.errors.length > 0) {
      req.flash("errors", cadastro.errors);
      req.session.save(() => {
        return res.redirect("/index");
      });
      return;
    }

    req.flash("success", "Cadastro realizado com sucesso!");
    req.session.save(() => {
      return res.redirect("/home");
    });
    return;
  } catch (err) {
    console.log(err);
    return res.render("error");
  }
};
