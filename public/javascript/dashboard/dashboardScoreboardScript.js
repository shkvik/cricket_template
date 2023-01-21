
const scoreboardModel = {
    temperature: document.getElementById('temperature'),
    humidity:    document.getElementById('humidity'),

    co2_ppm:{
        max:        document.getElementById('co2_ppm_max'),
        average:    document.getElementById('co2_ppm_average'),
        min:        document.getElementById('co2_ppm_min'),
    },
    nh3:{
        max:        document.getElementById('nh3_max'),
        average:    document.getElementById('nh3_average'),
        min:        document.getElementById('nh3_min'),
    },
    farm_results: {
        crickets:   document.getElementById('farm_results_crickets'),
        frass:      document.getElementById('farm_results_frass'),
    },
    prediction: {
        crickets:   document.getElementById('prediction_crickets'),
        frass:      document.getElementById('prediction_frass'),
    }
}

const ajaxRequestScoreboard = {
    ajax: new XMLHttpRequest(),
    url: "http://192.168.99.1:3030/dashboard/get_scoreboard"
}


ajaxRequestScoreboard.ajax.open("GET",ajaxRequestScoreboard.url);
ajaxRequestScoreboard.ajax.send();

setInterval(async function() {
    ajaxRequestScoreboard.ajax.open("GET", ajaxRequestScoreboard.url);
    await ajaxRequestScoreboard.ajax.send();
}, 300);

ajaxRequestScoreboard.ajax.onload = async () => {
    var response = JSON.parse(ajaxRequestScoreboard.ajax.responseText);
    if(response.title == 'scoreboard')
        await fillScoreboardModel(response.data);
}

async function fillScoreboardModel(data){
    scoreboardModel.temperature.textContent = data.temperature;
    scoreboardModel.humidity.textContent = data.humidity;

    scoreboardModel.co2_ppm.max.textContent = data.co2_ppm.max;
    scoreboardModel.co2_ppm.average.textContent = data.co2_ppm.average;
    scoreboardModel.co2_ppm.min.textContent = data.co2_ppm.min;

    scoreboardModel.nh3.max.textContent = data.nh3.max;
    scoreboardModel.nh3.average.textContent = data.nh3.average;
    scoreboardModel.nh3.min.textContent = data.nh3.min;

    scoreboardModel.farm_results.crickets.textContent = data.farm_results.crickets;
    scoreboardModel.farm_results.frass.textContent = data.farm_results.frass;

    scoreboardModel.prediction.crickets.textContent = data.prediction.crickets;
    scoreboardModel.prediction.frass.textContent = data.prediction.frass;
}