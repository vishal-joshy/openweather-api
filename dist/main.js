/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/display-controller.js":
/*!*******************************************!*\
  !*** ./src/modules/display-controller.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addListeners": () => (/* binding */ addListeners),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _weatherAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherAPI */ "./src/modules/weatherAPI.js");


const addListeners = function () {
	const submitBtn = document.querySelector('#city-form-submit');
	submitBtn.addEventListener('click', async (event) => {
		event.preventDefault();
		const cityName = document.querySelector('#city-name-input').value;
		const data = await _weatherAPI__WEBPACK_IMPORTED_MODULE_0__.default.getData(cityName);
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
		const degreeSymbol = String.fromCharCode(186);
		const tempDisplay = document.querySelector('#temp');
		tempDisplay.textContent = temperature.tempInCelsius.temp + degreeSymbol + 'C';
		const feelsLike = document.querySelector('#feels-like');
		feelsLike.textContent =
			`Feels-like : ${temperature.tempInCelsius.feelsLike}` + degreeSymbol + 'C';
	};
	const updateOtherInfo = function (otherData) {
		document.querySelector('#wind').textContent = `Wind : ${otherData.wind}MPH`;
		document.querySelector('#humidity').textContent = `Humidity : ${otherData.humidity}%`;
	};

	return { addToDisplay };
})();


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayCard);


/***/ }),

/***/ "./src/modules/weatherAPI.js":
/*!***********************************!*\
  !*** ./src/modules/weatherAPI.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const weatherApi = (function () {
	const createUrl = function (cityName) {
		const key = '65b47399dd0bbb6cb9764f0fede8377d';
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`;
		return url;
	};

	const getData = async function (cityName) {
		const url = createUrl(cityName);
		try {
			const response = await fetch(url, {
				mode: 'cors',
			});
			const data = await response.json();
			console.log(data);
			const weatherData = WeatherFactory(data);
			return weatherData;
		} catch (err) {
			console.log(err);
		}
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherApi);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_display_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/display-controller */ "./src/modules/display-controller.js");
/* harmony import */ var _modules_weatherAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/weatherAPI */ "./src/modules/weatherAPI.js");




