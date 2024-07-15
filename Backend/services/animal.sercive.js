const Animal = require('../models/Animal.model');

class AnimalService {
  async getAllAnimals() {
    return await Animal.findAll();
  }

  async getAnimalById(id) {
    return await Animal.findByPk(id);
  }
  async getAnimalByAge(id) {
    return await Animal.find(age);
  }
  async getAnimalByHeight(id) {
    return await Animal.find(height);
  }
  async createAnimal(AnimalData) {
    return await Animal.create(AnimalData);
  }

  async updateAnimal(id, AnimalData) {
    const Animal = await Animal.findByPk(id);
    if (Animal) {
      return await Animal.update(AnimalData);
    }
    return null;
  }

  async deleteAnimal(id) {
    const Animal = await Animal.findByPk(id);
    if (Animal) {
      await Animal.destroy();
      return true;
    }
    return false;
  }
}

module.exports = new AnimalService();