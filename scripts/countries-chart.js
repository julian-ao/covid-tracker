var ctx = document.getElementById('country-chart').getContext('2d');

function createCountryChart(){
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dates,
            datasets: [{
                label: 'total infected',
                data: confirmedCases,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                fill: false
            },
            {
                label: 'total recovered',
                data: recoveredCases,
                backgroundColor: 'rgba(95, 212, 126, 0.2)',
                borderColor: 'rgba(95, 212, 126, 1)',
                borderWidth: 1,
                fill: false
            },
            {
                label: 'total deaths',
                data: deathCases,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(115, 176, 230, 1)',
                borderWidth: 1,
                fill: false
            }]
        }
    });
}