const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Por favor, adicione um título'],
        trim: true
    },
    director: {
        type: String,
        required: [true, 'Por favor, adicione um diretor']
    },
    year: {
        type: Number,
        required: [true, 'Por favor, adicione o ano de lançamento']
    },
    genre: {
        type: String,
        required: [true, 'Por favor, adicione um gênero']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Movie', movieSchema);
