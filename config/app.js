const express = require('express');
const clienteRoutes = require('../routes/clienteRoutes');
const app = express();

app.use(express.json({}));

app.use('/api/v1/cliente',clienteRoutes);

module.exports = app;