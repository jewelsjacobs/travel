# Exports a function which returns an object that overrides the default &
# *   plugin file patterns (used widely through the app configuration)
# *
# * To see the default definitions for Lineman's file paths and globs, see:
# *
# *   - https://github.com/linemanjs/lineman/blob/master/config/files.coffee
# 
module.exports = (lineman) ->

  #Override file patterns here
  coffee:
    app: [
      "app/js/hotels/hotels.coffee"
      "app/js/home/home.coffee"
      "app/js/common/main.coffee"
      "app/js/app.coffee"
      "app/js/common/controllers/*.coffee"
      "app/js/common/services/*.coffee"
      "app/js/home/controllers/*.coffee"
      "app/js/hotels/controllers/*.coffee"
    ]

  js:
    vendor: [
      "vendor/bower/jquery/jquery.js"
      "vendor/bower/jquery-migrate/jquery-migrate.js"
      "vendor/bower/jquery-ui/ui/jquery-ui.js"
      "vendor/bower/angular/angular.js"
      "vendor/bower/bootstrap/dist/js/bootstrap.js"
      "vendor/bower/lodash/dist/lodash.js"
      "vendor/bower/restangular/src/restangular.js"
      "vendor/bower/angular-route/angular-route.js"
      "vendor/bower/angular-ui-utils/modules/jq/jq.js"
      "vendor/bower/angular-ui-router/release/angular-ui-router.js"
      "vendor/bower/ngstorage/ngStorage.js"
      "vendor/bower/angular-animate/angular-animate.js"
      "vendor/bower/angular-resource/angular-resource.js"
      "vendor/bower/angular-cookies/angular-cookies.js"
      "vendor/bower/angular-sanitize/angular-sanitize.js"
      "vendor/bower/spin.js/spin.js"
      "vendor/bower/angular-spinner/angular-spinner.js"
      "vendor/bower/angular-ui-bootstrap-bower/ui-bootstrap-tpls.js"
      "vendor/js/**/*.js"
    ]
  css:
    vendor: [
      "vendor/css/**/*.css"
    ]

  webfonts:
    vendor: "vendor/webfonts/**/*.*"
    root: "fonts"
