// models/clienteModel.js
const db = require('../config');

class Cliente {
    static async findAll() {
        const [rows] = await db.query('SELECT * FROM clientes');
        return rows;
    }

    static async findById(id) {
        const [rows] = await db.query('SELECT * FROM clientes WHERE id = ?', [id]);
        return rows[0];
    }

    static async create(cliente) {
        const { nome, email, telefone } = cliente;
        const [result] = await db.query('INSERT INTO clientes (nome, email, telefone) VALUES (?, ?, ?)', [nome, email, telefone]);
        return result.insertId;
    }

    static async update(id, cliente) {
        const { nome, email, telefone } = cliente;
        await db.query('UPDATE clientes SET nome = ?, email = ?, telefone = ? WHERE id = ?', [nome, email, telefone, id]);
    }

    static async delete(id) {
        await db.query('DELETE FROM clientes WHERE id = ?', [id]);
    }
}

module.exports = Cliente;
