const {Sequelize} = require("sequelize");
const database = require('../..');

const prepupae_trays_load = database.provider.sequelize.define("prepupae_trays_load", 
{
    id:                     {type: Sequelize.INTEGER, allowNull: false, autoIncrement: true,primaryKey: true},
    prepupae_trays_id:      {type: Sequelize.INTEGER, allowNull: false},
    colony_id:              {type: Sequelize.INTEGER, allowNull: false},
    start_time:             {type: Sequelize.DATE,    allowNull: true},
    end_time:               {type: Sequelize.DATE,    allowNull: true},
    status:                 {type: Sequelize.BOOLEAN, allowNull: true},
    prepupae_load_weight:   {type: Sequelize.INTEGER, allowNull: true},
    pupae_weight:           {type: Sequelize.INTEGER, allowNull: true},			
    pupae_count:            {type: Sequelize.INTEGER, allowNull: true},
    larvae_trays_id:        {type: Sequelize.INTEGER, allowNull: true},
    fcr_p:                  {type: Sequelize.INTEGER, allowNull: true},
    age:                    {type: Sequelize.INTEGER, allowNull: true},
    parent_colony_id:       {type: Sequelize.INTEGER, allowNull: true},
},
{
    freezeTableName: true
});


module.exports = {prepupae_trays_load};


