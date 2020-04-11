const home_chart = document.getElementById("home-chart");

let homeChart = new Chart(home_chart, {
    type: 'line',
    data: {
        labels: ["0", "1", "2", "3", "4", "5"],
        datasets: [{
            label: 'infected',
            data: [0],
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

let chartData = [];

function createMainChart(){
    console.log(mostInfectedCountries);

    for(let i = 0; i < mostInfectedCountries.length; i++){

    }
}

async function addCountry(countryCode){
    let url = `https://api.thevirustracker.com/free-api?countryTimeline=` + countryCode;
    let s = await fetch(url);
    let data = await s.json();

    /*chartData.push(
        CountryCode{

        }
    )*/
}