const AnimalSercice = require('../services/animal.service');

class AnimalController {
  async getAllAnimals(req, res) {
    try {
      const users = await AnimalService.getAllAnimals();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAnimalById(req, res) {
    try {
      const user = await AnimalService.getAnimalById(req.params.id);
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: 'Animal not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  
  async getAnimalByAge(req, res) {
    try {
      const user = await AnimalService.getAnimalByAge(req.params.height);
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: 'Animal not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAnimalByHeight(req, res) {
    try {
      const user = await AnimalService.getAnimalByHeight(req.params.height);
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: 'Animal not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createAnimal(req, res) {
    try {
      const user = await AnimalService.createAnimal(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateAnimal(req, res) {
    try {
      const user = await AnimalService.updateAnimal(req.params.id, req.body);
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: 'Animal not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async deleteAnimal(req, res) {
    try {
      const result = await AnimalService.deleteAnimal(req.params.id);
      if (result) {
        res.json({ message: 'Animal deleted successfully' });
      } else {
        res.status(404).json({ message: 'Animal not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new AnimalController();