module.exports = ({User}) =>{
    const getUserById = (userId) =>{
        return User.findOne({where: {id: userId}});
    }
    const getUserByUsername = (username) =>{
        return User.findOne({where: {username}});
    }
    const getAllUsers = () =>{
        return User.findAll({where:{role:"USER"}});
    }
    const createUser = ({username, email, password})=>{
        return User.create({username,email,password});
    }
    const deleteUser = (userId) => {
        return User.destroy({where: {id: userId}});
    };

    const isExistsById = async (userId) => {
        const user = await User.findOne({where: {id: userId}});
        return !!user;
    };

    const isExistsByUsername = async (username) => {
        const user = await User.findOne({where: {username}});
        return !!user;
    };

    return {
        getUserById,
        getUserByUsername,
        getAllUsers,
        createUser,
        deleteUser,
        isExistsById,
        isExistsByUsername,
    };
};