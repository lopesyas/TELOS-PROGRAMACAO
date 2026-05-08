const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB Conectado: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Erro na conexão: ${error.message}`);
        process.exit(1); // Para a aplicação se não conectar
    }
};

module.exports = connectDB;
