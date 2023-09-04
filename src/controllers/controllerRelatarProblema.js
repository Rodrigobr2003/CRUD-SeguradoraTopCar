exports.paginaRelatarProblema = (req, res) => {
  res.render("relatar-problema", {
    pagina: "Relatar Problema",
    css: "relatar-problema",
  });
};
