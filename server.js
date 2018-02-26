var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var path = require('path')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('client/build'));
// app.use(express.static('client/build/youngperson'));


// app.use(require('./controllers/class'));

app.get("/", function(req, res){
  res.send(path.join(__dirname + '/client/build/index.html'));
});

app.post("/json", function(req, res){

  console.log(req.body);
  res.json({
    'First Time Visit': req.body.visit_switch,
    'Appointment?': req.body.appt_switch,
    'Here to see?': req.body.h2s_switch,
    'Date/Time': Date.now()
  });
});


app.get("/youngperson", function(req, res){
  res.sendFile(path.join(__dirname + '/client/build/', 'youngperson.html'));
});

app.get("/json", function(req, res){
  res.json({"Heck!": "lo"});
});


app.listen(process.env.PORT || 3000, function(){
  console.log("listening on " + this.address().port );
});
