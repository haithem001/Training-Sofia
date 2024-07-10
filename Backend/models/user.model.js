const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const User = sequelize.define('User',{ 
    name : {
        type: DataTypes.STRING,
        allowNull: false
    },
    email : {
        type: DataTypes.STRING,
        allowNull: false,
        unique : false
    },
    role : {
        type: DataTypes.STRING,
        allowNull: false

    },
    phoneNumber : {
        type: DataTypes.STRING,
        allowNull: false
        },
    DateDeNaiss : {
        type: DataTypes.DATE,
        allowNull: false
        },
    departement : {
        type: DataTypes.STRING,
        allowNull: false
    }
});
                                            
                    
module.exports = User;