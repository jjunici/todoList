
const weather = document.querySelector(".js-weather");

const API_KEY = "75da679bf203540d9cc98c03f827ce65";
const COORDS = 'coords';

function getWeather(lat,lng){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json()
    }).then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
    })
}

function saveCoords(coordObj){
    localStorage.setItem(COORDS,JSON.stringify(coordObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordObj = {
        latitude:latitude,
        longitude:longitude
    };
    saveCoords(coordObj);
    getWeather(latitude,longitude);
}
function handleGeoError(){
    console.log("Cant acess geo location");
}
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces,handleGeoError)
}
function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();

    } else{
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude,parseCoords.longitude);
    }
}
function init() {
    loadCoords();
}

init();
