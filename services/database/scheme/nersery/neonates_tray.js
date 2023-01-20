const {Sequelize} = require("sequelize");
const database = require('../../../database');
const neonates_tray_load = require('./neonates_tray_load.js');
const incubation_box_load = require('./incubation_box_load.js');


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