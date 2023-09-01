exports.paginaServico = (req, res) => {
  res.render("servico", {
    pagina: "Serviço",
    css: "servico",
  });
};
