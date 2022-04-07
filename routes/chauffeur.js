var express = require('express');
var chauffeurRouter = express.Router();

/* GET users listing. */
chauffeurRouter.get('/', function(req, res, next) {
    res.render(
        'chauffeur/chauffeur.ejs', 
        { 
            mtitle: 'Truck management', 
            title: 'Chauffeur' 
        });
});

module.exports = chauffeurRouter;
