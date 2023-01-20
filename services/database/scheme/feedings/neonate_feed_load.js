const {Sequelize} = require("sequelize");
const database = require('../../../database');

const neonate_feed_load = database.provider.sequelize.define("neonate_feed_load", 
{
    id:                 {type: Sequelize.INTEGER,       allowNull: false, autoIncrement: true,primaryKey: true,},
    colony_id:      	{type: Sequelize.INTEGER,       allowNull: false},
    time_stamp:         {type: Sequelize.DATE,          allowNull: true},
    amount:             {type: Sequelize.INTEGER,       allowNull: true},
    incubation_box_id:  {type: Sequelize.INTEGER,       allowNull: false},
    neonate_feed_id:    {type: Sequelize.INTEGER,       allowNull: false},
},
{
    freezeTableName: true
});

module.exports = {neonate_feed_load};
