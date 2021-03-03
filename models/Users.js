const Sequelize = require("sequelize");
const db = require("../config/db");

const UserSchema = db.define("users", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: Sequelize.STRING
  },
  apellido: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  edad: {
    type: Sequelize.INTEGER
  }
});

module.exports = UserSchema;
