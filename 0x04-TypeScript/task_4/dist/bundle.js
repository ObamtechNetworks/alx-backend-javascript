/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.ts":
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
/*! exports provided: cpp, java, react, cTeacher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cpp", function() { return cpp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "java", function() { return java; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "react", function() { return react; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cTeacher", function() { return cTeacher; });
/* harmony import */ var _subjects_Cpp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subjects/Cpp */ "./js/subjects/Cpp.ts");
/* harmony import */ var _subjects_Cpp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_subjects_Cpp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _subjects_Java__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subjects/Java */ "./js/subjects/Java.ts");
/* harmony import */ var _subjects_Java__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_subjects_Java__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _subjects_React__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subjects/React */ "./js/subjects/React.ts");
/* harmony import */ var _subjects_React__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_subjects_React__WEBPACK_IMPORTED_MODULE_2__);
// task_4/js/main.ts



// Create and export constants for subjects
var cpp = new _subjects_Cpp__WEBPACK_IMPORTED_MODULE_0__["Cpp"]();
var java = new _subjects_Java__WEBPACK_IMPORTED_MODULE_1__["Java"]();
var react = new _subjects_React__WEBPACK_IMPORTED_MODULE_2__["React"]();
// Create and export a Teacher object
var cTeacher = {
    firstName: 'John',
    lastName: 'Doe',
    experienceTeachingC: 10
};
// Cpp subject
console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());
// Java subject
console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());
// React subject
console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());


/***/ }),

/***/ "./js/subjects/Cpp.ts":
/*!****************************!*\
  !*** ./js/subjects/Cpp.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Subjects;
(function (Subjects) {
    var Cpp = /** @class */ (function (_super) {
        __extends(Cpp, _super);
        function Cpp() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Cpp.prototype.getRequirements = function () {
            return 'Here is the list of requirements for Cpp';
        };
        Cpp.prototype.getAvailableTeacher = function () {
            if (this.teacher.experienceTeachingC > 0) {
                return "Available Teacher: " + this.teacher.firstName;
            }
            return 'No available teacher';
        };
        return Cpp;
    }(Subject));
    Subjects.Cpp = Cpp;
})(Subjects || (Subjects = {}));


/***/ }),

/***/ "./js/subjects/Java.ts":
/*!*****************************!*\
  !*** ./js/subjects/Java.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// task_4/js/subjects/Java.ts
var Subjects;
(function (Subjects) {
    var Java = /** @class */ (function (_super) {
        __extends(Java, _super);
        function Java() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Java.prototype.getRequirements = function () {
            return 'Here is the list of requirements for Java';
        };
        Java.prototype.getAvailableTeacher = function () {
            if (this.teacher.experienceTeachingJava > 0) {
                return "Available Teacher: " + this.teacher.firstName;
            }
            return 'No available teacher';
        };
        return Java;
    }(Subject));
    Subjects.Java = Java;
})(Subjects || (Subjects = {}));


/***/ }),

