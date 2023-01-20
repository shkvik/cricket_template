const {Sequelize} = require("sequelize");
const database = require('../../../database');

const growing_feed_load = database.provider.sequelize.define("growing_feed_load", 
{
    id:                 {type: Sequelize.INTEGER,       allowNull: false, autoIncrement: true,primaryKey: true,},
    colony_id:      	{type: Sequelize.INTEGER,       allowNull: false},
    time_stamp:         {type: Sequelize.DATE,          allowNull: true},
    amount:             {type: Sequelize.INTEGER,       allowNull: true},
    lavae_tray_id:      {type: Sequelize.INTEGER,       allowNull: false},
    growing_feed_id:    {type: Sequelize.INTEGER,       allowNull: false},
},
{
    freezeTableName: true
});

module.exports = {growing_feed_load};