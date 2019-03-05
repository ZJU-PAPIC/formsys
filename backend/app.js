// var createError = require('http-errors');
var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
var bodyParser = require('body-parser');
var querystring = require("querystring");
var mysql = require('mysql');

var conn = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : 'root',
  database : 'formsys'
});

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();

app.use(bodyParser.urlencoded({extended:true}));
// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

app.post('/',function(req,res){
  console.log(req.body);
  req.on("data",function(data){//listening data
    console.log(decodeURIComponent(data));//decode
    var param = querystring.parse(decodeURIComponent(data));//to object
    var data = JSON.parse(data);//parse
    console.log(data);
    var datastr = JSON.stringify(data);
    // conn.connect;
    console.log(datastr);
    conn.query("insert into formlist(formstr) values (?)",datastr);
  });
});

app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});//allow ChangeOrigin

module.exports = app;
