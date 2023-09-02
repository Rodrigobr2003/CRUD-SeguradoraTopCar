exports.paginaCarro = (req, res) => {
  res.render("simular-seguro", {
    pagina: "Simular Seguro",
    css: "simular-seguro",
  });
};

exports.paginaSegurado = (req, res) => {
  res.render("simular-seguro-segurado", {
    pagina: "Simular Seguro",
    css: "simular-seguro-segurado",
  });
};

exports.paginaUtilizacao = (req, res) => {
  res.render("simular-seguro-utilizacao", {
    pagina: "Simular Seguro",
    css: "simular-seguro-utilizacao",
  });
};
