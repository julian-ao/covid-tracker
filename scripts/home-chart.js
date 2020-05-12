let home_chart_html = document.getElementById("home-chart").getContext('2d');



async function createMainChart(){
    let url = `https://api.thevirustracker.com/free-api?global=stats`;
    let s = await fetch(url);
    let data = await s.json();

    console.log(url);

    let results = data.results[0];

    let homeChart = new Chart(home_chart_html, {
        type: 'bar',
        data: {
            labels: ['total cases', 'total recovered', 'total deaths', 'cases today', 'active cases', 'seroius cases'],
            datasets: [{
                data: [results.total_cases, results.total_recovered, results.total_deaths, results.total_new_cases_today, results.total_active_cases, results.total_serious_cases],
                backgroundColor: ['rgba(220, 94, 94, .75)', 'rgba(95, 212, 126, .75)', 'rgba(115, 176, 230, .75)', 'rgba(220, 94, 94, .75)', 'rgba(95, 212, 126, .75)', 'rgba(115, 176, 230, .75)'],
                borderWidth: 1,
            }]
        }
    });
}

/*
function createMainChart(){
    console.log(mostInfectedCountries);

    for(let i = 0; i < mostInfectedCountries.length; i++){

    }
}

async function addCountry(countryCode){
    let url = `https://api.thevirustracker.com/free-api?countryTimeline=` + countryCode;
    let s = await fetch(url);
    let data = await s.json();

    chartData.push(
        CountryCode{

        }
    )
}

*/