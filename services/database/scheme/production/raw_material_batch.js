const {Sequelize} = require("sequelize");
const database = require('../..');


const raw_material_batch = database.provider.sequelize.define("raw_material_batch", 
{
    id:                 {type: Sequelize.INTEGER,       allowNull: false, autoIncrement: true,primaryKey: true},
    parental_type:      {type: Sequelize.STRING(255),   allowNull: false}, 
    production_load_id: {type: Sequelize.INTEGER,       allowNull: false},
    weight:             {type: Sequelize.INTEGER,       allowNull: true},
    larvae_trays_id:    {type: Sequelize.INTEGER,       allowNull: false},	
},
{
    freezeTableName: true
});


module.exports = {raw_material_batch};


