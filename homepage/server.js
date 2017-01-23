var express = require('express');
var http = require('http');
var subway = require('./routes/subways'); 
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var expressErrorHandler = require('express-error-handler');

var app = express(); 
   
app.configure(function () { 
    app.use(express.logger('dev'));  
    app.use(express.bodyParser()); 
}); 
app.listen(3000);
subway.connectDB();
app.get('/subways', subway.findAll)



 
console.log('Listening on port 3000...'); 
