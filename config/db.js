const Sequelize = require("sequelize");

const db = new Sequelize("crud", "postgres", "ART123**", {
  host: "localhost",
  dialect: "postgres",

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }

  // SQLite only
  // storage: "./config/crud.sqlite"
});

// db.authenticate().then(() => console.log("Conectado a la db!!!")); esto sirve solo para conectar

db.sync()
  .then(() => console.log("Conectado a la db!!!"))
  .catch(er => console.log(er.message));

module.exports = db;
