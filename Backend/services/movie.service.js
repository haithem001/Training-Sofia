const Movie = require('../models/movie.model');

module.exports ={
  async  getAllMovies() {
    return await Movie.findAll();
  }
,
  async getMovieById(id) {
    return await Movie.findByPk(id);
  },

  async  createMovie(title, genre, releaseDate) {
    console.log(title);
    return await Movie.create({ title, genre, releaseDate });
  },

  async updateMovie(id, title, genre, releaseDate) {
    const movie = await Movie.findByPk(id);
    if (!movie) {
      throw new Error('Movie not found');
    }
    movie.title = title;
    movie.genre = genre;
    movie.releaseDate = releaseDate;
    return await movie.save();
  },

  async deleteMovie(id) {
    return await Movie.destroy({ where: { id } });
  }
}