/***/ "./js/subjects/React.ts":
/*!******************************!*\
  !*** ./js/subjects/React.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// task_4/js/subjects/React.ts
var Subjects;
(function (Subjects) {
    var React = /** @class */ (function (_super) {
        __extends(React, _super);
        function React() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        React.prototype.getRequirements = function () {
            return 'Here is the list of requirements for React';
        };
        React.prototype.getAvailableTeacher = function () {
            if (this.teacher.experienceTeachingReact > 0) {
                return "Available Teacher: " + this.teacher.firstName;
            }
            return 'No available teacher';
        };
        return React;
    }(Subject));
    Subjects.React = React;
})(Subjects || (Subjects = {}));


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9qcy9zdWJqZWN0cy9DcHAudHMiLCJ3ZWJwYWNrOi8vLy4vanMvc3ViamVjdHMvSmF2YS50cyIsIndlYnBhY2s6Ly8vLi9qcy9zdWJqZWN0cy9SZWFjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBb0I7QUFFaUI7QUFDRTtBQUNFO0FBR3pDLDJDQUEyQztBQUNwQyxJQUFNLEdBQUcsR0FBRyxJQUFJLGlEQUFHLEVBQUUsQ0FBQztBQUN0QixJQUFNLElBQUksR0FBRyxJQUFJLG1EQUFJLEVBQUUsQ0FBQztBQUN4QixJQUFNLEtBQUssR0FB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c0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFXLENBQUM7YUFDekQ7WUFDRCxPQUFPLHNCQUFzQixDQUFDO1FBQ2xDLENBQUM7UUFDTCxZQUFDO0lBQUQsQ0FBQyxDQVgwQixPQUFPLEdBV2pDO0lBWFksY0FBSyxRQVdqQjtBQUNMLENBQUMsRUFsQlMsUUFBUSxLQUFSLFFBQVEsUUFrQmpCIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vanMvbWFpbi50c1wiKTtcbiIsIi8vIHRhc2tfNC9qcy9tYWluLnRzXG5cbmltcG9ydCB7IENwcCB9IGZyb20gJy4vc3ViamVjdHMvQ3BwJztcbmltcG9ydCB7IEphdmEgfSBmcm9tICcuL3N1YmplY3RzL0phdmEnO1xuaW1wb3J0IHsgUmVhY3QgfSBmcm9tICcuL3N1YmplY3RzL1JlYWN0JztcbmltcG9ydCB7IFRlYWNoZXIgfSBmcm9tICcuL3N1YmplY3RzL1RlYWNoZXInO1xuXG4vLyBDcmVhdGUgYW5kIGV4cG9ydCBjb25zdGFudHMgZm9yIHN1YmplY3RzXG5leHBvcnQgY29uc3QgY3BwID0gbmV3IENwcCgpO1xuZXhwb3J0IGNvbnN0IGphdmEgPSBuZXcgSmF2YSgpO1xuZXhwb3J0IGNvbnN0IHJlYWN0ID0gbmV3IFJlYWN0KCk7XG5cbi8vIENyZWF0ZSBhbmQgZXhwb3J0IGEgVGVhY2hlciBvYmplY3RcbmV4cG9ydCBjb25zdCBjVGVhY2hlcjogVGVhY2hlciA9IHtcbiAgICBmaXJzdE5hbWU6ICdKb2huJyxcbiAgICBsYXN0TmFtZTogJ0RvZScsXG4gICAgZXhwZXJpZW5jZVRlYWNoaW5nQzogMTBcbn07XG5cbi8vIENwcCBzdWJqZWN0XG5jb25zb2xlLmxvZygnQysrJyk7XG5jcHAuc2V0VGVhY2hlcihjVGVhY2hlcik7XG5jb25zb2xlLmxvZyhjcHAuZ2V0UmVxdWlyZW1lbnRzKCkpO1xuY29uc29sZS5sb2coY3BwLmdldEF2YWlsYWJsZVRlYWNoZXIoKSk7XG5cbi8vIEphdmEgc3ViamVjdFxuY29uc29sZS5sb2coJ0phdmEnKTtcbmphdmEuc2V0VGVhY2hlcihjVGVhY2hlcik7XG5jb25zb2xlLmxvZyhqYXZhLmdldFJlcXVpcmVtZW50cygpKTtcbmNvbnNvbGUubG9nKGphdmEuZ2V0QXZhaWxhYmxlVGVhY2hlcigpKTtcblxuLy8gUmVhY3Qgc3ViamVjdFxuY29uc29sZS5sb2coJ1JlYWN0Jyk7XG5yZWFjdC5zZXRUZWFjaGVyKGNUZWFjaGVyKTtcbmNvbnNvbGUubG9nKHJlYWN0LmdldFJlcXVpcmVtZW50cygpKTtcbmNvbnNvbGUubG9nKHJlYWN0LmdldEF2YWlsYWJsZVRlYWNoZXIoKSk7XG4iLCJuYW1lc3BhY2UgU3ViamVjdHMge1xuICAgIC8vIEV4dGVuZCB0aGUgVGVhY2hlciBpbnRlcmZhY2Ugd2l0aCBkZWNsYXJhdGlvbiBtZXJnaW5nXG4gICAgZXhwb3J0IGludGVyZmFjZSBUZWFjaGVyIHtcbiAgICAgICAgZXhwZXJpZW5jZVRlYWNoaW5nQz86IG51bWJlcjtcbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgQ3BwIGV4dGVuZHMgU3ViamVjdCB7XG4gICAgICAgIGdldFJlcXVpcmVtZW50cygpOiBzdHJpbmcge1xuICAgICAgICAgICAgcmV0dXJuICdIZXJlIGlzIHRoZSBsaXN0IG9mIHJlcXVpcmVtZW50cyBmb3IgQ3BwJztcbiAgICAgICAgfVxuXG4gICAgICAgIGdldEF2YWlsYWJsZVRlYWNoZXIoKTogc3RyaW5nIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRlYWNoZXIuZXhwZXJpZW5jZVRlYWNoaW5nQyA+IDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGBBdmFpbGFibGUgVGVhY2hlcjogJHt0aGlzLnRlYWNoZXIuZmlyc3ROYW1lfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gJ05vIGF2YWlsYWJsZSB0ZWFjaGVyJztcbiAgICAgICAgfVxuICAgIH1cbn0iLCIvLyB0YXNrXzQvanMvc3ViamVjdHMvSmF2YS50c1xubmFtZXNwYWNlIFN1YmplY3RzIHtcbiAgICAvLyBFeHRlbmQgdGhlIFRlYWNoZXIgaW50ZXJmYWNlIHdpdGggZGVjbGFyYXRpb24gbWVyZ2luZ1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgVGVhY2hlciB7XG4gICAgICAgIGV4cGVyaWVuY2VUZWFjaGluZ0phdmE/OiBudW1iZXI7XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIEphdmEgZXh0ZW5kcyBTdWJqZWN0IHtcbiAgICAgICAgZ2V0UmVxdWlyZW1lbnRzKCk6IHN0cmluZyB7XG4gICAgICAgICAgICByZXR1cm4gJ0hlcmUgaXMgdGhlIGxpc3Qgb2YgcmVxdWlyZW1lbnRzIGZvciBKYXZhJztcbiAgICAgICAgfVxuXG4gICAgICAgIGdldEF2YWlsYWJsZVRlYWNoZXIoKTogc3RyaW5nIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRlYWNoZXIuZXhwZXJpZW5jZVRlYWNoaW5nSmF2YSA+IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYEF2YWlsYWJsZSBUZWFjaGVyOiAke3RoaXMudGVhY2hlci5maXJzdE5hbWV9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAnTm8gYXZhaWxhYmxlIHRlYWNoZXInO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLy8gdGFza180L2pzL3N1YmplY3RzL1JlYWN0LnRzXG5uYW1lc3BhY2UgU3ViamVjdHMge1xuICAgIC8vIEV4dGVuZCB0aGUgVGVhY2hlciBpbnRlcmZhY2Ugd2l0aCBkZWNsYXJhdGlvbiBtZXJnaW5nXG4gICAgZXhwb3J0IGludGVyZmFjZSBUZWFjaGVyIHtcbiAgICAgICAgZXhwZXJpZW5jZVRlYWNoaW5nUmVhY3Q/OiBudW1iZXI7XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFJlYWN0IGV4dGVuZHMgU3ViamVjdCB7XG4gICAgICAgIGdldFJlcXVpcmVtZW50cygpOiBzdHJpbmcge1xuICAgICAgICAgICAgcmV0dXJuICdIZXJlIGlzIHRoZSBsaXN0IG9mIHJlcXVpcmVtZW50cyBmb3IgUmVhY3QnO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2V0QXZhaWxhYmxlVGVhY2hlcigpOiBzdHJpbmcge1xuICAgICAgICAgICAgaWYgKHRoaXMudGVhY2hlci5leHBlcmllbmNlVGVhY2hpbmdSZWFjdCA+IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYEF2YWlsYWJsZSBUZWFjaGVyOiAke3RoaXMudGVhY2hlci5maXJzdE5hbWV9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAnTm8gYXZhaWxhYmxlIHRlYWNoZXInO1xuICAgICAgICB9XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==