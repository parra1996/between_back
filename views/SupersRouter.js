const express = require('express');
const router = express.Router();

const SupersController = require('../controllers/SUpersController');

router.get('/', SupersController.llamar)

router.get('/traer', SupersController.getAll)

module.exports = router;