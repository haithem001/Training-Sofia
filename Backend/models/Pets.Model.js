const { DataTypes } = require('sequelize');
const initializeDatabase = require('../config/database');

async function initializePetModel() {
    const sequelize = await initializeDatabase();

    const Pet = sequelize.define('Pet', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'pets',
        timestamps: false
    });
    return Pet;
}

module.exports = initializePetModel;
