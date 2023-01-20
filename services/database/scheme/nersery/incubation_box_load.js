const {Sequelize} = require("sequelize");
const database = require('../../../database');

const incubation_box_load = database.provider.sequelize.define("incubation_box_load", 
{
    id:                 {type: Sequelize.INTEGER, allowNull: false, autoIncrement: true,primaryKey: true,},
    incubation_box_id:  {type: Sequelize.INTEGER, allowNull: false},
    start_data:         {type: Sequelize.DATE,    allowNull: true},
    end_data:           {type: Sequelize.DATE,    allowNull: true},
    status:             {type: Sequelize.BOOLEAN, allowNull: true},
    eggs_load_weight:   {type: Sequelize.INTEGER, allowNull: true},
    neonates_weight:    {type: Sequelize.INTEGER, allowNull: true},
    neonates_count:     {type: Sequelize.INTEGER, allowNull: true},
    hatching:           {type: Sequelize.FLOAT,   allowNull: true}
},
{
    freezeTableName: true
});

module.exports = {incubation_box_load};