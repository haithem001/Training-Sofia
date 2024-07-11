const express = require('express');
const router = express.Router();
const departmentController = require('../controllers/department.controller');

router.get('/departments', departmentController.getAllDepartments);
router.get('/departments/:id', departmentController.getDepartmentById);
router.post('/departments', departmentController.createDepartment);
router.put('/departments/:id', departmentController.updateDepartment);
router.delete('/departments/:id', departmentController.deleteDepartment);

module.exports = router;
