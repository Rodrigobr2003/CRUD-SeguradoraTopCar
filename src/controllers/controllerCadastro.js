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
      req.session.id = cadastro._id;
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
      return res.render("home", {
        pagina: "Home",
        css: "home",
      });
    });
  } catch (err) {
    console.log(err);
    return res.render("error");
  }
};

exports.editIndex = async (req, res) => {
  try {
    if (!req.session.cadastro._id) return res.render("error");

    const cadastro = await CadastroModel.buscarPorId(req.session.cadastro._id);

    if (!cadastro) return res.render("error");

    res.render("profile", {
      pagina: "profile",
      css: "profile",
      cadastro,
    });
  } catch (err) {
    console.log(err);
    res.render("error");
  }
};

exports.edit = async (req, res) => {
  try {
    if (!req.session.cadastro._id) return res.render("error");

    const novoProfile = new CadastroModel(req.body);
    await novoProfile.editar(req.session.cadastro._id);

    if (novoProfile.errors.length > 0) {
      req.flash("errors", novoProfile.errors);
      req.session.save(() =>
        res.redirect(`/profile/${novoProfile.cadastro._id}`)
      );
      return;
    }

    req.flash("success", "Perfil editado com sucesso");
    await req.session.save(() =>
      res.redirect(`/profile/${novoProfile.cadastro._id}`)
    );
    return;
  } catch (err) {
    console.log(err);
    res.render("error");
  }
};

exports.delet = async (req, res) => {
  try {
    if (!req.session.cadastro._id) return res.render("error");

    const cadastroInstance = new CadastroModel(req.body); // Crie uma instância de Cadastro
    const cadastro = await cadastroInstance.delet(req.session.cadastro._id); // Chame o método delet na instância

    if (!cadastro) return res.render("error");

    req.flash("success", "Contato apagado com sucesso!");
    req.session.save(() => {
      res.redirect("/");
    });
    return;
  } catch (err) {
    console.log(err);
    res.render("error");
  }
};
