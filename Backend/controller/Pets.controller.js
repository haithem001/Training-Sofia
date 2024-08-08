const petsService = require('../services/Pet.Service');
exports.getAllPets = async (req, res) => {
    try {
        const pets = await petsService.getAllPets();
        res.json(pets);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.deletePet = async(req, res)=>{
    try{
        const pet = await petsService.deletePet(req.body);
        res.status(200).json(pet);
    }
    catch(err) {
        res.status(500).send(err.message)
    }
}
exports.addPet = async (req, res) => {
    try {
        const pet = await petsService.addPet(req.body);
        res.status(201).json(pet);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
    };

    exports.updatePet= async (req,res) =>{
        try{
            const id = req.params.id;
            const pet =await petsService.updatePet(id,req.body)

            res.status(200).json(pet);
        }
        catch(err) {
            res.status(500).send(err.message)
        }
    }

