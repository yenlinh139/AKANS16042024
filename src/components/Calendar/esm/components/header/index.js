import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import React from "react";
import classNames from "clsx";
import { useNavigate } from "react-router-dom";
import { getPrefixCls } from "../../utils/class";
import Icon from "../icon";
import Button from "../button";

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
var Header = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var navigate = useNavigate();
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
  var prefixCls = getPrefixCls("header");
  var cls = classNames(prefixCls, {}, className);
  var handleBackClick = function handleBackClick(event) {
    if (onBackClick) {
      onBackClick(event);
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    navigate(-1);
  };
  var backIconEl = backIcon || /*#__PURE__*/React.createElement(Icon, {
    icon: "zi-chevron-left"
  });
  var componentStyle = _objectSpread({}, style);
  if (backgroundColor) {
    componentStyle.backgroundColor = backgroundColor;
  }
  if (textColor) {
    componentStyle.color = textColor;
  }
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: cls,
    style: componentStyle,
    id: id
  }, showBackIcon && /*#__PURE__*/React.createElement("span", {
    className: prefixCls + "-back"
  }, /*#__PURE__*/React.createElement(Button, {
    className: prefixCls + "-back-btn",
    type: "neutral",
    variant: "tertiary",
    onClick: handleBackClick,
    style: {
      color: textColor
    },
    icon: backIconEl
  })), /*#__PURE__*/React.createElement("span", {
    className: prefixCls + "-title"
  }, title));
});
Header.displayName = "zaui-header";
export default Header;