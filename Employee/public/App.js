"use strict";

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

// class HelloWorld extends React.Component {
//     render()
//     {
//       const message = "Employee Portal";
//       const add = "Add an Employee";
//       const list = "List Employees";
//       return(
//       <div title="Outer div" className="nav-bar">
//       <h1>{message}</h1>
//       <button type ="submit" onClick={showData()}>{add}</button>&nbsp;&nbsp;&nbsp;
//       <button type ="submit">{list}</button>
//       </div>
//     );
//     }
//   }
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
            return fetch('http://localhost:4000', {
              method: 'POST'
              /*select which method we should use*/
              ,
              headers: {
                'content-type': 'application/json'
              }
              /*select what content type we should use*/
              ,
              body: JSON.stringify({
                query: "query {\n      Employees {\n        EmployeeList{\n          _id\n          empid\n          fullName\n          address\n          age\n          email\n          phoneNumber\n        }\n      }\n    }"
              })
            });

          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.json();

          case 5:
            rsponseBody = _context.sent;
            return _context.abrupt("return", rsponseBody.data);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _loadData.apply(this, arguments);
}

var HelloWorld = /*#__PURE__*/function (_React$Component) {
  _inherits(HelloWorld, _React$Component);

  var _super = _createSuper(HelloWorld);

  function HelloWorld(_props) {
    var _this;

    _classCallCheck(this, HelloWorld);

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

      if (props.EmployeesList) {
        props.EmployeesList.map(function (currentelement, index) {
          rows.push( /*#__PURE__*/React.createElement("tr", {
            key: index
          }, props.EmployeesList[index].empid)); // Returns the new value instead of the item
        });
      }

      return rows;
    });

    _this.state = {
      lists: []
    };
    return _this;
  }

  _createClass(HelloWorld, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var message = "Employee Portal";
      var add = "Add an Employee";
      var listEmployees = "List Employees";
      return /*#__PURE__*/React.createElement("div", {
        title: "Outer div",
        className: "nav-bar"
      }, /*#__PURE__*/React.createElement("h1", null, message), /*#__PURE__*/React.createElement("button", {
        type: "submit"
      }, add), "\xA0\xA0\xA0", /*#__PURE__*/React.createElement("button", {
        type: "submit",
        onClick: function onClick() {
          return _this2.showData();
        }
      }, listEmployees));
    }
  }]);

  return HelloWorld;
}(React.Component);

var element = /*#__PURE__*/React.createElement(HelloWorld, null);
ReactDOM.render(element, document.getElementById('contents'));