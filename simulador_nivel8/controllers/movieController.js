const Movie = require('../models/Movie');

// @desc    Listar todos os filmes
// @route   GET /movies
exports.getMovies = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.status(200).json({ success: true, data: movies });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// @desc    Listar um único filme por ID
// @route   GET /movies/:id
exports.getMovie = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) {
            return res.status(404).json({ success: false, message: 'Filme não encontrado' });
        }
        res.status(200).json({ success: true, data: movie });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// @desc    Criar um novo filme
// @route   POST /movies
exports.createMovie = async (req, res) => {
    try {
        const movie = await Movie.create(req.body);
        res.status(201).json({ success: true, data: movie });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// @desc    Atualizar um filme
// @route   PUT /movies/:id
exports.updateMovie = async (req, res) => {
    try {
        const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!movie) {
            return res.status(404).json({ success: false, message: 'Filme não encontrado' });
        }
        res.status(200).json({ success: true, data: movie });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// @desc    Deletar um filme
// @route   DELETE /movies/:id
exports.deleteMovie = async (req, res) => {
    try {
        const movie = await Movie.findByIdAndDelete(req.params.id);
        if (!movie) {
            return res.status(404).json({ success: false, message: 'Filme não encontrado' });
        }
        res.status(200).json({ success: true, data: {} });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
