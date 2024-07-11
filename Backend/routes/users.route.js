const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUsersById);
router.get('/role/:role', userController.findUserByRole);
router.get('/dep/:dep', userController.findUserByDep);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;