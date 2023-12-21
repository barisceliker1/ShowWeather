// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code
var url = "https://api.openweathermap.org/data/2.5/weather?lat=55.79&lon=49.10&units=metric&appid=12fb8675605df51df38777a8f36f4759"
$.get(url, function (data, status) {
    console.log(data)
    // взял город API's
    let city = data.name;
    fullcity = city.slice(0, -1);

    //В это поле div был помещен запрос с помощью JAVASCRIPT JQUERY.
    document.getElementById("WeatherScreen")
        .innerHTML += `
        <h1>${fullcity}</h1>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png"/>
        <p>погода : ${data.main.temp}°C</p>
        <p>Описание : ${data.weather[0].description}</p>
        <p>Скорость ветрa : ${data.wind.speed}</p>
        `
});
