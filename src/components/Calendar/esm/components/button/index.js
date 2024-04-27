import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["children", "prefixIcon", "suffixIcon", "icon", "fullWidth", "loading", "disabled", "type", "size", "className", "variant", "htmlType", "onClick"];
import React from "react";
import classNames from "clsx";
import { getPrefixCls } from "../../utils/class";
import LoadingIcon from "./loading-icon";
/**
 * @category General
 * @subcategory Button
 * @component
 *
 * @example
import React from "react";
import { Page, Button } from "zmp-ui";

function HomePage(props){
    return (
        <Page>
            <Button size="large">Button</Button>
        </Page>
    );
}
 */
var Button = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _classNames;
  var children = props.children,
    prefixIcon = props.prefixIcon,
    suffixIcon = props.suffixIcon,
    icon = props.icon,
    fullWidth = props.fullWidth,
    loading = props.loading,
    disabled = props.disabled,
    type = props.type,
    size = props.size,
    className = props.className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? "primary" : _props$variant,
    _props$htmlType = props.htmlType,
    htmlType = _props$htmlType === void 0 ? "button" : _props$htmlType,
    onClick = props.onClick,
    rest = _objectWithoutPropertiesLoose(props, _excluded);
  var prefixCls = getPrefixCls("btn");
  var buttonRef = ref || /*#__PURE__*/React.createRef();
  var cls = classNames(prefixCls, (_classNames = {}, _classNames[prefixCls + "-highlight"] = type === "highlight", _classNames[prefixCls + "-danger"] = type === "danger", _classNames[prefixCls + "-neutral"] = type === "neutral", _classNames[prefixCls + "-primary"] = variant === "primary", _classNames[prefixCls + "-secondary"] = variant === "secondary", _classNames[prefixCls + "-tertiary"] = variant === "tertiary", _classNames[prefixCls + "-disabled"] = disabled, _classNames[prefixCls + "-loading"] = loading && !disabled, _classNames[prefixCls + "-icon-only"] = icon, _classNames[prefixCls + "-suffix-icon"] = suffixIcon, _classNames[prefixCls + "-prefix-icon"] = prefixIcon, _classNames[prefixCls + "-small"] = size === "small", _classNames[prefixCls + "-medium"] = size === "medium", _classNames[prefixCls + "-large"] = size === "large", _classNames[prefixCls + "-full-width"] = fullWidth, _classNames[prefixCls + "-prefix-icon"] = prefixIcon, _classNames[prefixCls + "-suffix-icon"] = suffixIcon, _classNames[prefixCls + "-icon-only"] = icon, _classNames["" + className] = className, _classNames));
  var onClickHandler = function onClickHandler(event) {
    if (onClick && typeof onClick === "function") {
      onClick(event);
    }
  };
  var buttonChildren = function buttonChildren() {
    if (icon && !loading) {
      return /*#__PURE__*/React.createElement("div", {
        className: prefixCls + "-container"
      }, /*#__PURE__*/React.createElement("span", {
        className: prefixCls + "-icon"
      }, icon));
    }
    return /*#__PURE__*/React.createElement("div", {
      className: prefixCls + "-container"
    }, loading && !disabled && /*#__PURE__*/React.createElement("span", {
      className: prefixCls + "-loading-container"
    }, /*#__PURE__*/React.createElement("span", {
      role: "img",
      className: prefixCls + "-loading-icon"
    }, /*#__PURE__*/React.createElement(LoadingIcon, null))), prefixIcon && /*#__PURE__*/React.createElement("span", {
      className: prefixCls + "-icon"
    }, prefixIcon), /*#__PURE__*/React.createElement("span", null, children), suffixIcon && /*#__PURE__*/React.createElement("span", {
      className: prefixCls + "-icon"
    }, suffixIcon));
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    onClick: onClickHandler,
    className: cls,
    ref: buttonRef,
    type: htmlType,
    disabled: disabled
  }, rest), buttonChildren());
});
Button.displayName = "zaui-button";
export default Button;