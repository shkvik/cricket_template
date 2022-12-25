const {Sequelize} = require("sequelize");



module.exports = {

  sequelize: new Sequelize("world", "root", "1337", {
    dialect: "mysql",
    host: "localhost",
    define: {timestamps: false}    
  })
  
}


// sequelize.sync().then(result=>{
//     console.log(result);
//     }).catch(err=> console.log(err));


// User.findAll({raw:true}).then(users=>{
//     console.log(users);
// }).catch(err=>console.log(err))
