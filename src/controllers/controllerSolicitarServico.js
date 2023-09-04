exports.paginaSolicitar = (req, res) => {
  res.render("solicitar-servico", {
    pagina: "Solicitar Serviço",
    css: "solicitar-servico",
  });
};
