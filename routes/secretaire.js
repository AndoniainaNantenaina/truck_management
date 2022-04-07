var express = require('express');
var secretaireRouter = express.Router();

/* GET users listing. */
secretaireRouter.get('/', function(req, res, next) {
  res.render(
    'secretaire/secretaire.ejs', 
    {
      mtitle: 'Truck management', 
      title: 'Secretaire' 
    });
});

module.exports = secretaireRouter;
