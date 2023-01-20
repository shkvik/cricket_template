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

module.exports = {product};
