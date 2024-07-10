const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');  // Assurez-vous que ce chemin est correct

const Animal = sequelize.define('Animals', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.STRING,
    allowNull: false
  },
  gender: {
    type: DataTypes.STRING,
    allowNull:false,
    unique: true
  },
  height: {
    type: DataTypes.INTEGER,
    allowNull:false,
  },
  weight: {
    type: DataTypes.INTEGER,
    allowNull:false,
  }

});

module.exports = Animal;