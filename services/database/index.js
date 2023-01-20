const mySqlProvider = require("./mySqlProvider")

mySqlProvider.sequelize.sync().then(result=>{
    console.log(result);
}).catch(err=> console.log(err));
    

module.exports = {
    provider: mySqlProvider
}