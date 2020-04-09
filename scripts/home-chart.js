const home_chart = document.getElementById("home-chart");



function createMainChart(){
    console.log(mostInfectedCountries);

    countryTimeline();

}

async function countryTimeline(){
    let url = `https://api.covid19api.com/country/norway/status/confirmed/live`;
    let s = await fetch(url);
    let data = await s.json();
    console.log("NORWAY: " + url)

    let dates = [];

    let newDailyCases = [];

    for(let i = 0; i < data.length; i++){
        dates.push(data[i].Date.slice(5, 10));
        newDailyCases.push(data[i].Cases);
    }

    console.log(dates);
    console.log(newDailyCases);

    let myChart = new Chart(home_chart, {
        type: 'line',
        data: {
            labels: dates,
            datasets: [{
                label: 'infected',
                data: newDailyCases,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            }]
        }
    });
}