const express = require('express');
const { createCliente,getAllClientes,getCliente,updateCliente } = require('../controllers/clienteController');
const router = express.Router();

router.route('/').post(createCliente).get(getAllClientes)
router.route('/:id').get(getCliente).path(updateCliente)
module.exports = router;
