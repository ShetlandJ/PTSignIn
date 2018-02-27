var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var ObjectId = require("mongodb").ObjectId;

var path = require('path')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('client/build'));

var MongoClient = require("mongodb").MongoClient;


MongoClient.connect("mongodb://localhost:27017/signins", function(err, client){
  if (err){
    return console.log(err);
  }
  db = client.db('signins');
  console.log("connected to db");

  db.collection('signins').insert({
    'First Visit?': "Heck no",
    'Appointment?': 'Heck yes',
    'Here to see?': 'ME'
  })

  app.listen(3000, function(){
    console.log("Listening on port 3000");
  });
});


app.get("/", function(req, res){
  res.send(path.join(__dirname + '/client/build/index.html'));
});

app.post('/json', function(req, res){
  //Retrieve data sent by the client in the post request
  var visiting = req.body.visit_switch;
  var appt = req.body.appt_switch;
  var h2s = req.body.h2s_switch;
  var date = Date.now()

  // Insert document in collection
  db.collection('signins').insert({
    firstVisit: visiting,
    appt: appt,
    hereToSee: h2s,
    date: date
  }, function(err, doc) {

    if(err) throw err;
    console.log("Saved to DB");
    res.redirect('/');
  });
});

app.get('/signins', function(req, res) {

  db.collection("signins").find().toArray(function(err, results){
    if(err){
      return console.log(err);
    }
    res.json(results);
  });
});

app.get("/youngperson", function(req, res){
  res.sendFile(path.join(__dirname + '/client/build/', 'youngperson.html'));
});

app.get("/json", function(req, res){
  res.json({"Heck!": "lo"});
});
