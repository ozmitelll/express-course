const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('users', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNullm: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        role:{
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "USER",
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
}
