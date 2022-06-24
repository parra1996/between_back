const express = require('express');
const router = express.Router();

const SupersController = require('../controllers/SUpersController');

router.get('/', SupersController.llamar)

module.exports = router;