var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var candiesRouter = require('./routes/candies');
var gridbuildRouter = require('./routes/gridbuild');
var selectorRouter = require('./routes/selector');
var resourceRouter = require('./routes/resource');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

require('dotenv').config(); 
const connectionString =  process.env.MONGO_CON;
mongoose = require('mongoose'); 
mongoose.connect(connectionString,  {useNewUrlParser: true, useUnifiedTopology: true}); 

//Get the default connection 
var db = mongoose.connection; 
 
//Bind connection to error event  
db.on('error', console.error.bind(console, 'MongoDB connection error:')); 
db.once("open", function(){ 
  console.log("Connection to DB succeeded")});

  var Candy = require("./models/candy"); 

  // We can seed the collection if needed on server start 
  async function recreateDB(){ 
    // Delete everything 
    await Candy.deleteMany(); 
   
    let instance1 = new Candy({candy_name:"Skittles",  candy_flavor:'strawberry', candy_cost:12.15}); 
    instance1.save( function(err,doc) { 
        if(err) return console.error(err); 
        console.log("First object saved") 
    }); 
  
    let instance2 = new Candy({candy_name:"M&M's",  candy_flavor:'mocha', candy_cost:12.99}); 
    instance2.save( function(err,doc) { 
        if(err) return console.error(err); 
        console.log("Second object saved") 
    }); 
  
    let instance3 = new Candy({candy_name:"Starburst",  candy_flavor:'lemon', candy_cost:9.48}); 
    instance3.save( function(err,doc) { 
        if(err) return console.error(err); 
        console.log("Third object saved") 
    }); 
  } 
   
  let reseed = true; 
  if (reseed) { recreateDB();} 

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/candies', candiesRouter);
app.use('/gridbuild', gridbuildRouter);
app.use('/selector', selectorRouter);
app.use('/resource', resourceRouter);

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
