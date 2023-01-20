const {Sequelize} = require("sequelize");
const database = require('../../../database');

const fly_cage = database.provider.sequelize.define("fly_cage", 
{
    id:         {type: Sequelize.INTEGER, allowNull: false, autoIncrement: true,primaryKey: true,},
    start_data: {type: Sequelize.DATE,    allowNull: true},
    end_data:   {type: Sequelize.DATE,    allowNull: true},
    status:     {type: Sequelize.BOOLEAN, allowNull: true},
},
{
    freezeTableName: true
});


module.exports = {fly_cage};