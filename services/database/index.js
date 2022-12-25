const mySqlProvider = require("./mySqlProvider")
//const models = require('./UserTest')


mySqlProvider.sequelize.sync().then(result=>{
    console.log(result);
}).catch(err=> console.log(err));
    
// const tryThis = async() => {
//     return models.User.findAll({raw:true}).then(users=>{
//         console.log(users);
//     }).catch(err=>console.log(err));
// }

// tryThis();

module.exports = {
    test: "chek",
    provider: mySqlProvider
}