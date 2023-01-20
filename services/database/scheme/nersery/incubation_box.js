const {Sequelize} = require("sequelize");
const database = require('../../../database');

const incubation_box = database.provider.sequelize.define("incubation_box", 
{
    id:         {type: Sequelize.INTEGER, allowNull: false, autoIncrement: true,primaryKey: true,},
    start_data: {type: Sequelize.DATE,    allowNull: true},
    end_data:   {type: Sequelize.DATE,    allowNull: true},
    status:     {type: Sequelize.BOOLEAN, allowNull: true}   
},
{
    freezeTableName: true
});


module.exports = {incubation_box}