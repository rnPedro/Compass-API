const express = require('express');
const router = express.Router();
const clienteControlador = require('../controladores/clienteControlador');

router.post('/clientes', clienteControlador.cadastrarCliente);
router.get('/clientes/:nome', clienteControlador.consultarClientePorNome);
router.get('/clientes/id/:id', clienteControlador.consultarClientePorId);
router.delete('/clientes/:id', clienteControlador.removerCliente);
router.put('/clientes/:id/nome', clienteControlador.alterarNomeCliente);

module.exports = router;
