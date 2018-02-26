var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var jsonData = require("./public/cleaned-master")
var pooled = require("./public/pooled")
var envelopes = require("./public/envelopes")
var path = require('path')

var TreeMap2016 = require('./controllers/TreeMap2016')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require('./controllers/Locations'));

app.get("/", function(req, res){
  res.json(path.join(__dirname + '/index.html'));
});

app.get("/json", function(req, res){
  res.json({"Heck!": "lo");
});


app.listen(process.env.PORT || 3000, function(){
  console.log("listening on " + this.address().port );
});
