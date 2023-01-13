const express = require("express");
const handlebars = require('express-handlebars');
const hbs = require('hbs');
const welcome = require("./services/database");


const app = express();

const dashboardRouter    = require("./routes/dashboardRouter.js");
const nurseryRouter      = require("./routes/nurseryRouter.js");
const rearingRouter      = require("./routes/rearingRouter.js");
const reproductionRouter = require("./routes/reproductionRouter.js");
const productionRouter   = require("./routes/productionRouter.js");
const usersRouter        = require("./routes/usersRouter.js");
const settingsRouter     = require("./routes/settingsRouter.js");


app.engine('hbs',
  handlebars.engine({
    layoutsDir: 'views/layout',
    defaultLayout: 'layout',
    extname: 'hbs',
  })
);


app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));


app.use("/production", productionRouter);
app.use("/reproduction", reproductionRouter);
app.use("/nursery", nurseryRouter);
app.use("/rearing", rearingRouter);
app.use("/dashboard", dashboardRouter);
app.use("/users", usersRouter);
app.use("/settings", settingsRouter);
app.use("/", dashboardRouter);
 

app.use(function (req, res, next) {
    res.status(404).send("Not Found");
});
 
app.listen(3030, ()=> { console.log("Сервер запущен и ожидает подключения...") });


var ip = require("ip");
console.log(`main url: http://${ip.address()}:3030`);
