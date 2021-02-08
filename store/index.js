const datastore = require("nedb");
const path = require("path");

const filePaths = {
  favorecidos: path.join(__dirname, "db", "favorecido.db"),
  estabelecimento: path.join(__dirname, "db", "estabelecimento.db"),
  despesa: path.join(__dirname, "db", "despesa.db"),
};

const db = {};

db.favorecidos = new datastore({
  filename: filePaths.favorecidos,
  autoload: true,
  onload: (err) => {
    if (err) console.error("erro to load db Favorecido");
    else console.log("database favorecidos started");
  },
});

db.estabelecimento = new datastore({
  filename: filePaths.estabelecimento,
  autoload: true,
  onload: (err) => {
    if (err) console.error("erro to load db estabelecimento");
    else console.log("database estabelecimento started");
  },
});

db.despesa = new datastore({
  filename: filePaths.despesa,
  autoload: true,
  onload: (err) => {
    if (err) console.error("erro to load db despesa");
    else console.log("database despesa started");
  },
});

module.exports = db;
