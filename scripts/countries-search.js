const countries_text_inp = document.getElementById("countries-text-inp");
const search_results_box = document.getElementById("search-results-box");

window.onload = allSearchResults;

function allSearchResults(){
    search_results_box.innerHTML = ``;
    for(let i = 0; i < countries.length; i++){
        search_results_box.innerHTML += `
            <div class="search-result" onClick="updateCountry(${i})">
                <img src="${countries[i].flag}">
                <p>${countries[i].name}</p>
            </div>
        `;
    }
}

countries_text_inp.oninput = function(){

    let numberOfSearchresults = 0;

    search_results_box.innerHTML = ``;

    console.log(countries_text_inp.value);

    if(countries_text_inp.value == " "){
        allSearchResults();
    } else{
        for(let i = 0; i < countries.length; i++){
            for(let j = 0; j < countries[i].altSpellings.length; j++){
                if(countries[i].altSpellings[j].toUpperCase().search(countries_text_inp.value.toUpperCase()) >= 0 || countries[i].name.toUpperCase().search(countries_text_inp.value.toUpperCase()) >= 0){
                    numberOfSearchresults++;
                    search_results_box.innerHTML += `
                        <div class="search-result" onClick="updateCountry(${i})">
                            <img src="${countries[i].flag}">
                            <p>${countries[i].name}</p>
                        </div>
                    `;
                    break;
                }
            }
        }
    }

    if(numberOfSearchresults <= 9){
        search_results_box.style.height = "max-content";
    }
}