const {Sequelize} = require("sequelize");
const database = require('../..');


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

module.exports = {equipment};
