const addListeners = function () {
	const submitBtn = document.querySelector('#city-form-submit');
	submitBtn.addEventListener('click', (event) => {
		event.preventDefault();
		const cityName = document.querySelector('#city-name-input').value;
		weatherApi.getData(cityName);
	});
};

const weatherApi = (function () {
	const createUrl = function (cityName) {
		const key = '65b47399dd0bbb6cb9764f0fede8377d';
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`;
		console.log(url);
		return url;
	};
	const getData = async function (cityName) {
		const url = createUrl(cityName);
		const response = await fetch(url, {
			mode: 'cors',
		});
		const data = await response.json();
		processData(data);
	};
	const processData = function (data) {
		const weatherData = Weather(data);
		console.log(weatherData);
	};
	const Weather = function (data) {
		const convertToCelsius = function (valueInKelvin) {
			const valueInCelsius = valueInKelvin - 273.15;
			return valueInCelsius.toFixed(2);
		};
		const convertToFahrenheit = function (valueInKelvin) {
			const valueInFahrenheit = convertToCelsius(valueInKelvin) * 1.8 + 32;
			return valueInFahrenheit.toFixed(2);
		};
		return {
			cityName: data.name,
			weather: {
				main: data.weather[0].main,
				description: data.weather[0].description,
			},
			tempInCelsius: {
				temp: convertToCelsius(parseInt(data.main.temp)),
				feelsLike: convertToCelsius(parseInt(data.main.feels_like)),
			},
			tempInFahrenheit: {
				temp: convertToFahrenheit(parseInt(data.main.temp)),
				feelsLike: convertToFahrenheit(data.main.feels_like),
			},
		};
	};

	return { getData };
})();

export { addListeners, weatherApi };
