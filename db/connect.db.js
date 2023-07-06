const Sequelize = require("sequelize");
const mySqlConfig = require("../config/database.config");


const sequelize = new Sequelize(mySqlConfig.database, mySqlConfig.username,mySqlConfig.password,mySqlConfig.options);

sequelize
    .authentificate()
    .then(()=>{
        console.log('Connect to database successful!');
    })
    .catch((err)=>{
        console.error('Error connect to database',err);
    });


module.exports = sequelize;