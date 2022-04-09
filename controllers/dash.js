const axios = require("axios");

const pageAccueil = async (req, res) => {
    let data = {
        direction: {
            nom: {},
            carte: {}
        },
        filles: [],
        camions: [],
        chauffeurs: [],
        bc: [],
        factures: [],
        tickets: []
    };
    console.log(process.env._HOST);

    try {
        const directions = await axios({
            method: 'get',
            url: process.env._HOST + "/direction_DataService/direction",
            dataType: "json"
        });
        data.direction = directions.data.directions.direction[0];

        let chauffeurs = await axios({
            method: "get",
            url: process.env._HOST + "/chauffeur_DataService/chauffeur",
            dataType: "json"
        });
        data.chauffeurs = chauffeurs.data.chauffeurs.chauffeur;
        data.chauffeurs.forEach(c => {
            data.filles.push(c.carte);
        });

        data.chauffeurs.forEach(c => {
            data.camions.push(c.camion);
        });

        const bonDeCommandes = await axios({
            methid: "get",
            url: process.env._HOST + "/ServiceCustomTruck/bc",
            dataType: "json"
        })
        data.bc = bonDeCommandes.data.bcs.bc;

        const factures = await axios({
            methid: "get",
            url: process.env._HOST + "/facture_DataService/facture",
            dataType: "json"
        })
        data.factures = factures.data.factureCollection.facture;

        const tickets = await axios({
            methid: "get",
            url: process.env._HOST + "/ticket_DataService/ticket",
            dataType: "json"
        })
        data.tickets = tickets.data.ticketCollection.ticket;

        console.log(data)

    } catch (e) {
        console.log(e)
    }
    res.render('index', {title: 'Truck management', data});
}

const addSolde = async (req, res) => {
    console.log(req.body)
    const s = req.body.solde + req.body.addSolde;
    await axios({
        method: 'post',
        url: process.env._HOST + "/carte_DataService/carte/update",
        data: {
            id: req.body.id,
            solde: s
        }
    });
    return res.redirect('/');
}

module.exports = {
    pageAccueil,
    addSolde
}