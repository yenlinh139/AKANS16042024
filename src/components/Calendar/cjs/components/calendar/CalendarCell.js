"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _class = require("../../utils/class");
var CalendarCell = function CalendarCell(props) {
  var label = props.label,
    content = props.content;
  var prefixCls = (0, _class.getPrefixCls)("calendar-cell-inner");
  var classes = (0, _clsx.default)(prefixCls);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: prefixCls + "-label"
  }, label), /*#__PURE__*/_react.default.createElement("div", {
    className: prefixCls + "-content"
  }, content));
};
var _default = exports.default = CalendarCell;