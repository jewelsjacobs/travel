requiredProcessEnv = (name) ->
  throw new Error("You must set the " + name + " environment variable")  unless process.env[name]
  process.env[name]
"use strict"
path = require("path")
_ = require("lodash")

# All configurations will extend these options
# ============================================
all =
  env: process.env.NODE_ENV
  
  # Root path of server
  root: path.normalize(__dirname + "/../../..")
  
  # Server port
  port: process.env.PORT or 8888
  
  # Secret for session, you will want to change this and make it an environment variable
  secrets:
    session: "demo-secret"


# Export the config object based on the NODE_ENV
# ==============================================
module.exports = _.merge(all, require("./" + process.env.NODE_ENV) or {})
