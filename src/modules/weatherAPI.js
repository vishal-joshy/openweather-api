const weatherApi = (function () {
	const createUrl = function (cityName) {
		const key = '65b47399dd0bbb6cb9764f0fede8377d';
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`;
		return url;
	};

	const getData = async function (cityName) {
		const url = createUrl(cityName);
		const response = await fetch(url, {
			mode: 'cors',
		});
		const data = await response.json();
		console.log(data);
		const weatherData = WeatherFactory(data);
		return weatherData;
	};

	const WeatherFactory = function (data) {
		const convertToCelsius = function (valueInKelvin) {
			const valueInCelsius = valueInKelvin - 273.15;
			return valueInCelsius.toFixed(2);
		};
		const convertToFahrenheit = function (valueInKelvin) {
			const valueInFahrenheit = convertToCelsius(valueInKelvin) * 1.8 + 32;
			return valueInFahrenheit.toFixed(2);
		};
		return {
			generalInfo: {
				cityName: data.name,
				weather: {
					main: data.weather[0].main,
					description: data.weather[0].description,
				},
			},

			temperature: {
				tempInCelsius: {
					temp: convertToCelsius(parseInt(data.main.temp)),
					feelsLike: convertToCelsius(parseInt(data.main.feels_like)),
				},
				tempInFahrenheit: {
					temp: convertToFahrenheit(parseInt(data.main.temp)),
					feelsLike: convertToFahrenheit(parseInt(data.main.feels_like)),
				},
			},
			otherData: {
				wind: data.wind.speed,
				humidity: data.main.humidity,
			},
		};
	};

	return { getData };
})();

export default weatherApi;
