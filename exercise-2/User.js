var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));

// Handle POST requests
router.post('/', function(req, res, next) {
  console.log(req.body); // Log the POST parameters
  res.send('POST received!');
});

module.exports = router;
