// *** all sounds courtesy of http://bbcsfx.acropolis.org.uk/ & https://freesound.org
//
const express = require("express");
const app = express();
const router = express.Router();
var path = require("path");
const soundFile = require("../models/soundObj.js");

// app.use(express.static(__dirname + './views/'));

router.get('/', function(req, res) {
  // var id = req.params.id;
  // console.log('parameter id: ', id);
  res.sendFile(path.join(__dirname,'../views/home.html'));
});

router.get('/intro', function(req, res) {
  // var id = req.params.id;
  // res.send('sound ' + req.params.id);
  // res.send('you got the ' + req.params.list + ' audio list!');
  res.sendFile(path.join(__dirname,'../views/intro.html'));

});

module.exports = router;
