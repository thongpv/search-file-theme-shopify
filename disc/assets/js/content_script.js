/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"content_script": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "assets/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/_content_scripts/index.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/_content_scripts/index.js":
/*!***************************************!*\
  !*** ./src/_content_scripts/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ "./node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "./node_modules/babel-runtime/helpers/toConsumableArray.js");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var fetchFile = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(files) {
        var _this = this;

        var shopID, dataFiles;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.next = 2;
                        return getShopID();

                    case 2:
                        shopID = _context3.sent;

                        elTotalFile.innerHTML = files.length;
                        elTotalFileWrap.style.display = "inline";

                        _context3.next = 7;
                        return _promise2.default.all(files.map(function (file) {
                            return new _promise2.default(function () {
                                var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(resolve) {
                                    var dataAssetKey, response;
                                    return _regenerator2.default.wrap(function _callee2$(_context2) {
                                        while (1) {
                                            switch (_context2.prev = _context2.next) {
                                                case 0:
                                                    dataAssetKey = file.getAttribute("data-asset-key");
                                                    _context2.next = 3;
                                                    return getDOMFromFile(shopID, dataAssetKey);

                                                case 3:
                                                    response = _context2.sent;


                                                    if (response) {
                                                        renderFile(dataAssetKey, elDisplay);
                                                        totalCurrentFile++;
                                                        elTotalCurrentFile.innerHTML = totalCurrentFile;

                                                        arrFiles.push({
                                                            name: dataAssetKey,
                                                            data: response
                                                        });
                                                    }

                                                    resolve(response);

                                                case 6:
                                                case "end":
                                                    return _context2.stop();
                                            }
                                        }
                                    }, _callee2, _this);
                                }));

                                return function (_x2) {
                                    return _ref3.apply(this, arguments);
                                };
                            }());
                        }));

                    case 7:
                        dataFiles = _context3.sent;
                        return _context3.abrupt("return", dataFiles);

                    case 9:
                    case "end":
                        return _context3.stop();
                }
            }
        }, _callee3, this);
    }));

    return function fetchFile(_x) {
        return _ref2.apply(this, arguments);
    };
}();

var getDOMFromFile = function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(shopID, dataAssetKey) {
        var url, _url, result, response;

        return _regenerator2.default.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        url = "https://" + window.location.host + "/admin/themes/" + shopID + "/assets";
                        _url = new URL(url);

                        _url.searchParams.append("asset[key]", dataAssetKey);

                        _context4.prev = 3;
                        _context4.next = 6;
                        return fetch(_url, {
                            cache: "no-cache",
                            headers: {
                                Accept: "application/json, text/javascript, */*; q=0.01",
                                Connection: "keep-alive",
                                "Accept-Encoding": "gzip, deflate, br",
                                "Accept-Language": "en-US,en;q=0.9",
                                "Cache-Control": "no-cache",
                                "Content-Type": "application/json",
                                "X-Requested-With": "XMLHttpRequest",
                                "X-Shopify-Web": 1
                            }
                        });

                    case 6:
                        result = _context4.sent;
                        _context4.next = 9;
                        return result.text();

                    case 9:
                        response = _context4.sent;
                        return _context4.abrupt("return", response);

                    case 13:
                        _context4.prev = 13;
                        _context4.t0 = _context4["catch"](3);

                        console.log("Error: ", _context4.t0);
                        return _context4.abrupt("return", false);

                    case 17:
                    case "end":
                        return _context4.stop();
                }
            }
        }, _callee4, this, [[3, 13]]);
    }));

    return function getDOMFromFile(_x3, _x4) {
        return _ref4.apply(this, arguments);
    };
}();

var getShopID = function () {
    var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
        var url, result, res, regex, ex, shopID;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        url = "https://" + window.location.host + "/shop.json";
                        _context5.next = 3;
                        return fetch(url);

                    case 3:
                        result = _context5.sent;
                        _context5.next = 6;
                        return result.text();

                    case 6:
                        res = _context5.sent;
                        regex = /Shopify.theme = (.*?);$/m;
                        ex = regex.exec(res);
                        shopID = JSON.parse(ex[1]).id;
                        return _context5.abrupt("return", shopID);

                    case 11:
                    case "end":
                        return _context5.stop();
                }
            }
        }, _callee5, this);
    }));

    return function getShopID() {
        return _ref5.apply(this, arguments);
    };
}();

