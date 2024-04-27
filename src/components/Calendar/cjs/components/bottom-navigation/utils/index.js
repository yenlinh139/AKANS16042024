"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.parseItemList = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireDefault(require("react"));
var _childrens = require("../../../utils/childrens");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2.default)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var parseItemList = exports.parseItemList = function parseItemList(children) {
  var tabs = (0, _childrens.toArray)(children).map(function (node) {
    if ( /*#__PURE__*/_react.default.isValidElement(node)) {
      var key = node.key !== undefined ? String(node.key) : undefined;
      return _objectSpread(_objectSpread({
        key: key
      }, node.props), {}, {
        node: node
      });
    }
    return null;
  }).filter(function (tab) {
    return tab;
  });
  return tabs;
};