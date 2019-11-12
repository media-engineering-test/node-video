var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// var mysql = require('mysql');

// var dbConfig = require('./config/mysql');
//引入
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var videoInfoRouter = require('./routes/api/video/videoInfo');
var adminInfoRouter = require('./routes/api/admin/adminInfo');
var usersInfoRouter = require('./routes/api/user/usersInfo');
var delUserRouter = require('./routes/api/user/deluser');

var app = express();

// view engine setups
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//使用
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/video/videoInfo', videoInfoRouter);
app.use('/api/admin/adminInfo', adminInfoRouter);
app.use('/api/user/usersInfo', usersInfoRouter);
app.use('/api/user/deluser', delUserRouter);

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

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

// var pool = mysql.createConnection(dbConfig);

// pool.connect();
//查询
// var  sql = 'SELECT * FROM websites';
// pool.query(sql,function (err, rows) {
//   if(err){
//     console.log('[SELECT ERROR] - ',err.message);
//     return;
//   }else{
//     // result.data = rows;
//   }

//  console.log('--------------------------SELECT----------------------------');
//  console.log(rows);
//  console.log('------------------------------------------------------------\n\n');  
// });
// pool.end();

module.exports = app;
