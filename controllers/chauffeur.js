const pageChauffeur = async (req, res) => {
    res.render(
        'chauffeur/chauffeur.ejs',
        {
            mtitle: 'Truck management',
            title: 'Chauffeur'
        });
}


module.exports = {
    pageChauffeur
}