const {Sequelize} = require("sequelize");
const database = require('../..');


const production_load = database.provider.sequelize.define("production_load", 
{
    id:             {type: Sequelize.INTEGER, allowNull: false, autoIncrement: true,primaryKey: true},
    equipment_id:	{type: Sequelize.INTEGER, allowNull: false},
    start_time:     {type: Sequelize.DATE,    allowNull: true},
    status:         {type: Sequelize.BOOLEAN, allowNull: true},
    end_time:       {type: Sequelize.DATE,    allowNull: true},
    input_weight:   {type: Sequelize.INTEGER, allowNull: true},
    product_id:     {type: Sequelize.INTEGER, allowNull: false},
    output_weight:  {type: Sequelize.INTEGER, allowNull: true},	
},
{
    freezeTableName: true
});


module.exports = {production_load};

