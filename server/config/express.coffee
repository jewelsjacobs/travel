###
Express configuration
###
"use strict"
express = require("express")
favicon = require("serve-favicon")
morgan = require("morgan")
compression = require("compression")
bodyParser = require("body-parser")
methodOverride = require("method-override")
cookieParser = require("cookie-parser")
errorHandler = require("errorhandler")
path = require("path")
config = require("./environment")
session = require("express-session")
module.exports = (app) ->
  env = app.get("env")
  app.engine "html", require("ejs").renderFile
  app.set "view engine", "html"
  app.use compression()
  app.use bodyParser.urlencoded(extended: false)
  app.use bodyParser.json()
  app.use methodOverride()
  app.use cookieParser()
  app.use session
    secret: 'keyboard cat'
    resave: true
    saveUninitialized: true
    cookie:
      secure: true
      maxAge: 60000

  if "production" is env
    app.set "views", config.root + "dist/"
    app.use favicon(path.join(config.root, "dist", "favicon.ico"))
    app.use express.static(path.join(config.root, "dist"))
    app.set "appPath", config.root + "/dist"
    app.use morgan("dev")
  if "development" is env or "test" is env
    app.set "views", config.root + "generated/"
    app.use favicon(path.join(config.root, "generated", "favicon.ico"))
    app.use express.static(path.join(config.root, "generated"))
    app.set "appPath", config.root + "/generated"
    app.use morgan("dev")
    app.use errorHandler() # Error handler - has to be last
  return
