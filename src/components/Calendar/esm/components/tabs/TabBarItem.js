import React from "react";
import classNames from "clsx";
import { getPrefixCls } from "../../utils/class";
var TabBarItem = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _classNames;
  var id = props.id,
    style = props.style,
    _props$tab = props.tab,
    key = _props$tab.key,
    disabled = _props$tab.disabled,
    label = _props$tab.label,
    onClick = props.onClick,
    onFocus = props.onFocus,
    active = props.active;
  var prefixCls = getPrefixCls("tabs-tabbar-item");
  var cls = classNames(prefixCls, (_classNames = {}, _classNames[prefixCls + "-active"] = active, _classNames));
  var onInternalClick = function onInternalClick(e) {
    if (disabled) {
      return;
    }
    onClick == null || onClick(e);
  };
  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/interactive-supports-focus
    React.createElement("div", {
      ref: ref,
      key: key,
      className: cls,
      style: style,
      "aria-controls": id && id + "-tab-" + key,
      tabIndex: disabled ? undefined : 0,
      "aria-disabled": disabled,
      onClick: function onClick(e) {
        e.stopPropagation();
        onInternalClick(e);
      },
      role: "tab",
      onFocus: onFocus
    }, label)
  );
});
TabBarItem.displayName = "zaui-tabbar-item";
export default TabBarItem;