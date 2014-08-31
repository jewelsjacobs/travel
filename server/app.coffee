###
Main application file
###
"use strict"

# Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV or "development"
express = require("express")
config = require("./config/environment")

# Setup server
app = express()
server = require("http").createServer(app)
require("./config/express") app
require("./routes") app

# Start server
server.listen config.port, config.ip, ->
  console.log "Express server listening on %d, in %s mode", config.port, app.get("env")

# Expose app
exports = module.exports = app
