const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize("test", "root","Yasmine*2003", {
  host: "localhost",
  dialect: 'mysql'
});

module.exports = sequelize;