const app = require('./app');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 3000;

// Conectar ao Banco de Dados
connectDB();

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
});
