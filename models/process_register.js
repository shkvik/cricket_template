const {Sequelize} = require("sequelize");
const database = require("../services/database");


const register_process = database.provider.sequelize.define("process_register", 
{
   Id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
   },
   ColoniesId: {
        type: Sequelize.INTEGER,
        allowNull: false
   },
   WindSpeed: {
        type: Sequelize.INTEGER,
        allowNull: true
   },
   CommonTemperature: {
        type: Sequelize.INTEGER,
        allowNull: true
   },
   CommonHumidity: {
        type: Sequelize.INTEGER,
        allowNull: true
   },
   SubstrateTemperature: {
        type: Sequelize.INTEGER,
        allowNull: true
   },
   SubstrateHumidity: {
        type: Sequelize.INTEGER,
        allowNull: true
   },
   EggsCollection: {
        type: Sequelize.INTEGER,
        allowNull: true
   },
   AmountFeedAdded: {
        type: Sequelize.INTEGER,
        allowNull: true
   },
   Comment: {
        type: Sequelize.STRING(1000),
        allowNull: true
   },
   MovementSpeed: {
        type:   Sequelize.ENUM,
        values: ['normal', 'small', 'big']
   },
   ColonySize: {
        type:   Sequelize.ENUM,
        values: ['normal', 'small', 'big']
   },
   LarvaeHumidityLevel: {
        type: Sequelize.INTEGER,
        allowNull: true
   },
   SubstrateMoistureLevel: {
        type: Sequelize.INTEGER,
        allowNull: true
   },
   /* вес личинок в граммах */
   LarvaeWeight: {
        type: Sequelize.INTEGER,
        allowNull: true
   },
   /* вес свежей влаги */
   FreshMoistureWeight: {
        type: Sequelize.INTEGER,
        allowNull: true
   },
   StartData: {
        type: Sequelize.DATE,
        allowNull: false,
   },
   EndData: {
        type: Sequelize.DATE,
        allowNull: false,
   },
   DayCounter: {
        type: Sequelize.DATE,
        allowNull: false,
   },
   ColoniesId:
   {
        type: Sequelize.INTEGER,
        allowNull: false,
   }
},
{
    freezeTableName: true
});

module.exports = { Process: register_process }
    
