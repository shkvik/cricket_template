const {Sequelize} = require("sequelize");
const database = require('../../../database');

const dark_cage = database.provider.sequelize.define("dark_cage", 
{
    id:         {type: Sequelize.INTEGER, allowNull: false, autoIncrement: true,primaryKey: true,},
    start_data: {type: Sequelize.DATE,    allowNull: true},
    end_data:   {type: Sequelize.DATE,    allowNull: true},
    status:     {type: Sequelize.BOOLEAN, allowNull: true},
},
{
    freezeTableName: true
});


module.exports = {dark_cage};