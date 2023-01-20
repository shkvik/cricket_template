const {Sequelize} = require("sequelize");
const database = require('../../../database');

const prepupae_feed_load = database.provider.sequelize.define("prepupae_feed_load", 
{
    id:                 {type: Sequelize.INTEGER,   allowNull: false, autoIncrement: true,primaryKey: true,},
    colony_id:      	{type: Sequelize.INTEGER,   allowNull: false},
    time_stamp:         {type: Sequelize.DATE,      allowNull: true},
    amount:             {type: Sequelize.INTEGER,   allowNull: true},
    prepupae_trays_id:  {type: Sequelize.INTEGER,   allowNull: false},
    prepupae_feed_id:   {type: Sequelize.INTEGER,   allowNull: false},
},
{
    freezeTableName: true
});

module.exports = {prepupae_feed_load};