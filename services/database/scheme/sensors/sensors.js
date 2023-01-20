const {Sequelize} = require("sequelize");
const database = require('../..');

const sensors = database.provider.sequelize.define("sensors", 
{
    parameter_id:   {type: Sequelize.INTEGER, allowNull: false, autoIncrement: true,primaryKey: true,},	
    sensor_id:      {type: Sequelize.INTEGER, allowNull: false},	
    location_id:    {type: Sequelize.INTEGER, allowNull: false}
},
{
    freezeTableName: true
});

module.exports = {sensors};	