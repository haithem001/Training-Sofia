const Department = require('../models/department.model');

class DepartmentService {
  async getAllDepartments() {
    return await Department.findAll();
  }

  async getDepartmentById(id) {
    return await Department.findByPk(id);
  }

  async createDepartment(departmentData) {
    return await Department.create(departmentData);
  }

  async updateDepartment(id, departmentData) {
    const department = await Department.findByPk(id);
    if (department) {
      return await department.update(departmentData);
    }
    return null;
  }

  async deleteDepartment(id) {
    const department = await Department.findByPk(id);
    if (department) {
      await department.destroy();
      return true;
    }
    return false;
  }
}

module.exports = new DepartmentService();
