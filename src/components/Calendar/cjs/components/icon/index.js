"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _react = _interopRequireDefault(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _class = require("../../utils/class");
var _icons = _interopRequireDefault(require("./icons"));
var _excluded = ["children", "size", "icon", "style", "className"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2.default)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * @category General
 * @subcategory Icon
 * @component
 *
 * @example
import React from "react";
import { Page, Icon } from "zmp-ui";

function HomePage(props){
    return (
        <Page>
            <Icon icon="zi-close-circle" size={8} />
        </Page>
    );
}
 */
var Icon = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var _classNames;
  var children = props.children,
    size = props.size,
    icon = props.icon,
    style = props.style,
    className = props.className,
    rest = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  var prefixCls = (0, _class.getPrefixCls)("icon");
  var getIcon = function getIcon(iconStr) {
    if (typeof iconStr === "string") {
      var iconKey = iconStr.replace(/-/g, "_");

      // eslint-disable-next-line security/detect-object-injection
      var _iconContent = _icons.default[iconKey];
      return _iconContent || null;
    }
    return null;
  };
  var iconStyle = {};
  if (style) {
    iconStyle = _objectSpread({}, style);
  }
  var classes = (0, _clsx.default)(prefixCls, (_classNames = {}, _classNames["" + className] = className, _classNames));
  if (typeof size === "number") {
    iconStyle.fontSize = size + "px";
  }
  var iconContent = getIcon(icon || children);
  return /*#__PURE__*/_react.default.createElement("i", (0, _extends2.default)({
    ref: ref,
    className: classes,
    style: iconStyle
  }, rest), iconContent);
});
Icon.displayName = "zaui-icon";
var _default = exports.default = Icon;