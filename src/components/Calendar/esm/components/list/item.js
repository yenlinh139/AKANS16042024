import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["title", "children", "subTitle", "prefix", "suffix", "brackets", "className", "onClick"];
import React from "react";
import classNames from "clsx";
import { getPrefixCls } from "../../utils/class";
var ListItem = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _classNames;
  var title = props.title,
    children = props.children,
    subTitle = props.subTitle,
    prefix = props.prefix,
    suffix = props.suffix,
    brackets = props.brackets,
    className = props.className,
    onClick = props.onClick,
    rest = _objectWithoutPropertiesLoose(props, _excluded);
  var prefixCls = getPrefixCls("list-item");
  var classes = classNames(prefixCls, (_classNames = {}, _classNames["" + className] = className, _classNames));
  var handleClick = function handleClick(event) {
    if (onClick) {
      onClick(event);
    }
  };
  return /*#__PURE__*/React.createElement("li", _extends({}, rest, {
    role: "presentation",
    onClick: handleClick,
    ref: ref,
    className: classes
  }), prefix && /*#__PURE__*/React.createElement("div", {
    className: prefixCls + "-prefix"
  }, prefix), /*#__PURE__*/React.createElement("div", {
    className: prefixCls + "-right"
  }, /*#__PURE__*/React.createElement("div", {
    className: prefixCls + "-content"
  }, title && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: prefixCls + "-title-container"
  }, title && /*#__PURE__*/React.createElement("span", {
    className: prefixCls + "-title"
  }, title), brackets && /*#__PURE__*/React.createElement("span", {
    className: prefixCls + "-brackets"
  }, "(", brackets, ")")), subTitle && /*#__PURE__*/React.createElement("div", {
    className: prefixCls + "-subtitle"
  }, subTitle)), children), suffix && /*#__PURE__*/React.createElement("div", {
    className: prefixCls + "-suffix"
  }, " ", suffix)));
});
ListItem.displayName = "zaui-list-item";
export default ListItem;