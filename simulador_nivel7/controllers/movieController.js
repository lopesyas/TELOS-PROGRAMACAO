let movies = [];
let nextId = 1;


// create
exports.createMovie = (req, res) => {
    const { title, description, year, genres, image, video } = req.body;

    const movie = {
        id: nextId++,
        title,
        description,
        year,
        genres,
        image,
        video
    }

    movies.push(movie);

    res.status(201).json(movie);
};

// get all - buscar todos
exports.getMovies = (req, res) => {
    res.json(movies);
};

// update

exports.updateMovie = (req, res) => {
  const { id } = req.params;

  const movie = movies.find(m => m.id == id);

  if (!movie) {
    return res.status(404).json({ message: "Filme não encontrado" });
  }

  Object.assign(movie, req.body);

  res.json(movie);
};

// delete

exports.deleteMovie = (req, res) => {
  const { id } = req.params;

  movies = movies.filter(m => m.id != id);

  res.json({ message: "Filme removido com sucesso" });
};

