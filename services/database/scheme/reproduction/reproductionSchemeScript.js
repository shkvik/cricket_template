const {Sequelize} = require("sequelize");
const database = require('../../../database');

const dark_cage = database.provider.sequelize.define("dark_cage", 
{
    id:         {type: Sequelize.INTEGER, allowNull: false, autoIncrement: true,primaryKey: true,},
    start_data: {type: Sequelize.DATE,    allowNull: true},
    end_data:   {type: Sequelize.DATE,    allowNull: true},
    status:     {type: Sequelize.BOOLEAN, allowNull: true},
},
{
    freezeTableName: true
});

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


const fly_cage = database.provider.sequelize.define("fly_cage", 
{
    id:         {type: Sequelize.INTEGER, allowNull: false, autoIncrement: true,primaryKey: true,},
    start_data: {type: Sequelize.DATE,    allowNull: true},
    end_data:   {type: Sequelize.DATE,    allowNull: true},
    status:     {type: Sequelize.BOOLEAN, allowNull: true},
},
{
    freezeTableName: true
});


const fly_cage_load = database.provider.sequelize.define("fly_cage_load", 
{
    id:                 {type: Sequelize.INTEGER, allowNull: false, autoIncrement: true,primaryKey: true},
    fly_cage_id:        {type: Sequelize.INTEGER, allowNull: false},
    dark_cage_id:	    {type: Sequelize.INTEGER, allowNull: false},
    start_time:         {type: Sequelize.DATE,    allowNull: true},
    end_time:           {type: Sequelize.DATE,    allowNull: true},
    status:			    {type: Sequelize.BOOLEAN, allowNull: true},
    fly_count:          {type: Sequelize.BOOLEAN, allowNull: true},	
    eggs_weight:		{type: Sequelize.BOOLEAN, allowNull: true},	
    eggs_count:			{type: Sequelize.BOOLEAN, allowNull: true},
    colony_id:	        {type: Sequelize.INTEGER, allowNull: false},
    parent_colony_id:   {type: Sequelize.INTEGER, allowNull: false}
},
{
    freezeTableName: true
});

dark_cage.hasMany(dark_cage_load, { 
    onDelete: "cascade",
    foreignKey: "dark_cage_id"
});

dark_cage.hasMany(fly_cage_load, { 
    onDelete: "cascade",
    foreignKey: "dark_cage_id"
});

fly_cage.hasOne(fly_cage_load, {
    onDelete: "cascade",
    foreignKey: "fly_cage_id"
});