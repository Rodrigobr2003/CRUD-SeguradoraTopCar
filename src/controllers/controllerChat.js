exports.paginaChat = (req, res) => {
  res.render("chat-online", {
    pagina: "Chat Online",
    css: "chat-online",
  });
};
