const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');  // Ensure this path is correct

const Movie = sequelize.define('Movie', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  releaseDate: {
    type: DataTypes.DATE,
    allowNull: false
  }
});

module.exports = Movie;
