
const router = require('express').Router();


const UsuarioRouter = require('./views/UsuarioRouter');
const SupersRouter = require('./views/SupersRouter');

router.use('/usuarios', UsuarioRouter);
router.use('/supers', SupersRouter);

module.exports = router;