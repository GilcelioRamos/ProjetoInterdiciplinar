const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 8000;

// Configuração do banco de dados MySQL
const db = mysql.createConnection({
    host: 'localhost',  // Use o endereço do servidor MySQL
    user: 'root',       // Seu usuário MySQL
    password: 'Jeni0398@',       // Sua senha MySQL
    database: 'cadastro',
});

// Conectar ao banco de dados
db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
    } else {
        console.log('Conectado ao banco de dados MySQL!');
    }
});

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Rotas
app.get('/usuarios', (req, res) => {
    db.query('SELECT * FROM usuarios', (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);
    });
});

app.post('/usuarios', (req, res) => {
    const { nome, email, senha } = req.body;
    db.query(
        'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)',
        [nome, email, senha],
        (err, results) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.json({ message: 'Usuário adicionado com sucesso!', id: results.insertId });
        }
    );
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
