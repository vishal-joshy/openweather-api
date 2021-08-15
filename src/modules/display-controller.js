import weatherApi from './weatherAPI';

const addListeners = function () {
	const submitBtn = document.querySelector('#city-form-submit');
	submitBtn.addEventListener('click', async (event) => {
		event.preventDefault();
		const cityName = document.querySelector('#city-name-input').value;
		const data = await weatherApi.getData(cityName);
		console.log(data);
		displayCard.addToDisplay(data);
	});
};

const displayCard = (function () {
	const addToDisplay = function (data) {
		updateGeneralInfo(data.generalInfo);
		updateTemperature(data.temperature);
		updateOtherInfo(data.otherData);
	};
	const updateGeneralInfo = function (generalInfo) {
		const location = document.querySelector('#location-display');
		location.textContent = `${generalInfo.cityName}`;
		const description = document.querySelector('#general-weather');
		description.textContent = `${generalInfo.weather.description}`;
	};
	const updateTemperature = function (temperature) {
		const tempDisplay = document.querySelector('#temp');
		tempDisplay.textContent = temperature.tempInCelsius.temp;
		const feelsLike = document.querySelector('#feels-like');
		feelsLike.textContent = temperature.tempInCelsius.feelsLike;
	};
	const updateOtherInfo = function (otherData) {
		document.querySelector('#wind').textContent = otherData.wind;
		document.querySelector('#humidity').textContent = otherData.humidity;
	};

	return { addToDisplay };
})();

export { addListeners };
export default displayCard;
