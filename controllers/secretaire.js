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
    console.log(req.body);
    //todo traitement
    return res.redirect('/secretaire')
}

const postGasoil = async (req, res) => {
    console.log(req.body);
    //todo traitement
    return res.redirect('/secretaire')
}

module.exports = {
    pageSecretaire,
    postBC,
    postGasoil
}