async function updateWeather(city) {
    const apiKey = '76e13e9c160009488ba27544b3865bdb';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        console.log(data);

        // Update the heading with the city name
        document.querySelector('h1').innerText = `Weather For ${city}`;

        // Update the HTML elements with the data
        document.getElementById('temp').innerText = data.main.temp;
        document.getElementById('min_temp').innerText = data.main.temp_min;
        document.getElementById('max_temp').innerText = data.main.temp_max;
        document.getElementById('humidity').innerText = data.main.humidity;
        document.getElementById('feels_like').innerText = data.main.feels_like;
        document.getElementById('wind_speed').innerText = data.wind.speed;
        document.getElementById('wind_degree').innerText = data.wind.deg;
        document.getElementById('wind_degree_2').innerText = data.wind.deg;
        document.getElementById('sunrise').innerText = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
        document.getElementById('sunset').innerText = new Date(data.sys.sunset * 1000).toLocaleTimeString();
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const searchInput = document.querySelector('input[type="search"]');
        const city = searchInput.value;
        updateWeather(city);
    });

    // Initial call to display weather for a default city
    updateWeather('Ghaziabad');
});
