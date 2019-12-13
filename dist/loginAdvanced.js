(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(0));

__webpack_require__(14);

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function LoginAdvanced() {
  var _useState = (0, _react.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = (0, _react.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      password = _useState4[0],
      setPassword = _useState4[1];

  return _react["default"].createElement("div", {
    className: "login-advanced-wrapper"
  }, _react["default"].createElement("section", {
    id: "left"
  }, _react["default"].createElement("div", {
    className: "content"
  }, _react["default"].createElement("h1", null, "Advanced login UI"), _react["default"].createElement("p", null, "Powered by", " ", _react["default"].createElement("a", {
    href: "https://devtools.tech/?ref=conditional-ui-demo",
    title: "Devtools Link",
    target: "_blank"
  }, "devtools.tech"), " ", "| Photo Source :", " ", _react["default"].createElement("a", {
    href: "https://unsplash.com/photos/qjIJqoO7kvI",
    title: "Background Photo Source Link",
    target: "_blank"
  }, "Unsplash")))), _react["default"].createElement("section", {
    id: "right"
  }, _react["default"].createElement("form", {
    method: "POST",
    action: "#"
  }, _react["default"].createElement("input", {
    name: "email",
    type: "email",
    placeholder: "Enter your email",
    value: email,
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    }
  }), _react["default"].createElement("input", {
    type: "password",
    placeholder: "Enter your password",
    value: password,
    onChange: function onChange(e) {
      return setPassword(e.target.value);
    }
  }), _react["default"].createElement("input", {
    type: "submit",
    value: "Login"
  }), _react["default"].createElement("p", null, "Forget Password | Not a user?"))));
}

var _default = LoginAdvanced;
exports["default"] = _default;

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);