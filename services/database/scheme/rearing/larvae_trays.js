const {Sequelize} = require("sequelize");
const database = require('../../../database');

const larvae_trays = database.provider.sequelize.define("larvae_trays", 
{
    id:         {type: Sequelize.INTEGER, allowNull: false, autoIncrement: true,primaryKey: true,},
    start_data: {type: Sequelize.DATE,    allowNull: true},
    end_data:   {type: Sequelize.DATE,    allowNull: true},
    status:     {type: Sequelize.BOOLEAN, allowNull: true},
    type:       {type: Sequelize.ENUM,    allowNull: true, values: ['1','2','3']},
},
{
    freezeTableName: true
});


module.exports = {larvae_trays};