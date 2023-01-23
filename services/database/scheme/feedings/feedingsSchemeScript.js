const {Sequelize} = require("sequelize");
const database = require('../../../database');

const neonate_feed = database.provider.sequelize.define("neonate_feed", 
{
    id:                 {type: Sequelize.INTEGER,       allowNull: false, autoIncrement: true,primaryKey: true,},
    ingredients:        {type: Sequelize.STRING(1000),   allowNull: true},
    ingredient_procent: {type: Sequelize.FLOAT,         allowNull: true}
},
{
    freezeTableName: true
});

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


const growing_feed = database.provider.sequelize.define("growing_feed", 
{
    id:                 {type: Sequelize.INTEGER,       allowNull: false, autoIncrement: true,primaryKey: true,},
    ingredients:        {type: Sequelize.STRING(1000),  allowNull: true},
    ingredient_procent: {type: Sequelize.FLOAT,         allowNull: true}
},
{
    freezeTableName: true
});

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

const prepupae_feed = database.provider.sequelize.define("prepupae_feed", 
{
    id:                 {type: Sequelize.INTEGER,       allowNull: false, autoIncrement: true,primaryKey: true,},
    ingredients:        {type: Sequelize.STRING(1000),  allowNull: true},
    ingredient_procent: {type: Sequelize.FLOAT,         allowNull: true}
},
{
    freezeTableName: true
});

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


neonate_feed.hasOne(neonate_feed_load, {
    onDelete: "cascade",
    foreignKey: "neonate_feed_id"
});

growing_feed.hasOne(growing_feed_load, {
    onDelete: "cascade",
    foreignKey: "growing_feed_id"
});

prepupae_feed.hasOne(prepupae_feed_load, {
    onDelete: "cascade",
    foreignKey: "prepupae_feed_id"
});


neonate_feed        .sync({ alter: true });
neonate_feed_load   .sync({ alter: true });
growing_feed        .sync({ alter: true });
growing_feed_load   .sync({ alter: true });
prepupae_feed       .sync({ alter: true });
prepupae_feed_load  .sync({ alter: true });