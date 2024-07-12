var express = require('express');
var router = express.Router();
const petsController = require('../controller/Pets.controller')
router.get('/Pets', (req, res, next) => {
    petsController.getAllPets(req, res).then(r => {});
});

router.post('/Pets', (req, res, next) => {
    petsController.addPet(req, res).then(r => {console.log("Pet added")});
});

router.delete('/Pets', (req, res) => {
    petsController.deletePet(req, res).then(r => {
        console.log("Pet Deleted");});
});
router.put('/Pets/:id', (req, res) => {
    petsController.updatePet(req, res).then(r => {console.log("Pet updated")});
});
module.exports = router;

