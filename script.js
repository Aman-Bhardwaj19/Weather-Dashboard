const city = 'london'
async function updateweather(city) {
	const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=london';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0747c72760msh15ffafc6044776bp189be8jsn0faecda940ba',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	const data = result.json();
	console.log(data);
} catch (error) {
	console.log("error is coming");
}
}

updateweather(city);