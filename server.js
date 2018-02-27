var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var ObjectId = require("mongodb").ObjectId;
var db_details = require("db_details");

var path = require('path')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('client/build'));

var MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://"+db_details.username+":"+db_details.password+"@ds135818.mlab.com:35818/signups", function(err, client){
  if (err){
    return console.log(err);
  }
  db = client.db('signins');
  console.log("connected to db");

  app.listen(process.env.PORT || 3000, function(){
    console.log("Listening on port 3000");
  });
});


app.get("/", function(req, res){
  res.send(path.join(__dirname + '/client/build/index.html'));
});

app.post('/youngperson', function(req, res){
  //Retrieve data sent by the client in the post request
  var visiting = req.body.visit_switch;
  var appt = req.body.appt_switch;
  var h2s = req.body.h2s_switch;
  var date = Date.now()

  // Insert document in collection
  db.collection('signins').insert({
    personStatus: "young",
    firstVisit: visiting,
    appt: appt,
    hereToSee: h2s,
    date: date
  }, function(err, doc) {

    if(err){
      return err;
    } else {
      console.log("Saved to DB");

      setTimeout(function(){
        res.redirect('/') },2500);
      }
    });

  });

  app.post('/other', function(req, res){
    //Retrieve data sent by the client in the post request
    var visiting = req.body.visit_switch;
    var appt = req.body.appt_switch;
    var h2s = req.body.h2s_switch;
    var date = Date.now()

    // Insert document in collection
    db.collection('signins').insert({
      personStatus: "other",
      firstVisit: visiting,
      appt: appt,
      hereToSee: h2s,
      date: date
    }, function(err, doc) {

      if(err) {
        return err;
      } else {
        console.log("Saved to DB");

        setTimeout(function(){
          res.redirect('/') }, 2500);
        }
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

    app.get("/other", function(req, res){
      res.sendFile(path.join(__dirname + '/client/build/', 'other.html'));
    });
