/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-polyfill */ "./node_modules/babel-polyfill/lib/index.js");
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _Page_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Page.jsx */ "./src/Page.jsx");








var element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Page_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], null));
react_dom__WEBPACK_IMPORTED_MODULE_3__.render(element, document.getElementById('contents')); // if(import.meta.webpackHot) {
//     import.meta.webpackHot.accept();
// }

/***/ }),

/***/ "./src/Contents.jsx":
/*!**************************!*\
  !*** ./src/Contents.jsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Contents)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _addEmployee_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addEmployee.jsx */ "./src/addEmployee.jsx");
/* harmony import */ var _listEmployees_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listEmployees.jsx */ "./src/listEmployees.jsx");
/* harmony import */ var _getEmployee_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getEmployee.jsx */ "./src/getEmployee.jsx");




 //import UpdateEmployee from './updateEmployee.jsx';
//import DeleteEmployee from './deleteEmployee.jsx';

function NotFound() {
  /*#__PURE__*/
  react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Page Not Found");
}

;
function Contents() {
  console.log("functioncall");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, {
    path: "/"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, {
    path: "/listEmployees",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_listEmployees_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, {
    path: "/GetEmployee/:empid",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_getEmployee_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, {
    path: "/addEmployee",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_addEmployee_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, {
    path: "*",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(NotFound, null)
  }));
}

/***/ }),

/***/ "./src/Page.jsx":
/*!**********************!*\
  !*** ./src/Page.jsx ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Page)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _Contents_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Contents.jsx */ "./src/Contents.jsx");
/* harmony import */ var _listEmployees_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listEmployees.jsx */ "./src/listEmployees.jsx");

 //import Navbar from './navbar.jsx';




function NavBar() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
    exact: "true",
    to: "/"
  }, "Home"), ' | ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
    to: "/listEmployees"
  }, "List Employees"), ' | ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
    to: "/create"
  }, "Add an Employee"));
}

function Page() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Employee Information"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(NavBar, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Contents_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], null));
}

/***/ }),

/***/ "./src/addEmployee.jsx":
/*!*****************************!*\
  !*** ./src/addEmployee.jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddEmployee)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




function loadData() {
  return _loadData.apply(this, arguments);
}

function _loadData() {
  _loadData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var response, rsponseBody;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(window.UI_API_ENDPOINT, {
              method: 'POST',
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify({
                query: "mutation addEmployee{\n      addEmployee(input:\n      {\n        empid:input.empid,\n        fullName:input.fullName\n        address:input.address,\n        age:input.age,\n        email:input.email,\n        phoneNumber:input.phoneNumber\n      })\n    \n    }"
              })
            });

          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.json();

          case 5:
            rsponseBody = _context.sent;
            console.log(rsponseBody);
            return _context.abrupt("return", rsponseBody.data);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _loadData.apply(this, arguments);
}

var AddEmployee = /*#__PURE__*/function (_React$Component) {
  _inherits(AddEmployee, _React$Component);

  var _super = _createSuper(AddEmployee);

  function AddEmployee(_props) {
    var _this;

    _classCallCheck(this, AddEmployee);

    _this = _super.call(this, _props);

    _defineProperty(_assertThisInitialized(_this), "showData", function () {
      loadData().then(function (result) {
        // update the state using setState by assign result to list key.
        _this.setState({
          lists: result
        });

        console.log(result);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "Display", function (props) {
      var rows = [];
      console.log(props);

      if (props.addEmployee) {
        props.addEmployee.map(function (currentelement, index) {
          rows.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
            key: index
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, props.addEmployee[index].empid), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, props.addEmployee[index].fullName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, props.addEmployee[index].address), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, props.addEmployee[index].age), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, props.addEmployee[index].email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, props.addEmployee[index].phoneNumber)));
        });
      }

      return rows;
    });

    _this.state = {
      lists: []
    };
    return _this;
  }

  _createClass(AddEmployee, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var details = "Employee Details:";
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        title: "Outer div",
        className: "nav-bar"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        type: "submit",
        className: "button",
        onClick: function onClick() {
          return _this2.showData();
        }
      }, "Add Employee"), "\xA0\xA0\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, details), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Employee Id"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Emp Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Age"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Contact Number"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, this.Display(this.state.lists))));
    }
  }]);

  return AddEmployee;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


var element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AddEmployee, null);
react_dom__WEBPACK_IMPORTED_MODULE_1__.render(element, document.getElementById('contents'));

/***/ }),

