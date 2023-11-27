/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_ApiCity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/ApiCity */ "./src/module/ApiCity.js");
/* harmony import */ var _module_addIconFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/addIconFunction */ "./src/module/addIconFunction.js");
/* harmony import */ var _module_toggleClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/toggleClass */ "./src/module/toggleClass.js");




/***/ }),

/***/ "./src/module/ApiCity.js":
/*!*******************************!*\
  !*** ./src/module/ApiCity.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var ApiCity = function ApiCity() {
  //picking all h6 elements
  var h6El = document.querySelectorAll('h6');
  //picking all p elements with hours
  var pTimeEl = document.querySelectorAll('.time');
  //picking all p for temperature
  var pDegreeEl = document.querySelectorAll('.degree');
  var miestas = ['Kaunas', 'Vilnius', 'Alytus', 'Klaipeda'];
  var _loop = function _loop(i) {
    var vietos = fetch("https://api.meteo.lt/v1/places/".concat(miestas[i], "/forecasts/long-term")).then(function (response) {
      return response.json();
    }).then(function (data) {
      console.log(data);
      //Getting the city
      h6El[i].textContent = data.place.name;
      //geting full date
      var today = new Date();
      //correct year and month
      var month = today.getMonth() + 1;
      var year = today.getFullYear();
      var date = today.getDate();
      //geting the correct hour and minutes
      var hours = addZero(today.getHours());
      var minutes = addZero(today.getMinutes());
      var seconds = addZero(today.getSeconds());
      var current_time = "".concat(hours, ":").concat(minutes);
      var current_date = "".concat(year, "-").concat(month, "-").concat(date, " ").concat(hours);

      //adding to inner p time text of current hour and minutes
      pTimeEl[i].textContent = current_time;

      //adding to inner p degree text of current hour and minutes
      var temp = data.forecastTimestamps[i].airTemperature;
      pDegreeEl[i].textContent = temp;
    });
  };
  for (var i = 0; i < miestas.length; i++) {
    _loop(i);
  }
};
function addZero(num) {
  return num < 10 ? "0".concat(num) : num;
}
ApiCity();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApiCity);

/***/ }),

/***/ "./src/module/addIconFunction.js":
/*!***************************************!*\
  !*** ./src/module/addIconFunction.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ApiCity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApiCity */ "./src/module/ApiCity.js");

var imgTagEl = document.querySelectorAll(' img');
imgTagEl[0].src = "css/icons/clear.png";
console.log(imgTagEl.src);
function getWeatherIcon(conditionCode) {
  for (var i = 0; i < imgTagEl.length; i++) {
    if (conditionCode === "clear") {
      var clearIcon = imgTagEl.innerHTML = "⛅";
      return clearIcon;
    } else if (conditionCode === "isolated-clouds") {
      return "⛅";
    } else if (conditionCode === "scattered-clouds" || conditionCode === "overcast" || conditionCode === "cloudy") {
      return "☁️";
    } else if (conditionCode === "light-rain" || conditionCode === "moderate-rain" || conditionCode === "heavy-rain") {
      return "🌧️";
    } else if (conditionCode === "sleet" || conditionCode === "light-snow" || conditionCode === "moderate-snow" || conditionCode === "heavy-snow") {
      return "🌨️";
    } else if (conditionCode === "fog") {
      return "🌫️";
    } else {
      return "❓";
    }
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeatherIcon());

/***/ }),

/***/ "./src/module/toggleClass.js":
/*!***********************************!*\
  !*** ./src/module/toggleClass.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var searchEl = document.querySelector('input');
var sectionOneElm = document.querySelector('#hide');
var displayToggle = function displayToggle() {
  searchEl.addEventListener('input', function () {
    if (searchEl.value === '') {
      sectionOneElm.style.display = 'inline';
    } else if (searchEl.value.length == 0) {
      sectionOneElm.style.display = 'inline';
    } else {
      sectionOneElm.style.display = 'none';
    }
  });
};
displayToggle();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayToggle);
var imgone = document.querySelectorAll('img');
imgone[0].src = "https://icons8.com/icon/cWfpk9mCJWJm/summer";

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/app": 0,
/******/ 			"css/style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkweatherappathome"] = self["webpackChunkweatherappathome"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/style"], () => (__webpack_require__("./src/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/style"], () => (__webpack_require__("./src/scss/style.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;