"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _clsx = _interopRequireDefault(require("clsx"));
var _react = _interopRequireDefault(require("react"));
var _class = require("../../utils/class");
var _Mark = _interopRequireDefault(require("./Mark"));
var Track = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var children = props.children,
    offset = props.offset,
    width = props.width,
    marks = props.marks,
    onMouseLeave = props.onMouseLeave,
    onMouseEnter = props.onMouseEnter;
  var prefixCls = (0, _class.getPrefixCls)("slider-track");
  return /*#__PURE__*/_react.default.createElement("div", {
    ref: ref,
    className: (0, _clsx.default)(prefixCls),
    onMouseLeave: onMouseLeave,
    onMouseEnter: onMouseEnter
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)(prefixCls + "-bar"),
    style: {
      left: offset + "%",
      width: width + "%"
    }
  }), marks && Array.isArray(marks) && marks.map(function (mark) {
    return /*#__PURE__*/_react.default.createElement(_Mark.default, {
      key: mark,
      position: mark,
      filled: mark >= offset && mark <= width + offset
    });
  }), children);
});
var _default = exports.default = Track;