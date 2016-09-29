// List module dependancies
var express    = require('express');
var bodyParser = require('body-parser');
var db         = require('./models');
var http       = require('http');

// Init express app
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Init ressources
var api = require('./ressources').initialize(app);

// test login authentification
db.sequelize
  .authenticate()
  .then(function(success) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

// Sync database with new models
db.sequelize.sync({force:true});

// start server
var port = process.env.PORT || 3000;
server = http.createServer(app);
server.listen(port);
