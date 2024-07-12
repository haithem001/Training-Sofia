const initializePetModel = require('../models/Pets.Model');
const {updatePet} = require("../controller/Pets.controller");
const {where} = require("sequelize");

exports.getAllPets = async () => {
    try {
        const Pet = await initializePetModel();
        const Pets = await Pet.findAll();
        return Pets;
    } catch (err) {
        throw new Error('Error fetching pets: ' + err.message);
    }
};

exports.addPet = async (petData) => {
    try {
        const Pet = await initializePetModel();
        const pet = await Pet.create(petData);
        return pet;
    } catch (err) {
        throw new Error('Error adding pet: ' + err.message);
    }
};

exports.deletePet = async (petData) => {
    try {
        const Pet = await initializePetModel();
        const deletedPet = await Pet.destroy({
            where: {
                name: petData.name
            }
        });
        return deletedPet;
    } catch (err) {
        throw new Error('Error deleting pet: ' + err.message);
    }
};
exports.updatePet = async (id, petData) => {
    try {
        const Pet = await initializePetModel();
        const pet = await Pet.update(petData, {
            where: { id: id }
        });
        return pet;
    } catch (err) {
        throw new Error('Error updating pet: ' + err.message);
    }
};

