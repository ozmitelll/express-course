const sequelize = require("../db/connect.db")

const User = require("./user")(sequelize)


(async () => {
    try {
        await sequelize.sync({alter: true});
        console.log("DB re-sync");

    } catch (error) {
        console.log("Error: ", error);
    }
})();

module.exports = {
    User
}