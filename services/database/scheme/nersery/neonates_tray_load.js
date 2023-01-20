const {Sequelize} = require("sequelize");
const database = require('../../../database');

const neonates_tray_load = database.provider.sequelize.define("neonates_tray_load", 
{
    id:                     {type: Sequelize.INTEGER, allowNull: false, autoIncrement: true,primaryKey: true,},
    neonates_tray_id:       {type: Sequelize.INTEGER, allowNull: false},
    colony_id:              {type: Sequelize.INTEGER, allowNull: false},
    start_data:             {type: Sequelize.DATE,    allowNull: true},
    end_data:               {type: Sequelize.DATE,    allowNull: true},
    status:                 {type: Sequelize.BOOLEAN, allowNull: true},
    neonates_load_weight:   {type: Sequelize.INTEGER, allowNull: true},
    larvae_weight:          {type: Sequelize.INTEGER, allowNull: true},
    larvae_count:           {type: Sequelize.INTEGER, allowNull: true},
    incubation_box_id:      {type: Sequelize.INTEGER, allowNull: false},
    age:                    {type: Sequelize.INTEGER, allowNull: true},
    fcr_n:                  {type: Sequelize.INTEGER, allowNull: true},
    movement_speed:         {type: Sequelize.ENUM,    allowNull: true, values: ['none','low','normal','high']},
    size:                   {type: Sequelize.ENUM,    allowNull: true, values: ['none','small','normal','big']}
},
{
    freezeTableName: true
});

module.exports = {neonates_tray_load};