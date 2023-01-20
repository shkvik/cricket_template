const {Sequelize} = require("sequelize");
const database = require('../../../database');


const prepupae_trays = database.provider.sequelize.define("prepupae_trays", 
{
    id:         {type: Sequelize.INTEGER, allowNull: false, autoIncrement: true,primaryKey: true,},
    start_data: {type: Sequelize.DATE,    allowNull: true},
    end_data:   {type: Sequelize.DATE,    allowNull: true},
    status:     {type: Sequelize.BOOLEAN, allowNull: true},
},
{
    freezeTableName: true
});

module.exports = {prepupae_trays};