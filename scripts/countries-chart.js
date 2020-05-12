function createCountryChart(){

    hideLoader();
    
    let box = document.getElementById("country-chart-box");
    box.innerHTML = ``;

    box.innerHTML = `<canvas id="country-chart" width="300" height="100"></canvas>`;

    let country_chart_html = document.getElementById('country-chart').getContext('2d');

    
    let countryChart = new Chart(country_chart_html, {
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