const {Sequelize} = require("sequelize");
const database = require('../../../database');

const growing_feed = database.provider.sequelize.define("growing_feed", 
{
    id:                 {type: Sequelize.INTEGER,       allowNull: false, autoIncrement: true,primaryKey: true,},
    ingredients:        {type: Sequelize.STRING(1000),  allowNull: true},
    ingredient_procent: {type: Sequelize.FLOAT,         allowNull: true}
},
{
    freezeTableName: true
});

module.exports = {growing_feed};
