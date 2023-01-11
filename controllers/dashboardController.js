const Dashboard = require("../models/dashboard.js");


exports.index = function (request, response){

    var dashboard = new Dashboard();

    response.render("../views/dashboard.hbs", 
    {
        Title: dashboard.Title,
        Arr: ['Пидор', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']
    });
};