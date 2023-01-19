
const temperatureChart = document.getElementById('myChart').getContext("2d");

var gradient = temperatureChart.createLinearGradient(0, 0, 0, 260);
    gradient.addColorStop(0, 'rgba(62,205,129,1)');
    gradient.addColorStop(1, 'rgba(0,0,0,0)');

new Chart(temperatureChart, 
{
    type: 'line',
    
    data: 
    {

        labels: temperature_mounths,
        
        datasets: 
        [
            {
                data: temperature_values,
                borderWidth: 1,
                backgroundColor: '#3ECD81',
                tension: 0.3,
                borderColor: '#3ECD81',
                fill: 
                {
                    target: 'origin',
                    above: gradient,   // Area will be red above the origin
                }
            },
            
        ]

    },
    options:
    {
        scales: 
        {
            y: 
            {
                max: 100,
                min: 0
            }
        },
        plugins:
        {
            legend: 
            {
                display: false
            },
        },
    }
});

const ctx2 = document.getElementById('myChart2');

new Chart(ctx2, 
{
    type: 'line',
    data: 
    {
        labels: humidity_hours,
        datasets: 
        [
            {
                data: Humidity_values,
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
        scales: 
        {
            y: 
            {
                max: 100,
                min: 0
            }
        },
        plugins:
        {
            legend: 
            {
                display: false
            }
        }

    }
});

const ctx3 = document.getElementById('myChart3');

new Chart(ctx3, 
{
    type: 'line',
    data: 
    {
        labels: humidity_hours,
        datasets: 
        [
            {
                data: Humidity_values,
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
        scales: 
        {
            y: 
            {
                max: 100,
                min: 0
            }
        },
        plugins:
        {
            legend: 
            {
                display: false
            }
        }

    }
});