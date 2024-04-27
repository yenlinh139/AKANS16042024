import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["className", "dataSource", "renderItem", "children", "divider", "loading", "noSpacing"];
import React from "react";
import classNames from "clsx";
import { getPrefixCls } from "../../utils/class";
import Item from "./item";
function List(props, ref) {
  var _classNames;
  var className = props.className,
    dataSource = props.dataSource,
    renderItem = props.renderItem,
    children = props.children,
    _props$divider = props.divider,
    divider = _props$divider === void 0 ? true : _props$divider,
    loading = props.loading,
    noSpacing = props.noSpacing,
    rest = _objectWithoutPropertiesLoose(props, _excluded);
  var prefixCls = getPrefixCls("list");
  var classes = classNames(prefixCls, (_classNames = {}, _classNames[prefixCls + "-loading"] = loading, _classNames[prefixCls + "-no-divider"] = !divider, _classNames[prefixCls + "-no-spacing"] = !!noSpacing, _classNames["" + className] = className, _classNames));
  return /*#__PURE__*/React.createElement("ul", _extends({
    ref: ref,
    className: classes
  }, rest), dataSource ? dataSource.map(function (item, index) {
    if (renderItem) {
      return renderItem(item, index, loading);
    }
    return /*#__PURE__*/React.createElement(Item, {
      title: item.title,
      prefix: item.prefix,
      suffix: item.suffix,
      subTitle: item.subTitle,
      brackets: item.brackets,
      style: item.style,
      className: item.className,
      id: item.id
    });
  }) : children);
}
var LinkWithRef = /*#__PURE__*/React.forwardRef(List);
LinkWithRef.displayName = "zaui-list";
export default LinkWithRef;