###
Main application routes
###
"use strict"

errors = require('./components/errors')

module.exports = (app) ->
  
  # Insert routes below
  app.use "/api/geo", require("./api/geo")
  app.use "/api/hotels", require("./api/hotels")
  app.use "/api/ping", require("./api/ping")
  app.use "/api/reservation", require("./api/reservation")

  # All undefined asset or api routes should return a 404
  app.route('/:url(api)/*')
  .get(errors[404])

  # All other routes should redirect to the index.html
  app.route("/*").get (req, res) ->
    res.sendfile app.get("appPath") + "/index.html"
