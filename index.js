const express = require('express');
const bodyParser = require('body-parser');
const cidadeRotas = require('./rotas/cidadeRotas');
const clienteRotas = require('./rotas/clienteRotas');

const app = express();

app.use(bodyParser.json());

// Rotas
app.use('/api', cidadeRotas);
app.use('/api', clienteRotas);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
