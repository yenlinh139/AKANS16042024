import React, { useCallback, useLayoutEffect, useMemo, useState } from "react";
import classNames from "clsx";
import GroupContext from "./context";
import { getPrefixCls } from "../../utils/class";
import Radio from "./Radio";
var RadioGroup = function RadioGroup(props) {
  var className = props.className,
    options = props.options,
    disabled = props.disabled,
    children = props.children,
    size = props.size,
    name = props.name,
    style = props.style,
    propValue = props.value,
    defaultValue = props.defaultValue;
  var _useState = useState(propValue || defaultValue),
    value = _useState[0],
    setValue = _useState[1];
  var onRadioChange = useCallback(function (e) {
    var lastValue = value;
    var val = e.target.value;
    if (!("value" in props)) {
      setValue(val);
    }
    var onChange = props.onChange;
    if (onChange && val !== lastValue) {
      onChange(val);
    }
  }, [props, value]);
  useLayoutEffect(function () {
    if (propValue) {
      setValue(propValue);
    }
  }, [propValue]);
  var prefixCls = getPrefixCls("radio-group");
  var childrenRadio = children;
  if (options && options.length > 0) {
    childrenRadio = options.map(function (option) {
      return /*#__PURE__*/React.createElement(Radio, {
        key: "radio-group-value-options-" + option.value,
        className: prefixCls + "-item",
        disabled: option.disabled || disabled,
        value: option.value,
        checked: value === option.value,
        style: option.style,
        size: size
      }, option.label);
    });
  }
  var contextValue = useMemo(function () {
    return {
      onChange: onRadioChange,
      value: value,
      disabled: !!disabled,
      name: name,
      size: size
    };
  }, [disabled, name, onRadioChange, size, value]);
  var cls = classNames(prefixCls, className);
  return /*#__PURE__*/React.createElement("div", {
    className: cls,
    style: style
  }, /*#__PURE__*/React.createElement(GroupContext.Provider, {
    value: contextValue
  }, childrenRadio));
};
export default RadioGroup;