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

const sensors_measurements = database.provider.sequelize.define("sensors_measurements", 
{
    parameter_id:   {type: Sequelize.INTEGER, allowNull: false, autoIncrement: true,primaryKey: true},
    sensor_id:      {type: Sequelize.INTEGER, allowNull: false},	
    value:          {type: Sequelize.INTEGER, allowNull: true},
    date_stamp:     {type: Sequelize.DATE,    allowNull: true},	
},
{
    freezeTableName: true
});

sensors.sync({ alter: true });
sensors_measurements.sync({ alter: true });