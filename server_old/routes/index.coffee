express = require('express')
router = express.Router()
router.get '*', (req, res) ->
  res.sendfile "index.html"

module.exports = router