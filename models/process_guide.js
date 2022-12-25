const {Sequelize} = require("sequelize");
const database = require("../services/database");
const register = require('./process_register');


const process_guide = database.provider.sequelize.define("process_guide", 
{
    Id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    Title: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    Description: {
        type: Sequelize.STRING(3000),
        allowNull: true
    }
},
{
    freezeTableName: true
});

process_guide.hasOne(register.Process, { onDelete: "cascade"});

module.exports = { Guide: process_guide }
    
