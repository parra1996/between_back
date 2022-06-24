const { Usuario} = require('../models/index');
const {Op} = require("sequelize");
const { default: axios } = require('axios');

const UsuarioController = {};

UsuarioController.registraUsuario = async (req, res) => {


    let nombre = req.body.nombre;
    let apellido = req.body.apellido;
    let usuario = req.body.usuario;
    let super_fav = req.body.super_fav;
    let favs = req.body.favs;

    Usuario.findAll({
        where: {

            [Op.or]: [{
                usuario: {
                    [Op.like]: usuario
                }
            }, ]
        }

    }).then(datosRepetidos => {

        if (datosRepetidos == 0) {

            Usuario.create({
                    nombre: nombre,
                    apellido: apellido,
                    usuario: usuario,
                    super_fav: super_fav,
                    favs: favs,
                }).then(usuario => {
                    res.send(`${usuario.nombre}, te has registrado con exito`);
                })
                .catch((error) => {
                    res.send(error);
                });

        } else {
            res.send("Este usuario ya existe en nuestra base de datos");
        }
    }).catch(error => {
        res.send(error)
    });



};

UsuarioController.logUsuario = (req, res) => {

    let usuario = req.body.usuario;

    Usuario.findOne({
        where: {
            usuario: usuario
        }
    }).then(element => {

        if (!element) {
            res.send("Usuario inválido");
        } else {

                res.json({
                    usuario: element,
                })
            
        };


    }).catch(error => {
        res.send(error);
    })
};

UsuarioController.llamar = async (req,res) => {
 
    //https://gateway.marvel.com:443/v1/public/characters?apikey=477572bbc4000049e3379ce86acc7407

    // pblic key 477572bbc4000049e3379ce86acc7407

    // private key 6ce65b27416fc388ca7773198ad6aafbab9bb87a

    // ts: 1

    // 16ce65b27416fc388ca7773198ad6aafbab9bb87a477572bbc4000049e3379ce86acc7407

    //hash : 2122799baa4ed02346ae71808f7c6260

    try{
        let resultado = await axios.get("https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=477572bbc4000049e3379ce86acc7407&hash=2122799baa4ed02346ae71808f7c6260")
     res.send(resultado.data.data.results)  
    }catch(error){
        console.log(error)
    }
   
}   

module.exports = UsuarioController;