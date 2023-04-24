const express = require('express');
const { createCliente } = require('../controllers/clienteController');
const router = express.Router();

router.route('/').post(createCliente)
module.exports = router;
