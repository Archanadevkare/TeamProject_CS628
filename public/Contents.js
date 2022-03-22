"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Contents;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _addEmployee = _interopRequireDefault(require("./addEmployee.jsx"));

var _listEmployees = _interopRequireDefault(require("./listEmployees.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFound = function NotFound() {
  return /*#__PURE__*/_react.default.createElement("h1", null, "Page Not Found");
};

function Contents() {
  return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Redirect, {
    exact: true,
    from: "/",
    to: "/ListEmployees"
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/listEmployees",
    component: _listEmployees.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/addEmployee",
    component: _addEmployee.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    component: NotFound
  }));
}