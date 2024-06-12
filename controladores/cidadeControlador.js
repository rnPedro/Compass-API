const Cidade = require('../modelos/cidadeModelo');

let cidades = [];

function cadastrarCidade(req, res) {
    const { nome, estado } = req.body;
    const cidade = new Cidade(nome, estado);
    cidades.push(cidade);
    res.status(201).json(cidade);
}

function consultarCidadePorNome(req, res) {
    const { nome } = req.params;
    const cidadeEncontrada = cidades.find(cidade => cidade.nome === nome);
    if (cidadeEncontrada) {
        res.status(200).json(cidadeEncontrada);
    } else {
        res.status(404).json({ mensagem: 'Cidade não encontrada' });
    }
}

function consultarCidadePorEstado(req, res) {
    const { estado } = req.params;
    const cidadesEncontradas = cidades.filter(cidade => cidade.estado === estado);
    if (cidadesEncontradas.length > 0) {
        res.status(200).json(cidadesEncontradas);
    } else {
        res.status(404).json({ mensagem: 'Nenhuma cidade encontrada para o estado fornecido' });
    }
}

module.exports = {
    cadastrarCidade,
    consultarCidadePorNome,
    consultarCidadePorEstado,
};
