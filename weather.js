var sky = '';

function weather(){
    var weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m`;

    fetch(weatherUrl)
    .then (res => res.json())
    .then (data => weatherDisplay(data));
}

function weatherDisplay(weather){
    var wc = weather.current.weather_code;

    var button = document.getElementById("moreButton");
    button.remove();

    document.getElementById('countryName').classList.add('weatherGrid');

    document.getElementById('countryTitle').classList.add('titleGrid');

    document.getElementById('details').classList.add('detailsGrid');

    document.getElementById('countryApi').classList.add('countryApiWthr');

    var oldDiv = document.getElementById('countryName');

    if (wc==0){
        sky = 'Clear Sky';
    }
    else if (wc==1){
        sky = 'Mostly Clear';
    }
    else if (wc==2){
        sky = 'Partly Cloudy';
    }
    else if (wc==3){
        sky = 'Overcast';
    }
    else if (wc==45 || wc==48){
        sky = 'Fog';
    }
    else if (wc==51 || wc==53 || wc==55){
        sky = 'Drizzle';
    }
    else if (wc==61){
        sky = 'Light Rain';
    }
    else if (wc==63){
        sky = 'Moderate Rain';
    }
    else if (wc==65){
        sky = 'Heavy Rain';
    }
    else if (wc==66 || wc==67){
        sky = 'Freezing Rain';
    }
    else if (wc==56 || wc==57){
        sky = 'Freezing Drizzle';
    }
    else if (wc==71 || wc==73 || wc==75){
        sky = 'Snowfall';
    }
    else if (wc==85 || wc==86){
        sky = 'Snow Shower';
    }
    else if (wc==95 || wc==96 || wc==99){
        sky = 'Thunderstorm';
    }

    var newWthr = document.createElement('div');
    newWthr.innerHTML = `<div class="weatherApi">
                        <h1 id="weatherTitle">Weather</h1>
                        <div class="wthrDetails" id="wthrDetails">
                            <div class="currstat">
                                <h1 id="weatherTemp">${weather.current.temperature_2m}°C</h1>
                                <h2>${sky}</h2>
                            </div>
                            <p>Feels like: ${weather.current.apparent_temperature}°C</p>
                            <p>Humidity: ${weather.current.relative_humidity_2m}%</p>
                            <p>Wind Speed: ${weather.current.wind_speed_10m}km/h</p>
                        </div>
                        </div>
                        `;
    newWthr.classList.add("weatherDiv");
    newWthr.id = 'weatherDiv'

    oldDiv.appendChild(newWthr);
}