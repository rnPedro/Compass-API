const express = require('express');
const router = express.Router();
const cidadeControlador = require('../controladores/cidadeControlador');

router.post('/cidades', cidadeControlador.cadastrarCidade);
router.get('/cidades/:nome', cidadeControlador.consultarCidadePorNome);
router.get('/cidades/estado/:estado', cidadeControlador.consultarCidadePorEstado);

module.exports = router;
