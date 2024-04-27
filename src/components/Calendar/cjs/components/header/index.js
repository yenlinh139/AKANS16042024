"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireDefault(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _reactRouterDom = require("react-router-dom");
var _class = require("../../utils/class");
var _icon = _interopRequireDefault(require("../icon"));
var _button = _interopRequireDefault(require("../button"));
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2.default)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * Header component: Component Header cho Mini App, có thể sử dụng thay thế cho Header mặc định
 *
 * @category general
 * @subCategory Header
 * @component
 *
 * @example
import React from 'react';
import { Header, Page } from 'zmp-ui'

export default () => {
    return (
        <Page>
            <Header title="Zalo Mini App" />
        </Page>
    );
}
 */
var Header = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var navigate = (0, _reactRouterDom.useNavigate)();
  var _props$showBackIcon = props.showBackIcon,
    showBackIcon = _props$showBackIcon === void 0 ? true : _props$showBackIcon,
    backIcon = props.backIcon,
    onBackClick = props.onBackClick,
    title = props.title,
    className = props.className,
    style = props.style,
    id = props.id,
    backgroundColor = props.backgroundColor,
    textColor = props.textColor;
  var prefixCls = (0, _class.getPrefixCls)("header");
  var cls = (0, _clsx.default)(prefixCls, {}, className);
  var handleBackClick = function handleBackClick(event) {
    if (onBackClick) {
      onBackClick(event);
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    navigate(-1);
  };
  var backIconEl = backIcon || /*#__PURE__*/_react.default.createElement(_icon.default, {
    icon: "zi-chevron-left"
  });
  var componentStyle = _objectSpread({}, style);
  if (backgroundColor) {
    componentStyle.backgroundColor = backgroundColor;
  }
  if (textColor) {
    componentStyle.color = textColor;
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    ref: ref,
    className: cls,
    style: componentStyle,
    id: id
  }, showBackIcon && /*#__PURE__*/_react.default.createElement("span", {
    className: prefixCls + "-back"
  }, /*#__PURE__*/_react.default.createElement(_button.default, {
    className: prefixCls + "-back-btn",
    type: "neutral",
    variant: "tertiary",
    onClick: handleBackClick,
    style: {
      color: textColor
    },
    icon: backIconEl
  })), /*#__PURE__*/_react.default.createElement("span", {
    className: prefixCls + "-title"
  }, title));
});
Header.displayName = "zaui-header";
var _default = exports.default = Header;