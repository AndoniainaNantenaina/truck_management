const express = require('express');
const {pageChauffeur, postTicket} = require("../controllers/chauffeur");
const chauffeurRouter = express.Router();

/* GET users listing. */
chauffeurRouter.get('/', pageChauffeur);

chauffeurRouter.post('/postTicket', postTicket);

module.exports = chauffeurRouter;
