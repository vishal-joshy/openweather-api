import { addListeners, weatherApi } from './modules/displaycontroller';

(function () {
	weatherApi.getData('Kochi');
	addListeners();
})();
