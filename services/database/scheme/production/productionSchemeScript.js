const {Sequelize} = require("sequelize");
const database = require('../..');


const product = database.provider.sequelize.define("product", 
{
    id:         {type: Sequelize.INTEGER,       allowNull: false, autoIncrement: true,primaryKey: true,},
    name:       {type: Sequelize.STRING(255),   allowNull: false},
    start_data: {type: Sequelize.DATE,          allowNull: true},
    status:     {type: Sequelize.BOOLEAN,       allowNull: true},
    end_data:   {type: Sequelize.DATE,          allowNull: true},
},
{
    freezeTableName: true
});


const equipment = database.provider.sequelize.define("equipment", 
{
    id:         {type: Sequelize.INTEGER,       allowNull: false, autoIncrement: true,primaryKey: true,},
    name:       {type: Sequelize.STRING(255),   allowNull: false},
    start_date: {type: Sequelize.DATE,          allowNull: true},
    status:     {type: Sequelize.BOOLEAN,       allowNull: true},
    end_date:   {type: Sequelize.DATE,          allowNull: true},
    product_id: {type: Sequelize.INTEGER,       allowNull: false}
},
{
    freezeTableName: true
});


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

product.hasOne(equipment, {
    onDelete: "cascade",
    foreignKey: "product_id"
})

equipment.hasOne(production_load, {
    onDelete: "cascade",
    foreignKey: "equipment_id"
})

production_load.hasOne(raw_material_batch, {
    onDelete: "cascade",
    foreignKey: "production_load_id"
})


product.sync({ alter: true });
equipment.sync({ alter: true });
production_load.sync({ alter: true });
raw_material_batch.sync({ alter: true });