const { Sequelize } = require('sequelize');
require('dotenv').config();

const dbName = process.env.DB_NAME || 'Pets';

const sequelize = new Sequelize(dbName, 'root', '', {
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

    await sequelize.authenticate();
    console.log('Database connection established');

    return sequelize;
  } catch (err) {
    console.error('Error creating database: ', err);
    throw err;
  }
}

module.exports = initializeDatabase;