const { Sequelize } = require('sequelize');
require('dotenv').config();

const env = process.env.NODE_ENV || 'development';

let username, password, database, host;

switch (env) {
  case 'development':
    username = process.env.DEV_DB_USERNAME;
    password = process.env.DEV_DB_PASSWORD;
    database = process.env.DEV_DB_DATABASE;
    host = process.env.DEV_DB_HOST;
    break;
  case 'test':
    username = process.env.TEST_DB_USERNAME;
    password = process.env.TEST_DB_PASSWORD;
    database = process.env.TEST_DB_DATABASE;
    host = process.env.TEST_DB_HOST;
    break;
  case 'production':
    username = process.env.PROD_DB_USERNAME;
    password = process.env.PROD_DB_PASSWORD;
    database = process.env.PROD_DB_DATABASE;
    host = process.env.PROD_DB_HOST;
    break;
  default:
    throw new Error(`Unknown environment: ${env}`);
}

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: 'mysql'
});

module.exports = sequelize;
