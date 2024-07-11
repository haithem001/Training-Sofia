const MovieService = require('../services/movie.service');

class MovieController {
  async getAllMovies(req, res) {
    try {
      const movies = await MovieService.getAllMovies();
      res.json(movies);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching movies' });
    }
  }

  async getMovieById(req, res) {
    try {
      const id = req.params.id;
      const movie = await MovieService.getMovieById(id);
      if (!movie) {
        res.status(404).json({ message: 'Movie not found' });
      } else {
        res.json(movie);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching movie' });
    }
  }

  async createMovie(req, res) {
    try {
      const { title, genre, releaseDate } = req.body;
      console.log(req.body);
      const movie = await MovieService.createMovie(title, genre, releaseDate);
      res.json(movie);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error creating movie' });
    }
  }

  async updateMovie(req, res) {
    try {
      const id = req.params.id;
      const { title, genre, releaseDate } = req.body;
      await MovieService.updateMovie(id, title, genre, releaseDate);
      res.json({ message: 'Movie updated successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error updating movie' });
    }
  }

  async deleteMovie(req, res) {
    try {
      const id = req.params.id;
      await MovieService.deleteMovie(id);
      res.json({ message: 'Movie deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error deleting movie' });
    }
  }
  async headMovie(req, res) {
    try {
      const id = req.params.id;
      const movie = await MovieService.getMovieById(id);
      if (!movie) {
        res.status(404).json({ message: 'Movie not found' });
      } else {
        res.set('Content-Type', 'application/json');
        res.set('ETag', movie.etag); // optional
        res.status(200).end();
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching movie' });
    }
    
  }
  async optionsMovie(req, res) {
    res.set('Allow', 'GET, HEAD, POST, PUT, DELETE, OPTIONS');
    res.status(200).end();
  }
}

module.exports = new MovieController();