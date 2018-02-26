var express = require('express');
var router = new express.Router();
var path = require('path');

router.use('/locations', router);

router.get('/', function(req, res) {

  res.json(placeArray);
});

module.exports = router;
