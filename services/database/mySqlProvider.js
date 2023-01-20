const {Sequelize} = require("sequelize");


module.exports = {

  sequelize: new Sequelize("world", "root", "1337", {
    dialect: "mysql",
    host: "localhost",
    define: {timestamps: false}    
  })

};