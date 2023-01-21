
const temperatureConfig = document.getElementById('myChart').getContext("2d");
    
const gradient = temperatureConfig.createLinearGradient(0, 0, 0, 260);
    gradient.addColorStop(0, 'rgba(62,205,129,0.7)');
    gradient.addColorStop(1, 'rgba(0,0,0,0)');

const temperatureChart = {
    title: "temperature",
    chart: new Chart(temperatureConfig, 
    {
        type: 'line',
        data: 
        {
            labels: ['January','February','March','April','May'],
            datasets: 
            [
                {
                    data: 0,
                    borderWidth: 1,
                    backgroundColor: '#3ECD81',
                    tension: 0.3,
                    borderColor: '#3ECD81',
                    fill: {target: 'origin',above: gradient,}
                },
            ]
        },
        options:
        {
            scales: {y: {max: 100,min: 0}},
            plugins: {legend: {display: false},},
        }
    })
}

const humidityConfig = document.getElementById('myChart2');


const humidityChart = {   
    title: "humidity",
    chart: new Chart(humidityConfig, 
    {
        type: 'line',
        data: 
        {
            labels: ['00:00','03:00','06:00','09:00','12:00','15:00','18:00','21:00','24:00'],
            datasets: 
            [
                {
                    data: 0,
                    borderWidth: 1,
                    backgroundColor: '#3ECD81',
                    tension: 0.3,
                    borderColor: '#3ECD81',
                    fill: {target: 'origin',above: gradient,}
                }
            ]
        },
        options:
        {
            scales: {y: {max: 100,min: 0 }},
            plugins: { legend:{display: false } }
        }
    })
}

const fcrConfig = document.getElementById('myChart3');

const fcrChart = {
    title: "fcr",
    chart: new Chart(fcrConfig, 
    {
        type: 'line',
        data: 
        {
            labels: ['00:00','03:00','06:00','09:00','12:00','15:00','18:00','21:00','24:00'],
            datasets: 
            [
                {
                    data: 0,
                    borderWidth: 1,
                    backgroundColor: '#3ECD81',
                    tension: 0.3,
                    borderColor: '#3ECD81',
                    fill: 
                    {
                        target: 'origin',
                        above: gradient,   // Area will be red above the origin
                    }
                }
            ]
        },
        options:
        {
            scales: { y:{ max: 100, min: 0 }},
            plugins: { legend:  {display: false }}
        }
    })
}


const ajaxRequestTemperature = {
    ajax: new XMLHttpRequest(),
    url: "http://192.168.99.1:3030/dashboard/get_temperature"
}
const ajaxRequestHumidity = {
    ajax: new XMLHttpRequest(),
    url: "http://192.168.99.1:3030/dashboard/get_humidity"
}
const ajaxRequestFcr = {
    ajax: new XMLHttpRequest(),
    url: "http://192.168.99.1:3030/dashboard/get_fcr"
}


async function setAjaxRepeatRequest(ajaxObj){
    ajaxObj.ajax.open("GET",ajaxObj.url);
    ajaxObj.ajax.send();

    setInterval(async function() {
        ajaxObj.ajax.open("GET", ajaxObj.url);
        await ajaxObj.ajax.send();
    }, 5000);
}


async function ajaxChartResponseUpgrade(ajaxObj, chartObj){
    ajaxObj.onload = async () => {
        var response = JSON.parse(ajaxObj.responseText);
        if(response.title == chartObj.title)
            await chartUpdate(chartObj.chart, response);
    }
};

async function chartUpdate(chart, response)
{
    chart.data.datasets[0].data = [];
    chart.data.labels = [];

    response.data.forEach(element => {
        chart.data.labels.push(element.key);
        chart.data.datasets[0].data.push(element.value);
    });

    chart.update();
}
//@Init charts
await setAjaxRepeatRequest(ajaxRequestFcr);
await setAjaxRepeatRequest(ajaxRequestTemperature);
await setAjaxRepeatRequest(ajaxRequestHumidity);

//@upgrade charts
await ajaxChartResponseUpgrade(ajaxRequestFcr.ajax, fcrChart);
await ajaxChartResponseUpgrade(ajaxRequestHumidity.ajax, humidityChart);
await ajaxChartResponseUpgrade(ajaxRequestTemperature.ajax, temperatureChart);

