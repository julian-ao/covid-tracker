const country_name_box = document.getElementById("country-name-box");
const populationHTML = document.getElementById("population");
const percentHTML = document.getElementById("percent");
const country_stats_top_stats = document.getElementById("country-stats-top-stats");
const country_stats_top = document.getElementById("country-stats-top");

const inp_box = document.getElementById("inp-box");

const countryLoader = document.getElementById("countryLoader");

hideLoader();

let dates;
let confirmedCases = [];
let recoveredCases = [];
let deathCases = [];

let maxCases = 0;

search_results_box.width = "500px";

async function updateCountry(countryNumber){
    country_stats_top.style.display = "block";
    inp_box.style.width = "225px";
    search_results_box.width = "225px";
    inp_box.style.left = "auto";
    inp_box.style.marginLeft = "0";
    inp_box.style.marginTop = "0";
    
    showLoader();

    countries_text_inp.value = ``;
    allSearchResults();
    search_results_box.style.height = "350px";

    let alphaCode = countries[countryNumber].alpha2Code;

    country_name_box.innerHTML = `
        <img src="${countries[countryNumber].flag}">
        <p>${countries[countryNumber].name}</p>
    `;

    let url = "https://restcountries.eu/rest/v2/all?fields=name;population;alpha2Code";
    let s = await fetch(url);
    let data = await s.json();

    let countryPopulationNumber;

    for(let i = 0; i < data.length; i++){
        if(alphaCode == data[i].alpha2Code){
            countryPopulationNumber = i;
        }
    }

    let population = data[countryPopulationNumber].population;

    populationHTML.innerHTML = `
        <p id="text">Population:</p>
        <p id="number">${numberWithSpaces(population)}</p>
    `;


    url = "https://api.thevirustracker.com/free-api?countryTimeline=" + alphaCode;
    s = await fetch(url);
    data = await s.json();

    console.log(url);

    let lastDate = Object.keys(data.timelineitems[0])[Object.keys(data.timelineitems[0]).length - 2];

    let cases = Object.byString(data.timelineitems[0], lastDate + '.total_cases');
    let recoveries = Object.byString(data.timelineitems[0], lastDate + '.total_recoveries');
    let deaths = Object.byString(data.timelineitems[0], lastDate + '.total_deaths');


    country_stats_top_stats.innerHTML = `
        <div>
            <p id="number">${numberWithSpaces(cases)}</p>
            <p id="text">infected</p>
        </div>
        <div>
            <p id="number">${numberWithSpaces(recoveries)}</p>
            <p id="text">recovered</p>
        </div>
        <div>
            <p id="number">${numberWithSpaces(deaths)}</p>
            <p id="text">deaths</p>
        </div>
    `;

    let percent = (cases * 100) / population;

    percentHTML.innerHTML = `
        <p id="number">${percent.toFixed(3)}%</p>
        <p id="text">infected</p>
    `;

    confirmedCases = [];
    recoveredCases = [];
    deathCases = [];
    dates = [];

    let allDates = Object.keys(data.timelineitems[0]);

    //Object.byString(data.timelineitems[0], Object.keys(data.timelineitems[0])[Object.keys(data.timelineitems[0]).length - 2]  + '.total_cases')

    for(let i = 0; i < allDates.length - 1; i++){
        confirmedCases.push(Object.byString(data.timelineitems[0], allDates[i] + '.total_cases'));
        recoveredCases.push(Object.byString(data.timelineitems[0], allDates[i] + '.total_recoveries'));
        deathCases.push(Object.byString(data.timelineitems[0], allDates[i] + '.total_deaths'));

        if(Object.byString(data.timelineitems[0], allDates[i] + '.total_cases') > maxCases){
            maxCases = Object.byString(data.timelineitems[0], allDates[i] + '.total_cases');
        }
    }

    dates = Object.keys(data.timelineitems[0]);
    dates.pop();

    createCountryChart();

}

Object.byString = function(o, s) {
    s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    s = s.replace(/^\./, '');           // strip a leading dot
    var a = s.split('.');
    for (var i = 0, n = a.length; i < n; ++i) {
        var k = a[i];
        if (k in o) {
            o = o[k];
        } else {
            return;
        }
    }
    return o;
}

function numberWithSpaces(x) { // Adding spaces in large numbers
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function showLoader(){
    countryLoader.style.display = "block";
}

function hideLoader(){
    countryLoader.style.display = "none";
}