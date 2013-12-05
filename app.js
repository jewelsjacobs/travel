
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
  , api = require('./routes/api')
  , open = require("open");

var app = express();

// all environments
app.set('port', process.env.PORT || 8888);
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);

if ('production' !== process.env.status) {
  // development only
  app.set('views', __dirname + '/app');
  app.use(express.static(path.join(__dirname, 'app')));
  app.use(function(req, res) {
    res.render('index.html', { title: 'Travel' });
  });
  app.use(express.errorHandler());
} else {
  // production
  app.set('views', __dirname + '/dist');
  app.use(express.static(path.join(__dirname, 'dist')));
  app.use(function(req, res) {
    res.render('index.html', { title: 'Travel' });
  });
}

/**
 * Expedia API
 */
app.get('/api/geosearch', api.geoSearch);
app.get('/api/payments', api.acceptedPayments);
app.get('/api/hotel/avail', api.hotelAvailability);
app.get('/api/hotel/info', api.hotelInfo);
app.get('/api/hotel/list', api.hotelList);
app.get('/api/hotel/images', api.hotelRoomImages);
app.get('/api/ping', api.ping);
app.get('/api/res/book', api.reservationBook);
app.get('/api/res/cancel', api.reservationCancel);
app.get('/api/res/get', api.reservationGet);

app.get('/', routes.index);

module.exports = app;

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
  if ('production' !== process.env.status) {
    open("http://localhost:" + app.get('port'));
  }
});
