const { favorecidos } = require("../index");

class favorecidoController {
  save(favorecido) {
    favorecidos.insert(favorecido, (err, nd) => {
      if (err) {
        console.error("erro : " + err.message);
      }
      console.log(nd);
    });
  }
}

module.exports = {
  favorecidoController: new favorecidoController(),
};
