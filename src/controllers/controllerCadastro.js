const CadastroModel = require("../models/CadastroModel");

exports.cadastro = async function (req, res) {
  try {
    const cadastro = new CadastroModel(req.body);
    await cadastro.register();

    if (cadastro.errors.length > 0) {
      req.flash("errors", cadastro.errors);
      req.session.save(() => {
        res.redirect("/");
      });
      return;
    }

    req.flash("success", "Cadastro realizado com sucesso!");
    req.session.save(() => {
      return res.redirect("/");
    });
    return;
  } catch (err) {
    console.log(err);
    return res.render("error");
  }
};

exports.login = async function (req, res) {
  try {
    const login = new CadastroModel(req.body);
    await login.login();

    if (login.errors.length > 0) {
      req.flash("errors", login.errors);
      req.session.save(() => {
        return res.redirect("/");
      });
      return;
    }

    req.flash("success", "Logado com sucesso!");
    req.session.cadastro = login.cadastro;
    req.session.save(() => {
      return res.render("/home");
    });
  } catch (err) {
    console.log(err);
    return res.render("error");
  }
};
