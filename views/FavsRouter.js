const express = require('express');
const router = express.Router();

const FavsController = require('../controllers/FavsController');


router.post('/', FavsController.nuevo_fav);

router.delete('/:id', FavsController.eliminar_fav);

router.get('/', FavsController.getAll);

module.exports = router;