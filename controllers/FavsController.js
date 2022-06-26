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



module.exports = FavsControllers;