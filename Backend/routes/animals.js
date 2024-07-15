const express = require('express');
const userController = require('../controller/animal.controller');
const router = express.Router();
const animalController = require('../controller/animalController');

/* GET users listing. 
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
*/

router.get('/', animalController.getAllAnimals);
router.get('/:id', animalController.getAnimalById);
router.get('/:age', animalController.getAnimalByAge);
router.get('/:height', animalController.getAnimalByHeight);
router.post('/', animalController.createAnimal);
router.put('/:id', animalController.updateAnimal);
router.delete('/:id', animalController.deleteAnimal);


module.exports = router;