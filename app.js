const express = require("express");
const handlebars = require('express-handlebars');
const hbs = require('hbs')
const mysql = require("mysql2");



const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "usersdb",
  password: "1337"
});

connection.connect(function(err){
    if (err) {
      return console.error("Ошибка: " + err.message);
    }
    else{
      console.log("Подключение к серверу MySQL успешно установлено");
    }
 });


 
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