__webpack_require__(/*! @src/scss/main.scss */ "./src/scss/main.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.body.insertAdjacentHTML("beforeend", "<div id=\"tool-shopify-wrap\">\n        <div id=\"tool-shopify-count-file\">\n            <span id=\"tool-shopify-total-current-file\"></span>\n            /\n            <span id=\"tool-shopify-total-file\"></span>\n        </div>\n\n        <div id=\"tool-shopify-alert\">Not found data!</div>\n\n        <ul id=\"tool-shopify-display\"></ul>\n\n        <button id=\"tool-shopify-btn\">Get Files</button>\n\n        <div id=\"tool-shopify-search\">\n            <input type=\"text\" />\n        </div>\n    </div>");

var excludeExtension = [".svg", ".svg.liquid", ".png", ".png.liquid", ".js", ".scss", ".scss.liquid", ".css", ".css.liquid", ".js.liquid", ".json", ".json.liquid", ".oet", ".oet.liquid", ".eot", ".eot.liquid", ".ttf", ".ttf.liquid", ".woff", ".woff.liquid", ".jpg", ".jpg.liquid", ".gif", ".gif.liquid", ".jpeg", ".jpeg.liquid"];

function filterFileExtension(fileName) {
    for (var i = 0; i < excludeExtension.length; i++) {
        if (fileName.indexOf(excludeExtension[i]) > -1) {
            return false;
        }
    }

    return true;
}

var arrFiles = [];
// let totalFile = 0;
var totalCurrentFile = 0;

var elTotalCurrentFile = document.getElementById("tool-shopify-total-current-file");
var elTotalFileWrap = document.getElementById("tool-shopify-count-file");
var elTotalFile = document.getElementById("tool-shopify-total-file");
var elDisplay = document.getElementById("tool-shopify-display");
var elAlert = document.getElementById("tool-shopify-alert");
var elBtn = document.getElementById("tool-shopify-btn");
var elSearch = document.getElementById("tool-shopify-search");
var elInput = document.querySelector("#tool-shopify-search input");

elBtn.addEventListener("click", (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var aList, files;
    return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    aList = document.querySelectorAll(".asset-listing-theme-file");
                    files = [].concat((0, _toConsumableArray3.default)(aList)).filter(function (item) {
                        var dataAssetKey = item.getAttribute("data-asset-key");
                        var isExclude = filterFileExtension(dataAssetKey);
                        return isExclude;
                    });

                    if (!(files.length === 0)) {
                        _context.next = 7;
                        break;
                    }

                    elAlert.style.display = "block";
                    elSearch.style.display = "none";
                    _context.next = 12;
                    break;

                case 7:
                    elAlert.style.display = "none";
                    _context.next = 10;
                    return fetchFile(files);

                case 10:
                    elBtn.style.cssText = "opacity: 0.5; pointer-events: none;";
                    elSearch.style.display = "block";

                case 12:
                case "end":
                    return _context.stop();
            }
        }
    }, _callee, undefined);
})));

elInput.addEventListener("keyup", function (e) {
    var value = e.target.value.trim();
    var tempArrayFiles = [].concat(arrFiles);
    elDisplay.innerHTML = "";

    var result = tempArrayFiles.filter(function (contentTextFile) {
        if (contentTextFile.data.indexOf(value) > -1) {
            renderFile(contentTextFile.name, elDisplay);
            return true;
        }
    });

    elTotalCurrentFile.innerHTML = result.length;
});

elTotalFileWrap.addEventListener("click", function () {
    elDisplay.classList.toggle("hide");
});

function renderFile(text, contain) {
    var node = document.createElement("LI");
    var textnode = document.createTextNode(text);
    node.appendChild(textnode);
    contain.appendChild(node);

    node.addEventListener("click", function (e) {
        var fileName = e.target.textContent;
        var elFile = document.querySelector("a[data-asset-key=\"" + fileName + "\"]");
        elFile.click();
    });
}

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=content_script.js.map