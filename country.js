var first = true;

var lat = '';
var long = '';

function connect(){

    var name = document.getElementById("introCountry").value;
    document.getElementById("introCountry").value = "";

    var url = `https://restcountries.com/v3.1/name/${name}?fullText=true`;

    fetch(url)
    .then (res => res.json())
    .then (data => display(data))
    .catch(error());
    
}

function display(info){

    lat = info[0].latlng[0];
    long = info[0].latlng[1];

    var oldContent = document.getElementById("intro");

    if (document.querySelector('#countryName')){
        var oldCountry = document.getElementById("countryName");
        oldCountry.remove();
    }

    if (first == true){
        first = false;
        var css2 = document.createElement('link');
        css2.rel = 'stylesheet';
        css2.href = 'style2.css';

        //head[0] refers to the stylesheet style.css
        document.getElementsByTagName('head')[0].replaceWith(css2);
    }

    var newDiv = document.createElement('div');
    newDiv.innerHTML = `<div class="countryApi" id="countryApi">
                        <h1 id="countryTitle">${info[0].name.common}</h1>
                        <div class="details" id="details">
                            <img src="${info[0].flags.png}" alt="">
                            <p>Capital: ${info[0].capital}</p>
                            <p>Population: ${info[0].population}</p>
                            <button id="moreButton" onclick="weather()">More Details</button>
                        </div>
                        </div>
                        `;
    newDiv.classList.add("countryName");
    newDiv.id = 'countryName'

    oldContent.appendChild(newDiv);
    
    var error = document.getElementById("introCountry");
    if (error.getAttribute('placeholder')=='Enter valid country'){
        error.setAttribute('placeholder', 'Search for a country');
    }
}

function error(){
    var error = document.getElementById("introCountry");
    error.setAttribute('placeholder', 'Enter valid country');
}



