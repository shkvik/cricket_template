const DashboardModel = require("../models/dashboardModel.js");


exports.index = function (request, response){

    var dashboard = new DashboardModel();

    response.render("../views/dashboardView.hbs", 
    {
        Title: dashboard.Title,
        Temperature: 
        [
            {
                mounth: 'January',
                value: 50
            },
            {
                mounth: 'February',
                value: 70
            },
            {
                mounth: 'March ',
                value: 80
            },
            {
                mounth: 'April ',
                value: 30
            },
            {
                mounth: 'May ',
                value: 19
            },
        ],
        Humidity: 
        [
            {
                hour: '00:00',
                value: 80
            },
            {
                hour: '03:00',
                value: 70
            },
            {
                hour: '06:00',
                value: 60
            },
            {
                hour: '09:00',
                value: 50
            },
            {
                hour: '12:00',
                value: 40
            },
            {
                hour: '15:00',
                value: 50
            },
            {
                hour: '18:00',
                value: 60
            },
            {
                hour: '21:00',
                value: 70
            },
            {
                hour: '24:00',
                value: 90
            },
        ]
    });
};