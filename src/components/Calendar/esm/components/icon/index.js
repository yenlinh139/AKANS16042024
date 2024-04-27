import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["children", "size", "icon", "style", "className"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import React from "react";
import classNames from "clsx";
import { getPrefixCls } from "../../utils/class";
import icons from "./icons";

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
var Icon = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _classNames;
  var children = props.children,
    size = props.size,
    icon = props.icon,
    style = props.style,
    className = props.className,
    rest = _objectWithoutPropertiesLoose(props, _excluded);
  var prefixCls = getPrefixCls("icon");
  var getIcon = function getIcon(iconStr) {
    if (typeof iconStr === "string") {
      var iconKey = iconStr.replace(/-/g, "_");

      // eslint-disable-next-line security/detect-object-injection
      var _iconContent = icons[iconKey];
      return _iconContent || null;
    }
    return null;
  };
  var iconStyle = {};
  if (style) {
    iconStyle = _objectSpread({}, style);
  }
  var classes = classNames(prefixCls, (_classNames = {}, _classNames["" + className] = className, _classNames));
  if (typeof size === "number") {
    iconStyle.fontSize = size + "px";
  }
  var iconContent = getIcon(icon || children);
  return /*#__PURE__*/React.createElement("i", _extends({
    ref: ref,
    className: classes,
    style: iconStyle
  }, rest), iconContent);
});
Icon.displayName = "zaui-icon";
export default Icon;