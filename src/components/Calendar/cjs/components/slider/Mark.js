"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _clsx2 = _interopRequireDefault(require("clsx"));
var _react = _interopRequireDefault(require("react"));
var _class = require("../../utils/class");
var Mark = function Mark(props) {
  var _clsx;
  var position = props.position,
    filled = props.filled;
  var prefixCls = (0, _class.getPrefixCls)("slider-mark");
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx2.default)(prefixCls, (_clsx = {}, _clsx[prefixCls + "-filled"] = filled, _clsx)),
    style: {
      left: position + "%"
    }
  });
};
var _default = exports.default = Mark;