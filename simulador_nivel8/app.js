const express = require('express');
const dotenv = require('dotenv');

// Carregar variáveis de ambiente
dotenv.config();

// Importar Rotas
const movieRoutes = require('./routes/movieRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware para entender JSON
app.use(express.json());

// Montar as Rotas
app.use('/movies', movieRoutes);
app.use('/users', userRoutes);

// Rota básica para teste inicial
app.get('/', (req, res) => {
    res.send('API Simulator Nível 8 Rodando!');
});

module.exports = app;
