const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Pets', '', '', {
    host: 'localhost',
    dialect: 'mysql',
    dialectOptions: {
        multipleStatements: true
    },
    logging: false
});

// Create the database if it doesn't exist
sequelize.query('CREATE DATABASE IF NOT EXISTS Posts')
    .then(() => {
        console.log('Database created or already exists');
        return sequelize.sync();
    })
    .then(() => {
        console.log('Database synchronized');
    })
    .catch(err => {
        console.error('Error creating database: ', err);
    });

module.exports = sequelize;
