const { Usuario} = require('../models/index');
const {Op} = require("sequelize");

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



module.exports = UsuarioController;