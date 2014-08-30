# module dependencies.
express = require("express")
path = require("path")
routes = require('./routes')
api = require("./routes/api")
app = express()
ejs = require('ejs')
bodyParser = require('body-parser')
cookieParser = require('cookie-parser')
session = require('cookie-session')
logger = require('morgan')
methodOverride = require('method-override')

process.env.NODE_ENV = process.env.NODE_ENV or "development"

# express config
app.set "port", process.env.PORT or 8888
app.set "view engine", "ejs"
app.engine "html", ejs.renderFile
app.use cookieParser
app.use session 
app.use logger(':method :url :status :response-time ms - :res[content-length]')
app.use bodyParser.urlencoded({ extended: false })
app.use bodyParser.json()
app.use methodOverride()
#app.use app.router

switch process.env.NODE_ENV 
# static files production
	when "production" 
  	app.set "views", "#{__dirname}/../dist/"
  	app.use express.static("#{__dirname}/../dist")
  	app.use (req, res) ->
    	res.render "index.html",
      env: "production"

# static files development
	when "development"
		app.set "views", "#{__dirname}/../generated/"
		app.use express.static("#{__dirname}/../generated")
		app.use (req, res) ->
  		res.render "index.html",
    		env: "development"

#Expedia API

app.get "/api/geosearch/:location", api.geoSearch
app.get "/api/payments", api.acceptedPayments
app.get "/api/hotel/avail", api.hotelAvailability
app.get "/api/hotel/info", api.hotelInfo
app.get "/api/hotel/list", api.hotelList
app.get "/api/hotel/images", api.hotelRoomImages
app.get "/api/ping", api.ping
app.get "/api/res/book", api.reservationBook
app.get "/api/res/cancel", api.reservationCancel
app.get "/api/res/get", api.reservationGet

app.get "/", routes.index

module.exports = app

app.listen app.get("port"), ->
  console.log "Express server listening on port #{app.get("port")} in #{app.get("env")} mode"
