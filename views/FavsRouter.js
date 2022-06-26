const express = require('express');
const router = express.Router();

const FavsController = require('../controllers/FavsController');


router.post('/', FavsController.nuevo_fav);

module.exports = router;