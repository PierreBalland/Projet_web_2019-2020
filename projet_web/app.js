var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


//création de l'instance mongoose et url
var mongoose = require('mongoose');
mongoose.Promise=global.Promise;
const dbName= "DashboardProject";
const dbURL= `mongodb://localhost:27017/${dbName}`;

//connection à la bdd
mongoose.connect(dbURL, {useNewUrlParser: true});


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//Nos 3 routes
var capteursRouter = require('./routes/capteurs');
var mesuresRouter = require('./routes/mesures');
var utilRouter = require('./routes/utilisateurs');

/*
//import the models
import User from './models/user.model';
import Sensors from './models/sensor.model';
import Measure from './models/measure.model';

const models={User,Sensors,Measure};

app.use(async(req,res,next)=>{
  req.context={
    models,
    me: await models.Sensors.find(),
  };
  next();
});
*/
//

var db = mongoose.connection; 
db.on('error', console.error.bind(console, 'Erreur lors de la connexion')); 
db.once('open', function (){
    console.log("Connexion à la base OK");
    //console.log(db.collection("Sensor").find());
  });
    
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

//utilisation de nos 3 routes
app.use('/capteurs',capteursRouter);
app.use('/mesures',mesuresRouter);
app.use('/utilisateurs',utilRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
