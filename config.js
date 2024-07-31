// config.js
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cadastro_clientes'
});

module.exports = pool.promise();
