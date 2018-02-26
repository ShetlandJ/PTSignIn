var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var path = require('path')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('client/build'));

// app.use(require('./controllers/class'));

app.get("/", function(req, res){
  res.json(path.join(__dirname + '/client/build/index.html'));
});

app.get("/json", function(req, res){
  res.json({"Heck!": "lo"});
});


app.listen(process.env.PORT || 3000, function(){
  console.log("listening on " + this.address().port );
});
