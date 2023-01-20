const {Sequelize} = require("sequelize");
const database = require('../..');

const larvae_trays_load = database.provider.sequelize.define("larvae_trays_load", 
{
    id:                 {type: Sequelize.INTEGER, allowNull: false, autoIncrement: true,primaryKey: true,},
    larvae_trays_id:    {type: Sequelize.INTEGER, allowNull: false},
    start_data:         {type: Sequelize.DATE,    allowNull: true},
    end_data:           {type: Sequelize.DATE,    allowNull: true},
    status:             {type: Sequelize.BOOLEAN, allowNull: true},
    larvae_load_weight: {type: Sequelize.INTEGER, allowNull: true},
    prepupae_weight:    {type: Sequelize.INTEGER, allowNull: true},
    prepupae_count:     {type: Sequelize.INTEGER, allowNull: true},
    neonates_trays_id:  {type: Sequelize.INTEGER, allowNull: true},
    fcr_r:              {type: Sequelize.INTEGER, allowNull: true},
    fcr:                {type: Sequelize.INTEGER, allowNull: true},
    frass_weight:       {type: Sequelize.INTEGER, allowNull: true},
    larvae_moisture:    {type: Sequelize.INTEGER, allowNull: true},
    frass_moisture:     {type: Sequelize.INTEGER, allowNull: true},
    harvest_weight:     {type: Sequelize.INTEGER, allowNull: true},
    age:                {type: Sequelize.INTEGER, allowNull: true},
    parent_colony_id:   {type: Sequelize.INTEGER, allowNull: true}
},
{
    freezeTableName: true
});


module.exports = {larvae_trays_load};