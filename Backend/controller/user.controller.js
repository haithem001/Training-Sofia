const UserService = require('../services/user.service');

class UserController{
    async getAllUsers(req,res){
        try {
            const users = await UserService.getAllUsers();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }

    async getUsersById(req,res){
        try {
            const user = await UserService.getUserById(req.params.id);
            if (user) {
                res.json(user);
            }else{
                res.status(404).json({message: 'User not found.'});
            }
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }

    async createUser(req,res){
        try {
            const user = await UserService.createUser(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }

    async deleteUser(req,res){
        try {
            const result = await UserService.deleteUser(req.params.id);
            if (result) {
                res.json({message: 'User deleted.'});
            }else{
                res.status(404).json({message: 'User not found.'});
            }
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }


    //find by department req qui prend le departement as a parameter
    async findUserByDep(req,res){
        try {
            const user = await UserService.findUserByDep(req.params.dep)
            if (user) {
                res.json(user);
            }else{
                res.status(404).json({message: 'no users at this department.'});
            }
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }

    // find by role req that get a string that contains the roles 

    async findUserByRole(req,res){
        try {
            const user = await UserService.findUserByRole(req.params.role)
            if (user) {
                res.json(user);
                if (user == null) {
                    res.status(404).json({message: 'no users with this role.'});    
                }
            }else{
                res.status(404).json({message: 'no users with this role.'});
            }
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }

    async updateUser(req,res){
        try {
            const user = await UserService.updateUser(req.params.id, req.body);
            if (user) {
              res.json(user);
            } else {
              res.status(404).json({ message: 'User not found' });
            }
          } catch (error) {
            res.status(500).json({ error: error.message });
          }
    }


}



module.exports = new UserController();
