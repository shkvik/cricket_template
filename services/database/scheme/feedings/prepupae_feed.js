const {Sequelize} = require("sequelize");
const database = require('../../../database');

const prepupae_feed = database.provider.sequelize.define("prepupae_feed", 
{
    id:                 {type: Sequelize.INTEGER,       allowNull: false, autoIncrement: true,primaryKey: true,},
    ingredients:        {type: Sequelize.STRING(1000),  allowNull: true},
    ingredient_procent: {type: Sequelize.FLOAT,         allowNull: true}
},
{
    freezeTableName: true
});

module.exports = {prepupae_feed};