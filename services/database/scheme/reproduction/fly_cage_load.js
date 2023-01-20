const {Sequelize} = require("sequelize");
const database = require('../..');

const fly_cage_load = database.provider.sequelize.define("fly_cage_load", 
{
    id:                 {type: Sequelize.INTEGER, allowNull: false, autoIncrement: true,primaryKey: true},
    fly_cage_id:        {type: Sequelize.INTEGER, allowNull: false},
    dark_cage_id:	    {type: Sequelize.INTEGER, allowNull: false},
    start_time:         {type: Sequelize.DATE,    allowNull: true},
    end_time:           {type: Sequelize.DATE,    allowNull: true},
    status:			    {type: Sequelize.BOOLEAN, allowNull: true},
    fly_count:          {type: Sequelize.BOOLEAN, allowNull: true},	
    eggs_weight:		{type: Sequelize.BOOLEAN, allowNull: true},	
    eggs_count:			{type: Sequelize.BOOLEAN, allowNull: true},
    colony_id:	        {type: Sequelize.INTEGER, allowNull: false},
    parent_colony_id:   {type: Sequelize.INTEGER, allowNull: false}
},
{
    freezeTableName: true
});

module.exports = {fly_cage_load};