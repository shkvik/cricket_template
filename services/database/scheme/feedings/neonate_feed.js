const {Sequelize} = require("sequelize");
const database = require('../../../database');

const neonate_feed = database.provider.sequelize.define("neonate_feed", 
{
    id:                 {type: Sequelize.INTEGER,       allowNull: false, autoIncrement: true,primaryKey: true,},
    ingredients:        {type: Sequelize.STRING(1000),   allowNull: true},
    ingredient_procent: {type: Sequelize.FLOAT,         allowNull: true}
},
{
    freezeTableName: true
});

module.exports = {neonate_feed};
