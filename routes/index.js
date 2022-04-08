const express = require('express');
const chauffeurRouter = require('./chauffeur');
const secretaireRouter = require('./secretaire');
const {pageAccueil, addSolde} = require("../controllers/dash");
const router = express.Router();

/* GET home page. */
router.get('/', pageAccueil);

router.post('/postTransfert', addSolde);

router.use('/secretaire', secretaireRouter);
router.use('/chauffeur', chauffeurRouter);

module.exports = router;
