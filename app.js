const express = require("express");
const handlebars = require('express-handlebars');
const hbs = require('hbs');
const welcome = require("./services/database");

// const { singleton } = require("./services/database/singleton.js")


// singleton.User.findAll({raw:true}).then(users=>{
//   console.log(users);
// }).catch(err=>console.log(err));

const app = express();
const userRouter = require("./routes/userRouter.js");
const homeRouter = require("./routes/homeRouter.js");



app.engine(
    'hbs',
    handlebars.engine({
      layoutsDir: 'views/layout',
      defaultLayout: 'layout',
      extname: 'hbs',
    })
  )


app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));
 
app.use("/users", userRouter);
app.use("/", homeRouter);
 
app.use(function (req, res, next) {
    res.status(404).send("Not Found");
});
 
app.listen(3000, ()=> { console.log("Сервер запущен и ожидает подключения...") });


var ip = require("ip");
console.log(`main url: http://${ip.address()}:3000`);
