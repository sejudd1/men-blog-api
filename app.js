var express = require( 'express' );
var app     = express();
var mongoose = require( 'mongoose' );
var bodyParser = require( 'body-parser' );
var apiRouter = require( './app/config/routes' );
var DB = 'mongodb://localhose:27017/men-blog'; //connects local db on port 27017
var port = 3000

//body-parser config
app.use(bodyParser.urlencoded( { extended: true } ));
app.use(bodyParser.json());

mongoose.connect( DB );

//routes config //namespace for api
app.use( '/api', apiRouter );

//server
app.listen(port);
console.log('magic is happening on this port ' + port);


