const {Sequelize} = require("sequelize");
const database = require('../../../database');

const neonates_tray = database.provider.sequelize.define("neonates_tray", 
{
    id:         {type: Sequelize.INTEGER, allowNull: false, autoIncrement: true,primaryKey: true,},
    start_data: {type: Sequelize.DATE,    allowNull: true},
    end_data:   {type: Sequelize.DATE,    allowNull: true},
    status:     {type: Sequelize.BOOLEAN, allowNull: true}   
},
{
    freezeTableName: true
});

module.exports = {neonates_tray};