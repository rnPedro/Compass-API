const Cliente = require('../modelos/clienteModelo');

let clientes = [];

function cadastrarCliente(req, res) {
    const { nome, sexo, dataNascimento, idade, cidade } = req.body;
    const cliente = new Cliente(nome, sexo, dataNascimento, idade, cidade);
    clientes.push(cliente);
    res.status(201).json(cliente);
}

function consultarClientePorNome(req, res) {
    const { nome } = req.params;
    const clienteEncontrado = clientes.find(cliente => cliente.nome === nome);
    if (clienteEncontrado) {
        res.status(200).json(clienteEncontrado);
    } else {
        res.status(404).json({ mensagem: 'Cliente não encontrado' });
    }
}

function consultarClientePorId(req, res) {
    const { id } = req.params;
    const clienteEncontrado = clientes.find(cliente => cliente.id === id);
    if (clienteEncontrado) {
        res.status(200).json(clienteEncontrado);
    } else {
        res.status(404).json({ mensagem: 'Cliente não encontrado' });
    }
}

function removerCliente(req, res) {
    const { id } = req.params;
    const indiceCliente = clientes.findIndex(cliente => cliente.id === id);
    if (indiceCliente !== -1) {
        clientes.splice(indiceCliente, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ mensagem: 'Cliente não encontrado' });
    }
}

function alterarNomeCliente(req, res) {
    const { id } = req.params;
    const { novoNome } = req.body;
    const cliente = clientes.find(cliente => cliente.id === id);
    if (cliente) {
        cliente.nome = novoNome;
        res.status(200).json(cliente);
    } else {
        res.status(404).json({ mensagem: 'Cliente não encontrado' });
    }
}

module.exports = {
    cadastrarCliente,
    consultarClientePorNome,
    consultarClientePorId,
    removerCliente,
    alterarNomeCliente,
};
