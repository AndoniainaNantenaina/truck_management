var express = require('express');
const chauffeurRouter = require('./chauffeur');
const secretaireRouter = require('./secretaire');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Truck management' });
});

router.use('/secretaire', secretaireRouter);
router.use('/chauffeur', chauffeurRouter);

module.exports = router;
