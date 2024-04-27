import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["className", "defaultValue", "children", "options", "onChange"];
import React, { useCallback, useEffect, useMemo, useState } from "react";
import classNames from "clsx";
import { getPrefixCls } from "../../utils/class";
import { GroupContext } from "./context";
import Checkbox from "./Checkbox";
var Group = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var className = props.className,
    defaultValue = props.defaultValue,
    children = props.children,
    _props$options = props.options,
    options = _props$options === void 0 ? [] : _props$options,
    onChange = props.onChange,
    restProps = _objectWithoutPropertiesLoose(props, _excluded);
  var inputChildren = children;
  var _useState = useState(restProps.value || defaultValue || []),
    value = _useState[0],
    setValue = _useState[1];
  var _React$useState = React.useState([]),
    registeredValues = _React$useState[0],
    setRegisteredValues = _React$useState[1];
  useEffect(function () {
    if ("value" in restProps) {
      setValue(restProps.value || []);
    }
  }, [restProps, restProps.value]);
  var prefixCls = getPrefixCls("checkbox-group");
  var cls = classNames(prefixCls, className);
  var getOptions = useCallback(function () {
    return options.map(function (option) {
      if (typeof option === "string" || typeof option === "number") {
        return {
          label: option,
          value: option
        };
      }
      return option;
    });
  }, [options]);
  if (options && options.length > 0) {
    inputChildren = getOptions().map(function (option) {
      return /*#__PURE__*/React.createElement(Checkbox, {
        key: option.value.toString(),
        disabled: "disabled" in option ? option.disabled : restProps.disabled,
        name: option.name,
        value: option.value,
        checked: value.indexOf(option.value) !== -1,
        onChange: option.onChange,
        className: classNames(prefixCls + "-item", option.className),
        style: option.style,
        label: option.label
      });
    });
  }
  var registerValue = useCallback(function (val) {
    setRegisteredValues(function (vals) {
      return [].concat(vals, [val]);
    });
  }, []);
  var toggleOption = useCallback(function (option) {
    var optionIndex = value.indexOf(option.value);
    var newValue = [].concat(value);
    if (optionIndex === -1) {
      newValue.push(option.value);
    } else {
      newValue.splice(optionIndex, 1);
    }
    if (!("value" in restProps)) {
      setValue(newValue);
    }
    var opts = getOptions();
    onChange == null || onChange(newValue.filter(function (val) {
      return registeredValues.indexOf(val) !== -1;
    }).sort(function (a, b) {
      var indexA = opts.findIndex(function (opt) {
        return opt.value === a;
      });
      var indexB = opts.findIndex(function (opt) {
        return opt.value === b;
      });
      return indexA - indexB;
    }));
  }, [getOptions, onChange, registeredValues, restProps, value]);
  var contextValue = useMemo(function () {
    return {
      value: value,
      disabled: restProps.disabled,
      name: restProps.name,
      toggleOption: toggleOption,
      registerValue: registerValue,
      size: restProps.size
    };
  }, [value, restProps.disabled, restProps.name, toggleOption, registerValue, restProps.size]);
  return /*#__PURE__*/React.createElement("div", {
    className: cls,
    ref: ref
  }, /*#__PURE__*/React.createElement(GroupContext.Provider, {
    value: contextValue
  }, inputChildren));
});
Group.displayName = "zaui-checkbox-group";
export default Group;