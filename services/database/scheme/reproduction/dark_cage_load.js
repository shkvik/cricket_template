const {Sequelize} = require("sequelize");
const database = require('../..');

const dark_cage_load = database.provider.sequelize.define("dark_cage_load", 
{
    id:                     {type: Sequelize.INTEGER, allowNull: false, autoIncrement: true,primaryKey: true},
    dark_cage_id:           {type: Sequelize.INTEGER, allowNull: false},
    start_time:	            {type: Sequelize.DATE,    allowNull: true},
    end_time:               {type: Sequelize.DATE,    allowNull: true},
    status:                 {type: Sequelize.BOOLEAN, allowNull: true},
    prepupae_weight:        {type: Sequelize.INTEGER, allowNull: true},
    prepupae_count:         {type: Sequelize.INTEGER, allowNull: true},
    fly_count:              {type: Sequelize.INTEGER, allowNull: true},
    colony_id:              {type: Sequelize.INTEGER, allowNull: false},
    parent_colony_id:       {type: Sequelize.INTEGER, allowNull: false}
},
{
    freezeTableName: true
});

module.exports = {dark_cage_load};

