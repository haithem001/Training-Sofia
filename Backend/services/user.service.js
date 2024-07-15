const User = require('../models/user.model');

class UserService{
    async getAllUsers(){
        return await User.findAll();
    }
    async getUserById(id){
        return await User.findByPk(id);
    }
    async createUser(user){
        return await User.create(user);
    }
    async updateUser(id, userData){
        const user = await User.findByPk(id);
        if (user) {
            return await User.update(userData,{where: {id}});    
        }
        return null ;
    }
    async deleteUser(id){
        const user = await User.findByPk(id);
        if (user) {
            await User.destroy({where: {id}});
            return true;    
        }
        return false;
    }
    async findUserByDep(dep){
        return await User.findAll(
            {where: {department: dep}
        });
    }
    async findUserByRole(role){
        return await User.findAll(
            {where: {role : role}
        });
    }
}


module.exports = new UserService();