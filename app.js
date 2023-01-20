const express = require("express");
const handlebars = require('express-handlebars');
const appConfiguration = require("./services/appConfigurationService.js");
const bodyParser = require('body-parser');
const app = express();


app.engine('hbs',
  handlebars.engine({
    layoutsDir: 'views/layout',
    defaultLayout: 'layout.hbs',
    extname: '.hbs',
  })
);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
})); 
app.use(express.static(__dirname + '/public'));

appConfiguration.installRouters(app);

app.use(function (req, res, next) {
    res.status(404).send("Not Found");
});
 
app.listen(3030, ()=> { console.log("Сервер запущен и ожидает подключения...") });


var ip = require("ip");
console.log(`main url: http://${ip.address()}:3030`);