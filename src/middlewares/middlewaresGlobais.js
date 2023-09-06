// exports.checkCsrfError = (err, req, res, next) => {
//   if (err && err.code === "EBADCSRFTOKEN") {
//     return res.render("error");
//   }
// };

exports.middlewareGlobal = (req, res, next) => {
  res.locals.errors = req.flash("errors");
  res.locals.success = req.flash("success");
  res.locals.cadastro = req.session.cadastro;
  next();
};
