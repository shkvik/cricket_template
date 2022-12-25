const {Sequelize} = require("sequelize");
const singleton = require("./mySqlProvider");

console.log(`${singleton.test}`);

module.exports = {

    User: singleton.sequelize.define("user", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING,
        },
        age: {
            type: Sequelize.INTEGER,
        }
    })
}