const {Sequelize} = require("sequelize");
const database = require('../..');


const neonates_tray = database.provider.sequelize.define("neonates_tray", 
{
    id:         {type: Sequelize.INTEGER, allowNull: false, autoIncrement: true,primaryKey: true,},
    start_data: {type: Sequelize.DATE,    allowNull: true},
    end_data:   {type: Sequelize.DATE,    allowNull: true},
    status:     {type: Sequelize.BOOLEAN, allowNull: true}   
},
{
    freezeTableName: true
});

const incubation_box = database.provider.sequelize.define("incubation_box", 
{
    id:         {type: Sequelize.INTEGER, allowNull: false, autoIncrement: true,primaryKey: true,},
    start_data: {type: Sequelize.DATE,    allowNull: true},
    end_data:   {type: Sequelize.DATE,    allowNull: true},
    status:     {type: Sequelize.BOOLEAN, allowNull: true}   
},
{
    freezeTableName: true
});

const incubation_box_load = database.provider.sequelize.define("incubation_box_load", 
{
    id:                 {type: Sequelize.INTEGER, allowNull: false, autoIncrement: true,primaryKey: true,},
    incubation_box_id:  {type: Sequelize.INTEGER, allowNull: false},
    start_data:         {type: Sequelize.DATE,    allowNull: true},
    end_data:           {type: Sequelize.DATE,    allowNull: true},
    status:             {type: Sequelize.BOOLEAN, allowNull: true},
    eggs_load_weight:   {type: Sequelize.INTEGER, allowNull: true},
    neonates_weight:    {type: Sequelize.INTEGER, allowNull: true},
    neonates_count:     {type: Sequelize.INTEGER, allowNull: true},
    hatching:           {type: Sequelize.FLOAT,   allowNull: true}
},
{
    freezeTableName: true
});

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

incubation_box.hasOne(incubation_box_load, {
    onDelete: "cascade",
    foreignKey: "incubation_box_id"
});

incubation_box_load.belongsToMany(neonates_tray,{
    through: neonates_tray_load,
    foreignKey: "incubation_box_id"
});

neonates_tray.belongsToMany(incubation_box_load,{
    through: neonates_tray_load
});

incubation_box.sync({ alter: true });
incubation_box_load.sync({ alter: true });
neonates_tray.sync({ alter: true });
neonates_tray_load.sync({ alter: true });