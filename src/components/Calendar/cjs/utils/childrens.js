"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.toArray = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactIs = require("react-is");
var toArray = exports.toArray = function toArray(children, option) {
  if (option === void 0) {
    option = {};
  }
  var ret = [];
  _react.default.Children.forEach(children, function (child) {
    if ((child === undefined || child === null) && !option.keepEmpty) {
      return;
    }
    if (Array.isArray(child)) {
      ret = ret.concat(toArray(child));
    } else if ((0, _reactIs.isFragment)(child) && child.props) {
      ret = ret.concat(toArray(child.props.children, option));
    } else {
      ret.push(child);
    }
  });
  return ret;
};