var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mysql = require('mysql');
const fs = require('fs').promises;
const usersRouter = require('./routes/users.route');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var PetsRouter = require('./routes/Pets.Route');


var app = express();
var db = express.Router();

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

// connect db router to the main app
app.use('/api', db); // Added this line

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

/////////////////////////////////////////////////////////////////////////////////////////////////

const sourceConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test'
});


sourceConnection.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données source: ' + err.stack);
    return;
  }
  console.log('Connecté à la base de données source avec l\'id ' + sourceConnection.threadId);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});

module.exports = app;
