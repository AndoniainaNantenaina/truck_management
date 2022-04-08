const pageSecretaire = async (req, res) => {
    res.render(
        'secretaire/secretaire.ejs',
        {
            mtitle: 'Truck management',
            title: 'Secretaire'
        });
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