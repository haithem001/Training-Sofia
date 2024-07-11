const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');  // Ensure the path is correct

const Department = sequelize.define('Department', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

module.exports = Department;
