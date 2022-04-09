const axios = require("axios");

const pageSecretaire = async (req, res) => {
    let data = {
        cartes: [],
        camions: [],
        chauffeurs: [],
        bc: []
    };
    console.log(process.env._HOST);
    try {
        let chauffeurs = await axios({
            method: "get",
            url: process.env._HOST + "/chauffeur_DataService/chauffeur",
            dataType: "json"
        });
        data.chauffeurs = chauffeurs.data.chauffeurs.chauffeur;
        data.chauffeurs.forEach(c => {
            data.cartes.push(c.carte);
        });

        data.chauffeurs.forEach(c => {
            data.camions.push(c.camion);
        });

        console.log(data)

    } catch (e) {
        console.log(e)
    }

    res.render(
        'secretaire/secretaire.ejs',
        {
            mtitle: 'Truck management',
            title: 'Secretaire',
            data
        }
    );
}

const postBC = async (req, res) => {
    let data = {
        date: req.body.date,
        numero_facture: req.body.numero_facture,
        litrage: parseFloat(req.body.litrage),
        type_carburant: req.body.type_carburant,
        facture: {
            id: 0
        }
    };

    const somme = data.litrage * data.type_carburant;

    await axios({
        method: 'post',
        url: process.env._HOST + "/facture_DataService/facture",
        data: {
            body: {
                numero_facture: data.numero_facture,
                somme: somme
            }
        }
    });

    try {
        const factures = await axios({
            method: 'get',
            url: process.env._HOST + "/facture_DataService/facture",
            dataType: "json"
        });

        const factureCollection = factures.data.factureCollection.facture;
        data.facture.id = factureCollection[factureCollection.length - 1].id;

    } catch (e) {
        console.log(e)
    }
    
    await axios({
        method: 'post',
        url: process.env._HOST + "/bon_de_commande_DataService/bc",
        data: {
            body: {
                date: data.date,
                litrage: data.litrage,
                type_carburant: data.type_carburant,
                statut: false,
                id_facture: data.facture.id
            }
        }
    });

    return res.redirect('/secretaire');
}

const postGasoil = async (req, res) => {
    console.log(req.body);
    //todo traitement
    return res.redirect('/secretaire');
}

module.exports = {
    pageSecretaire,
    postBC,
    postGasoil
}