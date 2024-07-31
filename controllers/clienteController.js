// controllers/clienteController.js
const Cliente = require('../models/clienteModel');

exports.index = async (req, res) => {
    const clientes = await Cliente.findAll();
    res.render('index', { clientes });
};

exports.show = async (req, res) => {
    try {
        const cliente = await Cliente.findById(req.params.id);
        if (cliente) {
            res.render('show', { cliente });
        } else {
            res.status(404).send('Cliente não encontrado');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro no servidor');
    }
};

exports.createForm = (req, res) => {
    res.render('create');
};

exports.create = async (req, res) => {
    const { nome, email, telefone } = req.body;
    await Cliente.create({ nome, email, telefone });
    res.redirect('/');
};

exports.editForm = async (req, res) => {
    try {
        const cliente = await Cliente.findById(req.params.id);
        if (cliente) {
            res.render('edit', { cliente });
        } else {
            res.status(404).send('Cliente não encontrado');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro no servidor');
    }
};

exports.update = async (req, res) => {
    const { nome, email, telefone } = req.body;
    await Cliente.update(req.params.id, { nome, email, telefone });
    res.redirect('/');
};

exports.delete = async (req, res) => {
    await Cliente.delete(req.params.id);
    res.redirect('/');
};