/***/ "./src/getEmployee.jsx":
/*!*****************************!*\
  !*** ./src/getEmployee.jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetEmployee)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




function loadData() {
  return _loadData.apply(this, arguments);
}

function _loadData() {
  _loadData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var response, rsponseBody;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(window.UI_API_ENDPOINT, {
              method: 'POST',
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify({
                query: "query getEmployeebyId {\n      getEmployeebyId(empid: $empid) {\n      empid\n      fullName\n      address\n      age\n      email\n      phoneNumber\n    }        \n  }"
              })
            });

          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.json();

          case 5:
            rsponseBody = _context.sent;
            console.log(rsponseBody);
            return _context.abrupt("return", rsponseBody.data);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _loadData.apply(this, arguments);
}

var GetEmployee = /*#__PURE__*/function (_React$Component) {
  _inherits(GetEmployee, _React$Component);

  var _super = _createSuper(GetEmployee);

  function GetEmployee(_props) {
    var _this;

    _classCallCheck(this, GetEmployee);

    _this = _super.call(this, _props); //console.log(match.params);
    //console.log(props.getEmployeebyid[0].empid);

    _defineProperty(_assertThisInitialized(_this), "showData", function () {
      loadData().then(function (result) {
        // update the state using setState by assign result to list key.
        _this.setState({
          lists: result
        });

        console.log(result);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "Display", function (props) {
      var rows = [];

      if (props.getEmployeebyid) {
        props.getEmployeebyid.map(function (currentelement, index) {
          rows.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
            key: index
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, props.getEmployeebyid[index].empid), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, props.getEmployeebyid[index].fullName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, props.getEmployeebyid[index].address), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, props.getEmployeebyid[index].age), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, props.getEmployeebyid[index].email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, props.getEmployeebyid[index].phoneNumber)));
        });
      }

      return rows;
    });

    _this.state = {
      lists: []
    };
    return _this;
  }

  _createClass(GetEmployee, [{
    key: "render",
    value: function render() {
      var details = "Employee Details:";
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        title: "Outer div",
        className: "nav-bar"
      }, "console.log(\"getEmployee\");", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, details), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Employee Id"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Emp Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Age"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Contact Number"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, this.Display(this.state.lists))));
    }
  }]);

  return GetEmployee;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


var element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(GetEmployee, null);
react_dom__WEBPACK_IMPORTED_MODULE_1__.render(element, document.getElementById('contents'));

/***/ }),

/***/ "./src/listEmployees.jsx":
/*!*******************************!*\
  !*** ./src/listEmployees.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ListEmployees)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





function loadData() {
  return _loadData.apply(this, arguments);
}

function _loadData() {
  _loadData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var response, rsponseBody;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(window.ENV.UI_API_ENDPOINT, {
              method: 'POST',
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify({
                query: "query EmployeesList {\n    EmployeesList {\n      empid\n      fullName\n      address\n      age\n      email\n      phoneNumber\n    }        \n  }"
              })
            });

          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.json();

          case 5:
            rsponseBody = _context.sent;
            console.log(rsponseBody);
            return _context.abrupt("return", rsponseBody.data);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _loadData.apply(this, arguments);
}

var ListEmployees = /*#__PURE__*/function (_React$Component) {
  _inherits(ListEmployees, _React$Component);

  var _super = _createSuper(ListEmployees);

  function ListEmployees(_props) {
    var _this;

    _classCallCheck(this, ListEmployees);

    _this = _super.call(this, _props);

    _defineProperty(_assertThisInitialized(_this), "showData", function () {
      loadData().then(function (result) {
        // update the state using setState by assign result to list key.
        _this.setState({
          lists: result
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "Display", function (props) {
      var rows = [];

      if (props.EmployeesList) {
        props.EmployeesList.map(function (currentelement, index) {
          rows.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
            key: index
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
            to: {
              pathname: "/GetEmployee/" + "".concat(props.EmployeesList[index].empid)
            }
          }, props.EmployeesList[index].empid))));
        });
      }

      return rows;
    });

    _this.state = {
      lists: []
    };
    return _this;
  }

  _createClass(ListEmployees, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log("inside mount");
      this.showData();
    }
  }, {
    key: "render",
    value: function render() {
      var details = "Employee Details:";
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        title: "Outer div",
        className: "nav-bar"
      }, "console.log(listemployee);", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, details), "\xA0\xA0\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
        width: "100%"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
        width: "100%"
      }, "Employee Id"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, this.Display(this.state.lists))));
    }
  }]);

  return ListEmployees;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


var element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ListEmployees, null);
react_dom__WEBPACK_IMPORTED_MODULE_1__.render(element, document.getElementById('contents'));

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 			"app": 0
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
/******/ 		var chunkLoadingGlobal = self["webpackChunkemployee"] = self["webpackChunkemployee"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/App.jsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=app.bundle.js.map