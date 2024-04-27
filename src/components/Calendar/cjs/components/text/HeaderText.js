"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _react = _interopRequireDefault(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _class = require("../../utils/class");
var _excluded = ["className", "children", "style", "size"];
var HeaderText = function HeaderText(props) {
  var _classNames;
  var className = props.className,
    children = props.children,
    style = props.style,
    size = props.size,
    rest = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  var prefixCls = (0, _class.getPrefixCls)("text-header");
  var cls = (0, _clsx.default)(prefixCls, (_classNames = {}, _classNames[prefixCls + "-" + size] = size, _classNames), className);
  return /*#__PURE__*/_react.default.createElement("span", (0, _extends2.default)({}, rest, {
    className: cls,
    style: style
  }), children);
};
var _default = exports.default = HeaderText;