exports.paginaSinistro = (req, res) => {
  res.render("sinistro", {
    pagina: "Sinistro",
    css: "sinistro",
  });
};

exports.paginaChuva = (req, res) => {
  res.render("sinistro-chuva", {
    pagina: "Sinistro Chuva",
    css: "sinistro-padrao",
  });
};

exports.paginaColisao = (req, res) => {
  res.render("sinistro-colisao", {
    pagina: "Sinistro Colisão",
    css: "sinistro-padrao",
  });
};

exports.paginaFogo = (req, res) => {
  res.render("sinistro-fogo", {
    pagina: "Sinistro Fogo",
    css: "sinistro-padrao",
  });
};

exports.paginaFurto = (req, res) => {
  res.render("sinistro-furto", {
    pagina: "Sinistro Furto",
    css: "sinistro-padrao",
  });
};

exports.paginaVidro = (req, res) => {
  res.render("sinistro-vidro", {
    pagina: "Sinistro Vidro",
    css: "sinistro-padrao",
  });
};
