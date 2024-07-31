// app.js
const express = require('express');
const bodyParser = require('body-parser');
const clienteRoutes = require('./routes/clienteRoutes');
const path = require('path');

const app = express();

// Configurar EJS como motor de visualização
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Configurar middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public'))); // Servir arquivos estáticos

// Usar rotas
app.use('/', clienteRoutes);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
