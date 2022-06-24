const express = require('express');
const router = express.Router();

const UsuarioController = require('../controllers/UsuarioController');

//Registro
router.post('/', UsuarioController.registraUsuario);

//Login
router.post('/login', UsuarioController.logUsuario);

// llamar supers

router.get('/', UsuarioController.llamar)
module.exports = router;