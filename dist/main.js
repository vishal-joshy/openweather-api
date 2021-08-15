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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHdEQUFrQjtBQUN2QztBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIscUJBQXFCO0FBQ2pEO0FBQ0EsK0JBQStCLGdDQUFnQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDVixDQUFDOztBQUV1QjtBQUN4QixpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3hDM0I7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FLFNBQVMsU0FBUyxJQUFJO0FBQ3pGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBLFVBQVU7QUFDVixDQUFDOztBQUVELGlFQUFlLFVBQVUsRUFBQzs7Ozs7OztVQ3hEMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNONEQ7QUFDTDtBQUNUOztBQUU5QztBQUNBLENBQUMseUVBQVk7QUFDYjtBQUNBLHFCQUFxQixnRUFBa0I7QUFDdkMsRUFBRSw2RUFBd0I7QUFDMUI7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2Rpc3BsYXktY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3dlYXRoZXJBUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2VhdGhlckFwaSBmcm9tICcuL3dlYXRoZXJBUEknO1xuXG5jb25zdCBhZGRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG5cdGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaXR5LWZvcm0tc3VibWl0Jyk7XG5cdHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChldmVudCkgPT4ge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0Y29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2l0eS1uYW1lLWlucHV0JykudmFsdWU7XG5cdFx0Y29uc3QgZGF0YSA9IGF3YWl0IHdlYXRoZXJBcGkuZ2V0RGF0YShjaXR5TmFtZSk7XG5cdFx0Y29uc29sZS5sb2coZGF0YSk7XG5cdFx0ZGlzcGxheUNhcmQuYWRkVG9EaXNwbGF5KGRhdGEpO1xuXHR9KTtcbn07XG5cbmNvbnN0IGRpc3BsYXlDYXJkID0gKGZ1bmN0aW9uICgpIHtcblx0Y29uc3QgYWRkVG9EaXNwbGF5ID0gZnVuY3Rpb24gKGRhdGEpIHtcblx0XHR1cGRhdGVHZW5lcmFsSW5mbyhkYXRhLmdlbmVyYWxJbmZvKTtcblx0XHR1cGRhdGVUZW1wZXJhdHVyZShkYXRhLnRlbXBlcmF0dXJlKTtcblx0XHR1cGRhdGVPdGhlckluZm8oZGF0YS5vdGhlckRhdGEpO1xuXHR9O1xuXHRjb25zdCB1cGRhdGVHZW5lcmFsSW5mbyA9IGZ1bmN0aW9uIChnZW5lcmFsSW5mbykge1xuXHRcdGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvY2F0aW9uLWRpc3BsYXknKTtcblx0XHRsb2NhdGlvbi50ZXh0Q29udGVudCA9IGAke2dlbmVyYWxJbmZvLmNpdHlOYW1lfWA7XG5cdFx0Y29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2VuZXJhbC13ZWF0aGVyJyk7XG5cdFx0ZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBgJHtnZW5lcmFsSW5mby53ZWF0aGVyLmRlc2NyaXB0aW9ufWA7XG5cdH07XG5cdGNvbnN0IHVwZGF0ZVRlbXBlcmF0dXJlID0gZnVuY3Rpb24gKHRlbXBlcmF0dXJlKSB7XG5cdFx0Y29uc3QgdGVtcERpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVtcCcpO1xuXHRcdHRlbXBEaXNwbGF5LnRleHRDb250ZW50ID0gdGVtcGVyYXR1cmUudGVtcEluQ2Vsc2l1cy50ZW1wO1xuXHRcdGNvbnN0IGZlZWxzTGlrZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmZWVscy1saWtlJyk7XG5cdFx0ZmVlbHNMaWtlLnRleHRDb250ZW50ID0gdGVtcGVyYXR1cmUudGVtcEluQ2Vsc2l1cy5mZWVsc0xpa2U7XG5cdH07XG5cdGNvbnN0IHVwZGF0ZU90aGVySW5mbyA9IGZ1bmN0aW9uIChvdGhlckRhdGEpIHtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2luZCcpLnRleHRDb250ZW50ID0gb3RoZXJEYXRhLndpbmQ7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2h1bWlkaXR5JykudGV4dENvbnRlbnQgPSBvdGhlckRhdGEuaHVtaWRpdHk7XG5cdH07XG5cblx0cmV0dXJuIHsgYWRkVG9EaXNwbGF5IH07XG59KSgpO1xuXG5leHBvcnQgeyBhZGRMaXN0ZW5lcnMgfTtcbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlDYXJkO1xuIiwiY29uc3Qgd2VhdGhlckFwaSA9IChmdW5jdGlvbiAoKSB7XG5cdGNvbnN0IGNyZWF0ZVVybCA9IGZ1bmN0aW9uIChjaXR5TmFtZSkge1xuXHRcdGNvbnN0IGtleSA9ICc2NWI0NzM5OWRkMGJiYjZjYjk3NjRmMGZlZGU4Mzc3ZCc7XG5cdFx0Y29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5TmFtZX0mYXBwaWQ9JHtrZXl9YDtcblx0XHRyZXR1cm4gdXJsO1xuXHR9O1xuXG5cdGNvbnN0IGdldERhdGEgPSBhc3luYyBmdW5jdGlvbiAoY2l0eU5hbWUpIHtcblx0XHRjb25zdCB1cmwgPSBjcmVhdGVVcmwoY2l0eU5hbWUpO1xuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG5cdFx0XHRtb2RlOiAnY29ycycsXG5cdFx0fSk7XG5cdFx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblx0XHRjb25zb2xlLmxvZyhkYXRhKTtcblx0XHRjb25zdCB3ZWF0aGVyRGF0YSA9IFdlYXRoZXJGYWN0b3J5KGRhdGEpO1xuXHRcdHJldHVybiB3ZWF0aGVyRGF0YTtcblx0fTtcblxuXHRjb25zdCBXZWF0aGVyRmFjdG9yeSA9IGZ1bmN0aW9uIChkYXRhKSB7XG5cdFx0Y29uc3QgY29udmVydFRvQ2Vsc2l1cyA9IGZ1bmN0aW9uICh2YWx1ZUluS2VsdmluKSB7XG5cdFx0XHRjb25zdCB2YWx1ZUluQ2Vsc2l1cyA9IHZhbHVlSW5LZWx2aW4gLSAyNzMuMTU7XG5cdFx0XHRyZXR1cm4gdmFsdWVJbkNlbHNpdXMudG9GaXhlZCgyKTtcblx0XHR9O1xuXHRcdGNvbnN0IGNvbnZlcnRUb0ZhaHJlbmhlaXQgPSBmdW5jdGlvbiAodmFsdWVJbktlbHZpbikge1xuXHRcdFx0Y29uc3QgdmFsdWVJbkZhaHJlbmhlaXQgPSBjb252ZXJ0VG9DZWxzaXVzKHZhbHVlSW5LZWx2aW4pICogMS44ICsgMzI7XG5cdFx0XHRyZXR1cm4gdmFsdWVJbkZhaHJlbmhlaXQudG9GaXhlZCgyKTtcblx0XHR9O1xuXHRcdHJldHVybiB7XG5cdFx0XHRnZW5lcmFsSW5mbzoge1xuXHRcdFx0XHRjaXR5TmFtZTogZGF0YS5uYW1lLFxuXHRcdFx0XHR3ZWF0aGVyOiB7XG5cdFx0XHRcdFx0bWFpbjogZGF0YS53ZWF0aGVyWzBdLm1haW4sXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbixcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cblx0XHRcdHRlbXBlcmF0dXJlOiB7XG5cdFx0XHRcdHRlbXBJbkNlbHNpdXM6IHtcblx0XHRcdFx0XHR0ZW1wOiBjb252ZXJ0VG9DZWxzaXVzKHBhcnNlSW50KGRhdGEubWFpbi50ZW1wKSksXG5cdFx0XHRcdFx0ZmVlbHNMaWtlOiBjb252ZXJ0VG9DZWxzaXVzKHBhcnNlSW50KGRhdGEubWFpbi5mZWVsc19saWtlKSksXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHRlbXBJbkZhaHJlbmhlaXQ6IHtcblx0XHRcdFx0XHR0ZW1wOiBjb252ZXJ0VG9GYWhyZW5oZWl0KHBhcnNlSW50KGRhdGEubWFpbi50ZW1wKSksXG5cdFx0XHRcdFx0ZmVlbHNMaWtlOiBjb252ZXJ0VG9GYWhyZW5oZWl0KHBhcnNlSW50KGRhdGEubWFpbi5mZWVsc19saWtlKSksXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0b3RoZXJEYXRhOiB7XG5cdFx0XHRcdHdpbmQ6IGRhdGEud2luZC5zcGVlZCxcblx0XHRcdFx0aHVtaWRpdHk6IGRhdGEubWFpbi5odW1pZGl0eSxcblx0XHRcdH0sXG5cdFx0fTtcblx0fTtcblxuXHRyZXR1cm4geyBnZXREYXRhIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCB3ZWF0aGVyQXBpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBhZGRMaXN0ZW5lcnMgfSBmcm9tICcuL21vZHVsZXMvZGlzcGxheS1jb250cm9sbGVyJztcbmltcG9ydCBkaXNwbGF5Q2FyZCBmcm9tICcuL21vZHVsZXMvZGlzcGxheS1jb250cm9sbGVyJztcbmltcG9ydCB3ZWF0aGVyQXBpIGZyb20gJy4vbW9kdWxlcy93ZWF0aGVyQVBJJztcblxuKGZ1bmN0aW9uICgpIHtcblx0YWRkTGlzdGVuZXJzKCk7XG5cdGNvbnN0IHNldERlZmF1bHQgPSBhc3luYyBmdW5jdGlvbiAoY2l0eU5hbWUpIHtcblx0XHRjb25zdCBkYXRhID0gYXdhaXQgd2VhdGhlckFwaS5nZXREYXRhKGNpdHlOYW1lKTtcblx0XHRkaXNwbGF5Q2FyZC5hZGRUb0Rpc3BsYXkoZGF0YSk7XG5cdH07XG5cdHNldERlZmF1bHQoJ0tvY2hpJyk7XG59KSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9