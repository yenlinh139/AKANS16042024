import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["className", "children", "style", "size"];
import React from "react";
import classNames from "clsx";
import { getPrefixCls } from "../../utils/class";
var HeaderText = function HeaderText(props) {
  var _classNames;
  var className = props.className,
    children = props.children,
    style = props.style,
    size = props.size,
    rest = _objectWithoutPropertiesLoose(props, _excluded);
  var prefixCls = getPrefixCls("text-header");
  var cls = classNames(prefixCls, (_classNames = {}, _classNames[prefixCls + "-" + size] = size, _classNames), className);
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    className: cls,
    style: style
  }), children);
};
export default HeaderText;