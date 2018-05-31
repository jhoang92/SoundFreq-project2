// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

/**************************
 Dependencies
**************************/
var path = require('path');


// Requiring our Todo model
var db = require("../app/models");


// Routes
// =============================================================
module.exports = function (app) {
  /*
  working routes
  */
  // Get route for returning all sounds 
  app.get("/api/soundFiles", function (req, res) {
     res.json(soundData);
  });

  /*********************
  needs more work
  **********************/
  // GET route for getting all of the sound types
  app.get("/api/soundTypes/", function (req, res) {
    db.SoundType.findAll({})
      .then(function (dbSoundType) {
        res.json(dbSoundType);
        console.log(dbSoundType);
      });
  });

  //GET route to retrieve sounds by category
  app.get("/api/soundTypes/:category", function (req, res) {
    db.SoundType.findOne({
      where: {
        id: req.params.category
      }
    })
      .then(function (dbSoundType) {
        res.json(dbSoundType);
      });
  });


  // Get route for retrieving a single sound
  app.get("/api/soundFiles/:name", function (req, res) {
    db.soundFiles.findOne({
      where: {
        id: req.params.name
      }
    })
      .then(function (dbSoundFiles) {
        res.json(dbSoundFiles);
      });
  });

  // POST route for saving a new post
  app.post("/", function (req, res) {
    console.log(req.body);
    db.soundFiles.create({
      name: req.body.name,
      description: req.body.description
      })
      .then(function () {
        res.json(soundData);
      });
  });

  
  // This should inject our data.js file from JSON into a MYSQL database on page load
  app.post("/", function (req, res) {
    db.soundFiles.create(req.body,
      {
        name: req.body.name,
        description: req.body.description
      })
      .then(function () {
        res.json(dbSoundFiles);
      });
  });
  
  /**************
   * dete routes not needed since users wont be deleting data from server
 *************/
// DELETE route for deleting posts
app.delete("/api/posts/:id", function (req, res) {
  db.Post.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(function (dbPost) {
      res.json(dbPost);
    });
});
};
