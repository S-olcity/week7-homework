function weatherApp(response){
    let temperatureElement=document.querySelector("#weather-number-js");
    temperatureElement.innerHTML=response.data.temperature.day;
    let cityElement=documnet.querySelector("#city-js");
    let descriptionElement=document.querySelector("description-js");
    let humidityElement=document.querySelector("humidity-js");
    let windspeedElement=document.querySelector("wind-js");
    let timeElement=document.querySelector("time-js");
    let date=new Date(response.data.time*1000);
    let iconElement=document.querySelector("weather-icon-js");

    cityElement.innerHTML=response.data.city;
    descriptionElement.innerHTML=response.data.condition.description;
    humidityElement.innerHTML=response.data.temperature.humidity;
    windspeedElement.innerHTML=response.data.wind;
    timeElement.innerHTML=formatDate(date);
    temperatureElement.innerHTML=Maths.round(temperature);
    iconElement.innerHTML=`<img src="${response.data.condition.icon_url}" class="weather-app-icon" />`;

    
}
function formatDate(date){
    let minutes=date.getMinutes();
    let hours=date.getHours();
    let days=[
        "Sunday","Monday","Tuseday","Wednesday","Thursday","Friday","Saturday"
    ];
    let day=days[date.getDay()];
    if (minutes<10){
        minutes='0${minutes}';
    }
    return'${day} ${hours} :${minutes}';

}
function enterCity(city){
    let apiKEY=" 6fcaa6357tb392o7aa1994c5db0f0404";
    let apiUrl="https://api.shecodes.io/weather/v1/current?query={city}&key={apiKey}&units=metric";
    axios.get(apiUrl).then(weatherApp);

}
function searchResult(event){
    event.preventDefault();
    let searchInput=document.querySelector("enter-city");
    enterCity(searchResult.value)
}
let searchElement=document.querySelector("#form-js");
searchElement.addEventListener("submit" ,searchResult)