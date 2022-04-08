const express = require('express');
const {pageChauffeur} = require("../controllers/chauffeur");
const chauffeurRouter = express.Router();

/* GET users listing. */
chauffeurRouter.get('/', pageChauffeur);

module.exports = chauffeurRouter;
