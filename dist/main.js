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
/* harmony export */   "addListeners": () => (/* binding */ addListeners),
/* harmony export */   "weatherApi": () => (/* binding */ weatherApi)
/* harmony export */ });
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


(function () {
	_modules_displaycontroller__WEBPACK_IMPORTED_MODULE_0__.weatherApi.getData('Kochi');
	(0,_modules_displaycontroller__WEBPACK_IMPORTED_MODULE_0__.addListeners)();
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FLFNBQVMsU0FBUyxJQUFJO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUEsVUFBVTtBQUNWLENBQUM7O0FBRW1DOzs7Ozs7O1VDekRwQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTnVFOztBQUV2RTtBQUNBLENBQUMsMEVBQWtCO0FBQ25CLENBQUMsd0VBQVk7QUFDYixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9kaXNwbGF5Y29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFkZExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcblx0Y29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NpdHktZm9ybS1zdWJtaXQnKTtcblx0c3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRjb25zdCBjaXR5TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaXR5LW5hbWUtaW5wdXQnKS52YWx1ZTtcblx0XHR3ZWF0aGVyQXBpLmdldERhdGEoY2l0eU5hbWUpO1xuXHR9KTtcbn07XG5cbmNvbnN0IHdlYXRoZXJBcGkgPSAoZnVuY3Rpb24gKCkge1xuXHRjb25zdCBjcmVhdGVVcmwgPSBmdW5jdGlvbiAoY2l0eU5hbWUpIHtcblx0XHRjb25zdCBrZXkgPSAnNjViNDczOTlkZDBiYmI2Y2I5NzY0ZjBmZWRlODM3N2QnO1xuXHRcdGNvbnN0IHVybCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eU5hbWV9JmFwcGlkPSR7a2V5fWA7XG5cdFx0Y29uc29sZS5sb2codXJsKTtcblx0XHRyZXR1cm4gdXJsO1xuXHR9O1xuXHRjb25zdCBnZXREYXRhID0gYXN5bmMgZnVuY3Rpb24gKGNpdHlOYW1lKSB7XG5cdFx0Y29uc3QgdXJsID0gY3JlYXRlVXJsKGNpdHlOYW1lKTtcblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuXHRcdFx0bW9kZTogJ2NvcnMnLFxuXHRcdH0pO1xuXHRcdGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cdFx0cHJvY2Vzc0RhdGEoZGF0YSk7XG5cdH07XG5cdGNvbnN0IHByb2Nlc3NEYXRhID0gZnVuY3Rpb24gKGRhdGEpIHtcblx0XHRjb25zdCB3ZWF0aGVyRGF0YSA9IFdlYXRoZXIoZGF0YSk7XG5cdFx0Y29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xuXHR9O1xuXHRjb25zdCBXZWF0aGVyID0gZnVuY3Rpb24gKGRhdGEpIHtcblx0XHRjb25zdCBjb252ZXJ0VG9DZWxzaXVzID0gZnVuY3Rpb24gKHZhbHVlSW5LZWx2aW4pIHtcblx0XHRcdGNvbnN0IHZhbHVlSW5DZWxzaXVzID0gdmFsdWVJbktlbHZpbiAtIDI3My4xNTtcblx0XHRcdHJldHVybiB2YWx1ZUluQ2Vsc2l1cy50b0ZpeGVkKDIpO1xuXHRcdH07XG5cdFx0Y29uc3QgY29udmVydFRvRmFocmVuaGVpdCA9IGZ1bmN0aW9uICh2YWx1ZUluS2VsdmluKSB7XG5cdFx0XHRjb25zdCB2YWx1ZUluRmFocmVuaGVpdCA9IGNvbnZlcnRUb0NlbHNpdXModmFsdWVJbktlbHZpbikgKiAxLjggKyAzMjtcblx0XHRcdHJldHVybiB2YWx1ZUluRmFocmVuaGVpdC50b0ZpeGVkKDIpO1xuXHRcdH07XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNpdHlOYW1lOiBkYXRhLm5hbWUsXG5cdFx0XHR3ZWF0aGVyOiB7XG5cdFx0XHRcdG1haW46IGRhdGEud2VhdGhlclswXS5tYWluLFxuXHRcdFx0XHRkZXNjcmlwdGlvbjogZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLFxuXHRcdFx0fSxcblx0XHRcdHRlbXBJbkNlbHNpdXM6IHtcblx0XHRcdFx0dGVtcDogY29udmVydFRvQ2Vsc2l1cyhwYXJzZUludChkYXRhLm1haW4udGVtcCkpLFxuXHRcdFx0XHRmZWVsc0xpa2U6IGNvbnZlcnRUb0NlbHNpdXMocGFyc2VJbnQoZGF0YS5tYWluLmZlZWxzX2xpa2UpKSxcblx0XHRcdH0sXG5cdFx0XHR0ZW1wSW5GYWhyZW5oZWl0OiB7XG5cdFx0XHRcdHRlbXA6IGNvbnZlcnRUb0ZhaHJlbmhlaXQocGFyc2VJbnQoZGF0YS5tYWluLnRlbXApKSxcblx0XHRcdFx0ZmVlbHNMaWtlOiBjb252ZXJ0VG9GYWhyZW5oZWl0KGRhdGEubWFpbi5mZWVsc19saWtlKSxcblx0XHRcdH0sXG5cdFx0fTtcblx0fTtcblxuXHRyZXR1cm4geyBnZXREYXRhIH07XG59KSgpO1xuXG5leHBvcnQgeyBhZGRMaXN0ZW5lcnMsIHdlYXRoZXJBcGkgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgYWRkTGlzdGVuZXJzLCB3ZWF0aGVyQXBpIH0gZnJvbSAnLi9tb2R1bGVzL2Rpc3BsYXljb250cm9sbGVyJztcblxuKGZ1bmN0aW9uICgpIHtcblx0d2VhdGhlckFwaS5nZXREYXRhKCdLb2NoaScpO1xuXHRhZGRMaXN0ZW5lcnMoKTtcbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=