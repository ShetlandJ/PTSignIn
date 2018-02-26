var express = require('express');
var router = new express.Router();
var path = require('path');

router.use('/locations', router);

router.get('/test', function(req, res) {

  res.json({"Hello": "World"});
});

module.exports = router;
