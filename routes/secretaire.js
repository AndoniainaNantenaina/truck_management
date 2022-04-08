const express = require('express');
const {pageSecretaire, postBC, postGasoil} = require("../controllers/secretaire");
const secretaireRouter = express.Router();

secretaireRouter.get('/', pageSecretaire);

secretaireRouter.post('/bc', postBC);
secretaireRouter.post('/gasoil', postGasoil);

module.exports = secretaireRouter;
