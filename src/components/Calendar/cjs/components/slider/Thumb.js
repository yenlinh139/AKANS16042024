"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _clsx = _interopRequireDefault(require("clsx"));
var _react = _interopRequireDefault(require("react"));
var _class = require("../../utils/class");
var Thumb = function Thumb(props) {
  var position = props.position;
  var prefixCls = (0, _class.getPrefixCls)("slider-thumb");
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)(prefixCls),
    style: {
      left: position + "%"
    }
  });
};
var _default = exports.default = Thumb;