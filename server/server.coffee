# module dependencies.
express = require("express")
path = require("path")
api = require("./routes/api")
app = express()

process.env.NODE_ENV = process.env.NODE_ENV or "development"

ejs = require('ejs')
ejs.open = '{{'
ejs.close = '}}'

# express config
app.set "port", process.env.PORT or 8888
app.set "view engine", "ejs"
app.engine "html", ejs.renderFile
app.use express.logger("dev")
app.use express.urlencoded()
app.use express.json()
app.use express.methodOverride()
app.use app.router

# static files production
app.configure "production", ->
  app.set "views", "#{__dirname}/../dist/"
  app.use express.static("#{__dirname}/../dist")
  app.use (req, res) ->
    res.render "index.html",
      env: "production"

# static files development
app.configure "development", ->
  app.set "views", "#{__dirname}/../generated/"
  app.use express.static("#{__dirname}/../generated")
  app.use (req, res) ->
    res.render "index.html",
      env: "development"

#Expedia API

app.get "/api/geosearch", api.geoSearch
app.get "/api/payments", api.acceptedPayments
app.get "/api/hotel/avail", api.hotelAvailability
app.get "/api/hotel/info", api.hotelInfo
app.get "/api/hotel/list", api.hotelList
app.get "/api/hotel/images", api.hotelRoomImages
app.get "/api/ping", api.ping
app.get "/api/res/book", api.reservationBook
app.get "/api/res/cancel", api.reservationCancel
app.get "/api/res/get", api.reservationGet

module.exports = app

app.listen app.get("port"), ->
  console.log "Express server listening on port #{app.get("port")} in #{app.get("env")} mode"
