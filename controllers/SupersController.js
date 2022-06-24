const { Super} = require('../models/index');
// const {Op} = require("sequelize");
const {
    default: axios
} = require('axios');

const SupersControllers = {};

SupersControllers.llamar = async (req,res) => {

    //https://gateway.marvel.com:443/v1/public/characters?apikey=477572bbc4000049e3379ce86acc7407

    // pblic key 477572bbc4000049e3379ce86acc7407

    // private key 6ce65b27416fc388ca7773198ad6aafbab9bb87a

    // ts: 1

    // 16ce65b27416fc388ca7773198ad6aafbab9bb87a477572bbc4000049e3379ce86acc7407

    //hash : 2122799baa4ed02346ae71808f7c6260

    try {

        let resultado = await axios.get("https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=477572bbc4000049e3379ce86acc7407&hash=2122799baa4ed02346ae71808f7c6260")
        
        if(resultado.data){

            let numbOfResultsPerPageTMDB = resultado.data.data.results.length
            for(let i=0; i<numbOfResultsPerPageTMDB ; i++){
                Super.create({
                    //A la izquierda mis campos de mi BBDD
                    //A la derecha los campos que devuelve TMDB
                    nombre: resultado.data.data.results[i].name,
                    descripcion: resultado.data.data.results[i].description,
                    imagen: resultado.data.data.results[i].thumbnail?.path,
                    extension: resultado.data.data.results[i].thumbnail?.extension
                })
            }
        }else {
            res.send("hubo un error al traer los supers")
        }
        
    } catch (error) {
        console.log(error)
    }

}



module.exports = SupersControllers;