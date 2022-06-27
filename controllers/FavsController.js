const { Fav} = require('../models/index');
// const {Op} = require("sequelize");
const {default: axios} = require('axios');

const FavsControllers = {};

FavsControllers.nuevo_fav =  (req,res) => {
    let body = req.body;

    console.log("este es body",body)

    Fav.create({
        superId: body.superId,
        usuarioId: body.usuarioId,
    })
    .then(favorito => {
        if(favorito){
            res.send(favorito)
        }else{
            res.send("le has dado a favorito");
        }
    })
    .catch((error => {
        res.send(error)
    }))
}

FavsControllers.eliminar_fav =  (req,res) => {

    let id = req.params.id;

    try {

        Fav.destroy({
            where : { id : id },
            truncate : false
        })
        .then(favEliminado => {
            console.log(favEliminado);
            res.send(`El fav con la id  ${id} ha sido eliminado`);
        })

    } catch (error) {
        res.send(error);
    }
}

FavsControllers.getAll =  (req,res) => {
    Fav.findAll()
    .then(data => {
        res.send(data)
    });
}

FavsControllers.getbyid = async (req,res) => {
    let id = req.params.id
    let consulta = `SELECT usuarios.nombre AS nombre, supers.nombre AS nombre , favs.id AS id,  usuarios.usuario AS usuario
    FROM usuarios INNER JOIN favs 
    ON usuarios.id = favs.usuarioId INNER JOIN supers
    ON supers.id = favs.superId WHERE usuarios.id = ${id}`;
    let resultado = await Fav.sequelize.query(consulta,{
        type: Fav.sequelize.QueryTypes.SELECT});
    if(resultado){
        res.send(resultado);
    }
}


module.exports = FavsControllers;