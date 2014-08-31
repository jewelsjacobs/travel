# module dependencies.
express = require("express")
app = express()
path = require("path")
routes = require('./routes')
api = require("./routes/api")
ejs = require('ejs')
bodyParser = require('body-parser')
cookieParser = require('cookie-parser')
session = require('cookie-session')
logger = require('morgan')
errorHandler = require('errorhandler')
methodOverride = require('method-override')

#process.env.NODE_ENV = process.env.NODE_ENV or "development"

# express config
app.set "port", process.env.PORT or 8888
app.set "view engine", "ejs"
app.engine "html", ejs.renderFile
app.use cookieParser
app.use session
app.use logger('dev')
app.use errorHandler()
app.use bodyParser.urlencoded({ extended: false })
app.use bodyParser.json()
app.use methodOverride()

switch app.get('env')
# static files production
	when "production"
  	app.set "views", "#{__dirname}/../dist/"
  	app.use express.static("#{__dirname}/../dist")

# static files development
	when "development"
		app.set "views", "#{__dirname}/../generated/"
		app.use express.static("#{__dirname}/../generated")

#Expedia API

app.use '/api', api
app.use '/', routes

app.listen app.get("port"), ->
  console.log "Express server listening on port #{app.get("port")} in #{app.get("env")} mode"

module.exports = app