const departmentService = require('../services/Department.service');

class DepartmentController {
  async getAllDepartments(req, res) {
    try {
      const departments = await departmentService.getAllDepartments();
      res.json(departments);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getDepartmentById(req, res) {
    try {
      const department = await departmentService.getDepartmentById(req.params.id);
      if (department) {
        res.json(department);
      } else {
        res.status(404).json({ message: 'Department not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createDepartment(req, res) {
    try {
      const department = await departmentService.createDepartment(req.body);
      res.status(201).json(department);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateDepartment(req, res) {
    try {
      const department = await departmentService.updateDepartment(req.params.id, req.body);
      if (department) {
        res.json(department);
      } else {
        res.status(404).json({ message: 'Department not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteDepartment(req, res) {
    try {
      const result = await departmentService.deleteDepartment(req.params.id);
      if (result) {
        res.json({ message: 'Department deleted successfully' });
      } else {
        res.status(404).json({ message: 'Department not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new DepartmentController();
