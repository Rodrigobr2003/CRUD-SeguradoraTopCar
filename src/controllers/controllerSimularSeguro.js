exports.paginaSimularSeguro = (req, res) => {
  res.render("simular-seguro", {
    pagina: "Simular Seguro",
    css: "simular-seguro",
  });
};