(function () {
	(0,_modules_display_controller__WEBPACK_IMPORTED_MODULE_0__.addListeners)();
	const setDefault = async function (cityName) {
		const data = await _modules_weatherAPI__WEBPACK_IMPORTED_MODULE_1__.default.getData(cityName);
		_modules_display_controller__WEBPACK_IMPORTED_MODULE_0__.default.addToDisplay(data);
	};
	setDefault('Kochi');
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHdEQUFrQjtBQUN2QztBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIscUJBQXFCO0FBQ2pEO0FBQ0EsK0JBQStCLGdDQUFnQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixvQ0FBb0M7QUFDdkQ7QUFDQTtBQUNBLDBEQUEwRCxlQUFlO0FBQ3pFLGtFQUFrRSxtQkFBbUI7QUFDckY7O0FBRUEsVUFBVTtBQUNWLENBQUM7O0FBRXVCO0FBQ3hCLGlFQUFlLFdBQVcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDMUMzQjtBQUNBO0FBQ0E7QUFDQSxtRUFBbUUsU0FBUyxTQUFTLElBQUk7QUFDekY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBLFVBQVU7QUFDVixDQUFDOztBQUVELGlFQUFlLFVBQVUsRUFBQzs7Ozs7OztVQzVEMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNONEQ7QUFDTDtBQUNUOztBQUU5QztBQUNBLENBQUMseUVBQVk7QUFDYjtBQUNBLHFCQUFxQixnRUFBa0I7QUFDdkMsRUFBRSw2RUFBd0I7QUFDMUI7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2Rpc3BsYXktY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3dlYXRoZXJBUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2VhdGhlckFwaSBmcm9tICcuL3dlYXRoZXJBUEknO1xuXG5jb25zdCBhZGRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG5cdGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaXR5LWZvcm0tc3VibWl0Jyk7XG5cdHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChldmVudCkgPT4ge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0Y29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2l0eS1uYW1lLWlucHV0JykudmFsdWU7XG5cdFx0Y29uc3QgZGF0YSA9IGF3YWl0IHdlYXRoZXJBcGkuZ2V0RGF0YShjaXR5TmFtZSk7XG5cdFx0Y29uc29sZS5sb2coZGF0YSk7XG5cdFx0ZGlzcGxheUNhcmQuYWRkVG9EaXNwbGF5KGRhdGEpO1xuXHR9KTtcbn07XG5cbmNvbnN0IGRpc3BsYXlDYXJkID0gKGZ1bmN0aW9uICgpIHtcblx0Y29uc3QgYWRkVG9EaXNwbGF5ID0gZnVuY3Rpb24gKGRhdGEpIHtcblx0XHR1cGRhdGVHZW5lcmFsSW5mbyhkYXRhLmdlbmVyYWxJbmZvKTtcblx0XHR1cGRhdGVUZW1wZXJhdHVyZShkYXRhLnRlbXBlcmF0dXJlKTtcblx0XHR1cGRhdGVPdGhlckluZm8oZGF0YS5vdGhlckRhdGEpO1xuXHR9O1xuXHRjb25zdCB1cGRhdGVHZW5lcmFsSW5mbyA9IGZ1bmN0aW9uIChnZW5lcmFsSW5mbykge1xuXHRcdGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvY2F0aW9uLWRpc3BsYXknKTtcblx0XHRsb2NhdGlvbi50ZXh0Q29udGVudCA9IGAke2dlbmVyYWxJbmZvLmNpdHlOYW1lfWA7XG5cdFx0Y29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2VuZXJhbC13ZWF0aGVyJyk7XG5cdFx0ZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBgJHtnZW5lcmFsSW5mby53ZWF0aGVyLmRlc2NyaXB0aW9ufWA7XG5cdH07XG5cdGNvbnN0IHVwZGF0ZVRlbXBlcmF0dXJlID0gZnVuY3Rpb24gKHRlbXBlcmF0dXJlKSB7XG5cdFx0Y29uc3QgZGVncmVlU3ltYm9sID0gU3RyaW5nLmZyb21DaGFyQ29kZSgxODYpO1xuXHRcdGNvbnN0IHRlbXBEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbXAnKTtcblx0XHR0ZW1wRGlzcGxheS50ZXh0Q29udGVudCA9IHRlbXBlcmF0dXJlLnRlbXBJbkNlbHNpdXMudGVtcCArIGRlZ3JlZVN5bWJvbCArICdDJztcblx0XHRjb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmVlbHMtbGlrZScpO1xuXHRcdGZlZWxzTGlrZS50ZXh0Q29udGVudCA9XG5cdFx0XHRgRmVlbHMtbGlrZSA6ICR7dGVtcGVyYXR1cmUudGVtcEluQ2Vsc2l1cy5mZWVsc0xpa2V9YCArIGRlZ3JlZVN5bWJvbCArICdDJztcblx0fTtcblx0Y29uc3QgdXBkYXRlT3RoZXJJbmZvID0gZnVuY3Rpb24gKG90aGVyRGF0YSkge1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3aW5kJykudGV4dENvbnRlbnQgPSBgV2luZCA6ICR7b3RoZXJEYXRhLndpbmR9TVBIYDtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaHVtaWRpdHknKS50ZXh0Q29udGVudCA9IGBIdW1pZGl0eSA6ICR7b3RoZXJEYXRhLmh1bWlkaXR5fSVgO1xuXHR9O1xuXG5cdHJldHVybiB7IGFkZFRvRGlzcGxheSB9O1xufSkoKTtcblxuZXhwb3J0IHsgYWRkTGlzdGVuZXJzIH07XG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5Q2FyZDtcbiIsImNvbnN0IHdlYXRoZXJBcGkgPSAoZnVuY3Rpb24gKCkge1xuXHRjb25zdCBjcmVhdGVVcmwgPSBmdW5jdGlvbiAoY2l0eU5hbWUpIHtcblx0XHRjb25zdCBrZXkgPSAnNjViNDczOTlkZDBiYmI2Y2I5NzY0ZjBmZWRlODM3N2QnO1xuXHRcdGNvbnN0IHVybCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eU5hbWV9JmFwcGlkPSR7a2V5fWA7XG5cdFx0cmV0dXJuIHVybDtcblx0fTtcblxuXHRjb25zdCBnZXREYXRhID0gYXN5bmMgZnVuY3Rpb24gKGNpdHlOYW1lKSB7XG5cdFx0Y29uc3QgdXJsID0gY3JlYXRlVXJsKGNpdHlOYW1lKTtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcblx0XHRcdFx0bW9kZTogJ2NvcnMnLFxuXHRcdFx0fSk7XG5cdFx0XHRjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXHRcdFx0Y29uc29sZS5sb2coZGF0YSk7XG5cdFx0XHRjb25zdCB3ZWF0aGVyRGF0YSA9IFdlYXRoZXJGYWN0b3J5KGRhdGEpO1xuXHRcdFx0cmV0dXJuIHdlYXRoZXJEYXRhO1xuXHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0Y29uc29sZS5sb2coZXJyKTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgV2VhdGhlckZhY3RvcnkgPSBmdW5jdGlvbiAoZGF0YSkge1xuXHRcdGNvbnN0IGNvbnZlcnRUb0NlbHNpdXMgPSBmdW5jdGlvbiAodmFsdWVJbktlbHZpbikge1xuXHRcdFx0Y29uc3QgdmFsdWVJbkNlbHNpdXMgPSB2YWx1ZUluS2VsdmluIC0gMjczLjE1O1xuXHRcdFx0cmV0dXJuIHZhbHVlSW5DZWxzaXVzLnRvRml4ZWQoMik7XG5cdFx0fTtcblx0XHRjb25zdCBjb252ZXJ0VG9GYWhyZW5oZWl0ID0gZnVuY3Rpb24gKHZhbHVlSW5LZWx2aW4pIHtcblx0XHRcdGNvbnN0IHZhbHVlSW5GYWhyZW5oZWl0ID0gY29udmVydFRvQ2Vsc2l1cyh2YWx1ZUluS2VsdmluKSAqIDEuOCArIDMyO1xuXHRcdFx0cmV0dXJuIHZhbHVlSW5GYWhyZW5oZWl0LnRvRml4ZWQoMik7XG5cdFx0fTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Z2VuZXJhbEluZm86IHtcblx0XHRcdFx0Y2l0eU5hbWU6IGRhdGEubmFtZSxcblx0XHRcdFx0d2VhdGhlcjoge1xuXHRcdFx0XHRcdG1haW46IGRhdGEud2VhdGhlclswXS5tYWluLFxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOiBkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb24sXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXG5cdFx0XHR0ZW1wZXJhdHVyZToge1xuXHRcdFx0XHR0ZW1wSW5DZWxzaXVzOiB7XG5cdFx0XHRcdFx0dGVtcDogY29udmVydFRvQ2Vsc2l1cyhwYXJzZUludChkYXRhLm1haW4udGVtcCkpLFxuXHRcdFx0XHRcdGZlZWxzTGlrZTogY29udmVydFRvQ2Vsc2l1cyhwYXJzZUludChkYXRhLm1haW4uZmVlbHNfbGlrZSkpLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR0ZW1wSW5GYWhyZW5oZWl0OiB7XG5cdFx0XHRcdFx0dGVtcDogY29udmVydFRvRmFocmVuaGVpdChwYXJzZUludChkYXRhLm1haW4udGVtcCkpLFxuXHRcdFx0XHRcdGZlZWxzTGlrZTogY29udmVydFRvRmFocmVuaGVpdChwYXJzZUludChkYXRhLm1haW4uZmVlbHNfbGlrZSkpLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdG90aGVyRGF0YToge1xuXHRcdFx0XHR3aW5kOiBkYXRhLndpbmQuc3BlZWQsXG5cdFx0XHRcdGh1bWlkaXR5OiBkYXRhLm1haW4uaHVtaWRpdHksXG5cdFx0XHR9LFxuXHRcdH07XG5cdH07XG5cblx0cmV0dXJuIHsgZ2V0RGF0YSB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgd2VhdGhlckFwaTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgYWRkTGlzdGVuZXJzIH0gZnJvbSAnLi9tb2R1bGVzL2Rpc3BsYXktY29udHJvbGxlcic7XG5pbXBvcnQgZGlzcGxheUNhcmQgZnJvbSAnLi9tb2R1bGVzL2Rpc3BsYXktY29udHJvbGxlcic7XG5pbXBvcnQgd2VhdGhlckFwaSBmcm9tICcuL21vZHVsZXMvd2VhdGhlckFQSSc7XG5cbihmdW5jdGlvbiAoKSB7XG5cdGFkZExpc3RlbmVycygpO1xuXHRjb25zdCBzZXREZWZhdWx0ID0gYXN5bmMgZnVuY3Rpb24gKGNpdHlOYW1lKSB7XG5cdFx0Y29uc3QgZGF0YSA9IGF3YWl0IHdlYXRoZXJBcGkuZ2V0RGF0YShjaXR5TmFtZSk7XG5cdFx0ZGlzcGxheUNhcmQuYWRkVG9EaXNwbGF5KGRhdGEpO1xuXHR9O1xuXHRzZXREZWZhdWx0KCdLb2NoaScpO1xufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==