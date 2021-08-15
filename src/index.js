import { addListeners } from './modules/display-controller';
import displayCard from './modules/display-controller';
import weatherApi from './modules/weatherAPI';

(function () {
	addListeners();
	const setDefault = async function (cityName) {
		const data = await weatherApi.getData(cityName);
		displayCard.addToDisplay(data);
	};
	setDefault('Kochi');
})();
