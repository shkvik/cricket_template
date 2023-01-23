const DashboardModel = require("../models/dashboardModel.js");

//For Test
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

exports.get_scoreboard = async function(request, response){
    response.json({
        title: "scoreboard",
        data:{
            temperature: getRandomInt(100),
            humidity: getRandomInt(100),

            co2_ppm:{
                max:    getRandomInt(1100),
                average: getRandomInt(1100),
                min: getRandomInt(800),
            },
            nh3:{
                max:    getRandomInt(1100),
                average: getRandomInt(1100),
                min: getRandomInt(800),
            },
            farm_results: {
                crickets: getRandomInt(15000),
                frass: getRandomInt(16000),
            },
            prediction: {
                crickets: getRandomInt(15000),
                frass: getRandomInt(16000),
            }
        }
    });
};


exports.get_fcr = async function(request, response){
    response.json({
        title: "fcr",
        data: 
        [
            {key: '00:00',value: getRandomInt(100)},        
            {key: '03:00',value: getRandomInt(100)},
            {key: '06:00',value: getRandomInt(100)},
            {key: '09:00',value: getRandomInt(100)},
            {key: '12:00',value: getRandomInt(100)},
            {key: '15:00',value: getRandomInt(100)},
            {key: '18:00',value: getRandomInt(100)},
            {key: '21:00',value: getRandomInt(100)},
            {key: '24:00',value: getRandomInt(100)},
        ]
    });
};


exports.get_humidity = async function(request, response){
    response.json({
        title: "humidity",
        data: 
        [
            {key: '00:00',value: getRandomInt(100)},        
            {key: '03:00',value: getRandomInt(100)},
            {key: '06:00',value: getRandomInt(100)},
            {key: '09:00',value: getRandomInt(100)},
            {key: '12:00',value: getRandomInt(100)},
            {key: '15:00',value: getRandomInt(100)},
            {key: '18:00',value: getRandomInt(100)},
            {key: '21:00',value: getRandomInt(100)},
            {key: '24:00',value: getRandomInt(100)},
        ]
    });
};

exports.get_temperature = async function(request, response){

    response.json({
        title: "temperature",
        data: 
        [
            {key: 'Привет',     value: getRandomInt(100)},
            {key: 'February',    value: getRandomInt(100)},
            {key: 'March',       value: getRandomInt(100)},   
            {key: 'April',       value: getRandomInt(100)},  
            {key: 'May',         value: getRandomInt(100)},
            {key: 'May',         value: getRandomInt(100)},
            {key: 'May',         value: getRandomInt(100)},
        ],    
   });
};

exports.index = async function (request, response){

    response.render("../views/dashboardView.hbs");

};