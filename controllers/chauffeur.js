const axios = require("axios");

const pageChauffeur = async (req, res) => {
    let data = {
        cartes: [],
        chauffeurs: []
    };

    let chauffeurs = await axios({
        method: "get",
        url: process.env._HOST + "/chauffeur_DataService/chauffeur",
        dataType: "json"
    });
    data.chauffeurs = chauffeurs.data.chauffeurs.chauffeur;
    data.chauffeurs.forEach(c => {
        data.cartes.push(c.carte);
    });

    res.render(
        'chauffeur/chauffeur.ejs',
        {
            mtitle: 'Truck management',
            title: 'Chauffeur',
            data
        });
}

const postTicket = async (req, res) => {
    let data = {
        numero_carte: parseInt(req.body.numCarte),
        numero_ticket: req.body.numTicket,
        montant: parseFloat(req.body.montant),
        litrage: parseFloat(req.body.litrage),
    };

    const id_chauffeur = Math.floor(Math.random() * 3);

    await axios({
        method: 'post',
        url: process.env._HOST + "/ticket_DataService/ticket",
        data: {
            body: {
                numero_carte: data.numero_carte,
                numero_ticket: data.numero_ticket,
                montant: data.montant,
                litrage: data.litrage,
                id_chauffeur: id_chauffeur
            }
        }
    });

    return res.redirect('/chauffeur');
}

module.exports = {
    pageChauffeur,
    postTicket
}