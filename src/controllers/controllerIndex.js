exports.paginaIndex = (req, res) => {
  res.render("index", {
    pagina: "Cadastro & Login",
    css: "index",
  });
};
