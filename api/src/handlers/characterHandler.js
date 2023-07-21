const { getCharacterByName, getAllCharacters } = require("../controllers/characterController");

const getAllCharacHandler = async (req, res) => {
    const { name } = req.query;
    if (name) {
        try {
            const result = await getCharacterByName(name);
            res.status(200).json(result);
        } catch (error) {
            res.status(404).json({error: "No se encontró el nombre"})
        }
    } else{
        try {
            const result = await getAllCharacters();
            res.status(200).json(result);
        } catch (error) {
            res.status(503).json({error: "El servicio no está disponible en este momento"});
        }
    }
}


const getCharachterByIDHandler = (req, res) => {
    res.send("NIY: ESTA RUTA BUSCA POR ID");
}

const postCharacterHandler = (req, res) => {
    res.send("NIY: ESTA RUTA CREA UN HEROE");
}

const updateCharacterHandler = (req, res) => {
    res.send("NIY: ESTA RUTA HACE LA ACTUALIZACION")
}

module.exports = {
    getAllCharacHandler,
    getCharachterByIDHandler,
    postCharacterHandler,
    updateCharacterHandler
};