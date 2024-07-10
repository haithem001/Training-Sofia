const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize("databasetest", "root","", {
  host: "localhost",
  dialect: 'mysql'
});

module.exports = sequelize;