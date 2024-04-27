"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _react = _interopRequireDefault(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _web = require("@react-spring/web");
var _class = require("../../utils/class");
var _excluded = ["children", "style", "className"];
var SwiperSlide = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var children = props.children,
    _props$style = props.style,
    style = _props$style === void 0 ? {} : _props$style,
    className = props.className,
    restProps = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  var prefixCls = (0, _class.getPrefixCls)("swiper-item");
  var cls = (0, _clsx.default)(prefixCls, className);
  return /*#__PURE__*/_react.default.createElement(_web.animated.div, (0, _extends2.default)({}, restProps, {
    ref: ref,
    className: cls,
    style: style
  }), children);
});
SwiperSlide.defaultProps = {
  style: {}
};
var _default = exports.default = SwiperSlide;