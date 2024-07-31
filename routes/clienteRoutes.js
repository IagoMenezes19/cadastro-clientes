// routes/clienteRoutes.js
const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

router.get('/', clienteController.index);
router.get('/clientes/create', clienteController.createForm); // Rota de criação deve vir antes de '/clientes/:id'
router.post('/clientes/create', clienteController.create);
router.get('/clientes/edit/:id', clienteController.editForm);
router.post('/clientes/edit/:id', clienteController.update);
router.post('/clientes/delete/:id', clienteController.delete);
router.get('/clientes/:id', clienteController.show); // Esta rota deve ser a última para evitar conflitos

module.exports = router;
