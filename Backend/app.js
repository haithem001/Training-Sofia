var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const { Sequelize } = require('sequelize');

// Database connection details
const dbName = 'Pets';
const dbUser = 'user';  // Use the actual username
const dbPassword = '';  // Leave empty if no password
const dbHost = 'localhost';

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: 'mysql',
  dialectOptions: {
    multipleStatements: true
  },
  logging: false
});

// Create the database if it doesn't exist
sequelize.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\`;`)
    .then(() => {
      console.log('Database created or already exists');
      return sequelize.authenticate(); // Ensure the connection is established
    })
    .then(() => {
      console.log('Database connection established');
    })
    .catch(err => {
      console.error('Error creating database: ', err);
    });

module.exports = sequelize;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var PetsRouter = require('./routes/Pets.Route');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/', PetsRouter);


sequelize.sync()
    .then(() => {
      console.log('Database synchronized');

    })
    .catch(err => {
      console.error('Error synchronizing the database:', err);
    });
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler.
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
