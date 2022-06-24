
const express = require('express');
const router = express.Router();
// const auth = require("../middlewares/auth");
// const isAdmin = require("../middlewares/isAdmin");

const UsuarioController = require('../controllers/UsuarioController');

//CRUD RESTful

//Leer todos los usuarios
router.get('/',   UsuarioController.traeUsuarios);

router.get('/email/:email',  UsuarioController.traerUsuarioEmail);

router.get('/:id',  UsuarioController.traerUsuarioId);

//Registro
router.post('/', UsuarioController.registraUsuario);

//Modificar datos de un Usuario
router.put('/:id',  UsuarioController.updateProfile);

//cambiar contraseña
router.put('/newpassword',  UsuarioController.updatePassword);

//Borramos a todos los usuarios
router.delete('/',  UsuarioController.deleteAll);

//Borramos a todos los usuarios
router.delete('/:id',  UsuarioController.deleteById);

//Login
router.post('/login', UsuarioController.logUsuario);
//https://localhost:3000/usuarios/login


module.exports = router;