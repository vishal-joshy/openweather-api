/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/displaycontroller.js":
/*!******************************************!*\
  !*** ./src/modules/displaycontroller.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addListeners": () => (/* binding */ addListeners)
/* harmony export */ });
function addListeners() {
	const submitBtn = document.querySelector('#city-form-submit');
	submitBtn.addEventListener('click', (event) => {
		event.preventDefault();
		const cityName = document.querySelector('#city-name-input').value;
	});
}


	
	


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
/* harmony import */ var _modules_displaycontroller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/displaycontroller */ "./src/modules/displaycontroller.js");


(0,_modules_displaycontroller__WEBPACK_IMPORTED_MODULE_0__.addListeners)();

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
		console.log(data);
		processData(data);
	};
	const processData = function (data) {
		const weather = data.name;
		console.log(weather);
		const weatherData = Weather(data);
		console.log(weatherData);
	};
	const Weather = function (data) {
		const convertToCelsius = function (valueInKelvin) {
			const valueInCelsius = valueInKelvin - 273.15;
			return valueInCelsius.toFixed(2);
		};
		const convertToFahrenheit = function (valueInCelsius) {
			const valueInFahrenheit = valueInCelsius * 1.8 + 32;
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
				temp: data.main.temp,
				feelsLike: data.main.feels_like,
			},
		};
	};

	return { getData };
})();

weatherApi.getData('London');

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7OztBQUdBO0FBQ0E7Ozs7Ozs7VUNWQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjJEOztBQUUzRCx3RUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQSxtRUFBbUUsU0FBUyxTQUFTLElBQUk7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQSxVQUFVO0FBQ1YsQ0FBQzs7QUFFRCIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvZGlzcGxheWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gYWRkTGlzdGVuZXJzKCkge1xuXHRjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2l0eS1mb3JtLXN1Ym1pdCcpO1xuXHRzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGNvbnN0IGNpdHlOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NpdHktbmFtZS1pbnB1dCcpLnZhbHVlO1xuXHR9KTtcbn1cblxuXG5cdFxuXHRcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgYWRkTGlzdGVuZXJzIH0gZnJvbSAnLi9tb2R1bGVzL2Rpc3BsYXljb250cm9sbGVyJztcblxuYWRkTGlzdGVuZXJzKCk7XG5cbmNvbnN0IHdlYXRoZXJBcGkgPSAoZnVuY3Rpb24gKCkge1xuXHRjb25zdCBjcmVhdGVVcmwgPSBmdW5jdGlvbiAoY2l0eU5hbWUpIHtcblx0XHRjb25zdCBrZXkgPSAnNjViNDczOTlkZDBiYmI2Y2I5NzY0ZjBmZWRlODM3N2QnO1xuXHRcdGNvbnN0IHVybCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eU5hbWV9JmFwcGlkPSR7a2V5fWA7XG5cdFx0Y29uc29sZS5sb2codXJsKTtcblx0XHRyZXR1cm4gdXJsO1xuXHR9O1xuXHRjb25zdCBnZXREYXRhID0gYXN5bmMgZnVuY3Rpb24gKGNpdHlOYW1lKSB7XG5cdFx0Y29uc3QgdXJsID0gY3JlYXRlVXJsKGNpdHlOYW1lKTtcblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuXHRcdFx0bW9kZTogJ2NvcnMnLFxuXHRcdH0pO1xuXHRcdGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cdFx0Y29uc29sZS5sb2coZGF0YSk7XG5cdFx0cHJvY2Vzc0RhdGEoZGF0YSk7XG5cdH07XG5cdGNvbnN0IHByb2Nlc3NEYXRhID0gZnVuY3Rpb24gKGRhdGEpIHtcblx0XHRjb25zdCB3ZWF0aGVyID0gZGF0YS5uYW1lO1xuXHRcdGNvbnNvbGUubG9nKHdlYXRoZXIpO1xuXHRcdGNvbnN0IHdlYXRoZXJEYXRhID0gV2VhdGhlcihkYXRhKTtcblx0XHRjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG5cdH07XG5cdGNvbnN0IFdlYXRoZXIgPSBmdW5jdGlvbiAoZGF0YSkge1xuXHRcdGNvbnN0IGNvbnZlcnRUb0NlbHNpdXMgPSBmdW5jdGlvbiAodmFsdWVJbktlbHZpbikge1xuXHRcdFx0Y29uc3QgdmFsdWVJbkNlbHNpdXMgPSB2YWx1ZUluS2VsdmluIC0gMjczLjE1O1xuXHRcdFx0cmV0dXJuIHZhbHVlSW5DZWxzaXVzLnRvRml4ZWQoMik7XG5cdFx0fTtcblx0XHRjb25zdCBjb252ZXJ0VG9GYWhyZW5oZWl0ID0gZnVuY3Rpb24gKHZhbHVlSW5DZWxzaXVzKSB7XG5cdFx0XHRjb25zdCB2YWx1ZUluRmFocmVuaGVpdCA9IHZhbHVlSW5DZWxzaXVzICogMS44ICsgMzI7XG5cdFx0XHRyZXR1cm4gdmFsdWVJbkZhaHJlbmhlaXQudG9GaXhlZCgyKTtcblx0XHR9O1xuXHRcdHJldHVybiB7XG5cdFx0XHRjaXR5TmFtZTogZGF0YS5uYW1lLFxuXHRcdFx0d2VhdGhlcjoge1xuXHRcdFx0XHRtYWluOiBkYXRhLndlYXRoZXJbMF0ubWFpbixcblx0XHRcdFx0ZGVzY3JpcHRpb246IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbixcblx0XHRcdH0sXG5cdFx0XHR0ZW1wSW5DZWxzaXVzOiB7XG5cdFx0XHRcdHRlbXA6IGNvbnZlcnRUb0NlbHNpdXMocGFyc2VJbnQoZGF0YS5tYWluLnRlbXApKSxcblx0XHRcdFx0ZmVlbHNMaWtlOiBjb252ZXJ0VG9DZWxzaXVzKHBhcnNlSW50KGRhdGEubWFpbi5mZWVsc19saWtlKSksXG5cdFx0XHR9LFxuXHRcdFx0dGVtcEluRmFocmVuaGVpdDoge1xuXHRcdFx0XHR0ZW1wOiBkYXRhLm1haW4udGVtcCxcblx0XHRcdFx0ZmVlbHNMaWtlOiBkYXRhLm1haW4uZmVlbHNfbGlrZSxcblx0XHRcdH0sXG5cdFx0fTtcblx0fTtcblxuXHRyZXR1cm4geyBnZXREYXRhIH07XG59KSgpO1xuXG53ZWF0aGVyQXBpLmdldERhdGEoJ0xvbmRvbicpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9