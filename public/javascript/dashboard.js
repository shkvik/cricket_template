
const ctx = document.getElementById('myChart');

new Chart(ctx, 
{
    type: 'line',
    data: 
    {
        labels: temperature_mounths,
        datasets: 
        [
            {
                data: temperature_values,
                borderWidth: 1
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
                borderWidth: 1
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
                borderWidth: 1
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