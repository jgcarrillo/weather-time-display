const date = new Date();
const monthContent = document.querySelector('.month');
const weatherContent = document.querySelector('.weather');
const iconContent = document.querySelector('.icon');

const key = `${API.weatherKey}`;
const lat = `${API.weatherLatitude}`;
const long = `${API.weatherLongitude}`;
const tempUnit = `${API.weatherUnit}`;
const icon = `${API.weatherIcon}`;
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`;

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const month = months[date.getMonth()];
const currentDay = date.getDate();

monthContent.textContent = `${month} ${currentDay}`;

const getWeather = async () => {
	const res = await fetch(url);
	const data = await res.json();

	// Conversion to grades
	const KELVIN = 273.15;
	const celsius = Math.floor(data.main.temp - KELVIN);

	const weather = {
		state: data.weather[0].description,
		temp: tempUnit == 'C' ? celsius + '°C' : (celsius * 9) / 5 + 32 + 'K',
		icon: data.weather[0].icon,
	};

	const $img = document.createElement('img');
	$img.setAttribute('src', `assets/icons/${icon}/${weather.icon}.png`);
	$img.setAttribute('alt', 'weather icon');

	iconContent.appendChild($img);
	weatherContent.textContent = `${weather.state} - ${weather.temp}`;
	console.log(data);
};

getWeather();
