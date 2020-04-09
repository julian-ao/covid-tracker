// https://api.covid19api.com/summary

const main_stats_item_top_1 = document.getElementById("main-stats-item-top-1");
const main_stats_items_1 = document.getElementById("main-stats-items-1");

const main_stats_item_top_2 = document.getElementById("main-stats-item-top-2");
const main_stats_items_2 = document.getElementById("main-stats-items-2");

const main_stats_item_top_3 = document.getElementById("main-stats-item-top-3");
const main_stats_items_3 = document.getElementById("main-stats-items-3");

let numberOfCountries = 15;

let mostInfectedCountries = [];

async function loadMainStats(){
    let url = `https://api.covid19api.com/summary`;
    let s = await fetch(url);
    let data = await s.json();

    console.log(url);

    // CONFIRMED CASES //
    let totalConfirmed = data.Global.TotalConfirmed; // Updates total confirmed cases
    main_stats_item_top_1.innerHTML = `
    <span class="number">
        ${numberWithSpaces(totalConfirmed)}
    </span>
    <span class="text">
        infected
    </span>
    `;

    data.Countries.sort(sortByConfirmed); // Sorts all countries based on confirmed cases
    for(let i = 0; i < numberOfCountries; i++){ // Updates top 10 countries with the most confirmed cases

        let country = data.Countries[i]

        mostInfectedCountries.push(country.Country);
        main_stats_items_1.innerHTML += `
        <div class="main-stats-item">
            <span class="n">${i + 1}.</span>
            <img src="${findFlag(country.CountryCode)}">
            <span class="country">
                ${country.CountryCode}
            </span>
            <span class="number">
                ${numberWithSpaces(country.TotalConfirmed)}
            </span>
        </div>
        `;
    }

    // RECOVERED //
    let totalRecovered = data.Global.TotalRecovered; // Updates total recovered
    main_stats_item_top_2.innerHTML = `
    <span class="number">
        ${numberWithSpaces(totalRecovered)}
    </span>
    <span class="text">
        recovered
    </span>
    `;

    data.Countries.sort(sortByRecovered); // Sorts all countries based on recovered
    for(let i = 0; i < numberOfCountries; i++){ // Updates top 10 countries with the most recovered
        let country = data.Countries[i]
        main_stats_items_2.innerHTML += `
        <div class="main-stats-item">
            <span class="n">${i + 1}.</span>
            <img src="${findFlag(country.CountryCode)}">
            <span class="country">
                ${country.CountryCode}
            </span>
            <span class="number">
                ${numberWithSpaces(country.TotalRecovered)}
            </span>
        </div>
        `;
    }

    // DEATHS //
    let totalDeaths = data.Global.TotalDeaths; // Updates total deaths
    main_stats_item_top_3.innerHTML = `
    <span class="number">
        ${numberWithSpaces(totalDeaths)}
    </span>
    <span class="text">
        deaths  
    </span>
    `;

    data.Countries.sort(sortByDeaths); // Sorts all countries based on deaths
    for(let i = 0; i < numberOfCountries; i++){ // Updates top 10 countries with the most deaths
        let country = data.Countries[i]
        main_stats_items_3.innerHTML += `
        <div class="main-stats-item">
            <span class="n">${i + 1}.</span>
            <img src="${findFlag(country.CountryCode)}">
            <span class="country">
                ${country.CountryCode}
            </span>
            <span class="number">
                ${numberWithSpaces(country.TotalDeaths)}
            </span>
        </div>
        `;
    }

    createMainChart();
}

function findFlag(code){
    for(let i = 0; i < countries.length; i++){
        if(code == countries[i].alpha2Code){
            return countries[i].flag;
        }
    }
}

function numberWithSpaces(x) { // Adding spaces in large numbers
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function sortByConfirmed(a, b){
    return b.TotalConfirmed - a.TotalConfirmed;
}

function sortByRecovered(a, b){
    return b.TotalRecovered - a.TotalRecovered;
}

function sortByDeaths(a, b){
    return b.TotalDeaths - a.TotalDeaths;
}

window.onload = loadMainStats;