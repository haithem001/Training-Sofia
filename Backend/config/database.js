//data base ibrahim we need to make a single database configeration
// const { Sequelize } = require('sequelize');
// require('dotenv').config();

// const sequelize = new Sequelize("testuser", "root","", {
//   host: "localhost",
//   dialect: 'mysql'
// });

// module.exports = sequelize;const { Sequelize } = require('sequelize');

const dbName = 'Pets';


const sequelize = new Sequelize(dbName, '','', {
    host: 'localhost',
    dialect: 'mysql',
    dialectOptions: {
        multipleStatements: true
    },
    logging: false
});

async function initializeDatabase() {
    try {
        await sequelize.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\`;`);
        console.log('Database created or already exists');

        const newSequelize = new Sequelize(dbName,'','', {
            host: 'localhost',
            dialect: 'mysql',
            dialectOptions: {
                multipleStatements: true
            },
            logging: false
        });

        await newSequelize.authenticate();
        console.log('Database connection established');

        return newSequelize;
    } catch (err) {
        console.error('Error creating database: ', err);
        throw err;
    }
}

module.exports = initializeDatabase;
