# Travel

Expedia API travel site

## Uses:

Angular JS + [Lineman](http://www.linemanjs.com).

1. Template Precompilation into Angulars $templateCache using `grunt-angular-templates`
2. A basic login, logout service bound to sample routes inside `config/server.js`
3. Configured [grunt-ngmin](https://github.com/btford/grunt-ngmin) so you don't have to fully qualify angular dependencies.
4. Auto generated [sourcemaps](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/) with inlined sources via [grunt-concat-sourcemap](https://github.com/kozy4324/grunt-concat-sourcemap) (you'll need to [enable sourcemaps](http://cl.ly/image/1d0X2z2u1E3b) in Firefox/Chrome to see this)
5. [Unit Tests](https://github.com/linemanjs/lineman-angular-template/tree/master/spec) and [End-to-End Tests](https://github.com/linemanjs/lineman-angular-template/tree/master/spec-e2e)
6. Configuration to run [Protractor](https://github.com/juliemr/protractor) for End-to-End Tests
7. [Restangular](https://github.com/mgonto/restangular) AngularJS module as opposed to $http or $resource
8. Express / node.js Expedia API consumed via Lineman's server proxy
9. [Livereload plugin](https://github.com/linemanjs/lineman-livereload)
10. [Bower plugin](https://github.com/linemanjs/lineman-bower)
11. CoffeeScript
12. Bootstrap
13. Angular UI Router
14. CoffeLint

## Instructions
1. `$ git clone -b lineman https://git@bitbucket.org:jjacobs2000/travel.git`
2. `$ cd travel`
3. `$ sudo npm install -g lineman`
4. `$ sudo npm install -g bower`
5. `$ npm install`
6. `$ bower install`

## Running in development mode
1. `$ export NODE_ENV=development`
2. `$ node server/server.js`
3. `$ lineman run`
4. Your browser will open to localhost:8000

## Running in production mode
1. `$ export NODE_ENV=production | export PORT=80`
2. `$ lineman build`
3. Deploy `server` and `dist` folders to external server.
4. `$ cd server`
5. `$ npm install --production`
6. Run server/server.js script with [forever](http://labs.telasocial.com/nodejs-forever-daemon/)

## Running Tests

#_NOTE_: Tests are not configured yet for current files.  On my TODO list, along with running on Travis CI.

Testing procedures based on [@davemo](http://www.github.com/davemo)'s [Testing Strategies for Angular JS](http://www.youtube.com/watch?v=UYVcY9EJcRs) screencast, and contains all the tests we wrote in the screencast and a few more!

To run the unit tests:

1. `lineman run` from 1 terminal window
2. `lineman spec` from another terminal window, this will launch Testem and execute specs in Chrome

To run the end-to-end tests:

1. `npm install protractor`
2. `brew install selenium-server-standalone`
3. Make sure you have chrome installed.
4. `lineman run` from 1 terminal window
5. `lineman grunt spec-e2e` from another terminal window

  Troubleshooting:

    If you see this error: Warning: there's no selenium server jar at the specified location,
    you may need to change the selenium-server-standalone jar version in config/spec-e2e.js
    to the actual you see in /usr/local/opt/selenium-server-standalone (brew users may have a libexec directory).

    If you see this error: Fatal error: The path to the driver executable must be set by the
    webdriver.chrome.driver system property, you may need to download the chromedriver
    (https://code.google.com/p/selenium/wiki/ChromeDriver) and place it in /usr/local/bin (mac).