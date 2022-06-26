
const router = require('express').Router();

const UsuarioRouter = require('./views/UsuarioRouter');
const SupersRouter = require('./views/SupersRouter');
const FavsRouter = require('./views/FavsRouter');

router.use('/usuarios', UsuarioRouter);
router.use('/supers', SupersRouter);
router.use('/favs', FavsRouter);


module.exports = router;