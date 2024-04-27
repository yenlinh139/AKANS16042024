import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["className", "children", "disabled", "style", "defaultChecked", "size", "label", "indeterminate"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import React, { useContext, useEffect, useImperativeHandle, useRef, useState } from "react";
import classNames from "clsx";
import { getPrefixCls } from "../../utils/class";
import { GroupContext } from "./context";
import TickIcon from "./TickIcon";
var Checkbox = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _classNames;
  var className = props.className,
    children = props.children,
    disabled = props.disabled,
    style = props.style,
    defaultChecked = props.defaultChecked,
    size = props.size,
    label = props.label,
    _props$indeterminate = props.indeterminate,
    indeterminate = _props$indeterminate === void 0 ? false : _props$indeterminate,
    restProps = _objectWithoutPropertiesLoose(props, _excluded);
  var checkboxGroup = useContext(GroupContext);
  var mergedDisabled = disabled || (checkboxGroup == null ? void 0 : checkboxGroup.disabled);
  var checkboxRef = useRef();
  var checkboxProps = _objectSpread({}, restProps);
  if (checkboxGroup) {
    checkboxProps.name = checkboxGroup.name;
    checkboxProps.checked = checkboxGroup.value.indexOf(restProps.value) !== -1;
  }
  var _useState = useState("checked" in restProps ? restProps.checked : defaultChecked),
    checked = _useState[0],
    setChecked = _useState[1];
  useEffect(function () {
    checkboxGroup == null || checkboxGroup.registerValue == null || checkboxGroup.registerValue(restProps.value);
  }, []);
  useImperativeHandle(ref, function () {
    return checkboxRef == null ? void 0 : checkboxRef.current;
  });
  var prefixCls = getPrefixCls("checkbox");
  var checkboxSize = size || (checkboxGroup == null ? void 0 : checkboxGroup.size);
  var inputChecked = checkboxProps.checked !== undefined ? checkboxProps.checked : checked;
  var cls = classNames(prefixCls + "-wrapper", (_classNames = {}, _classNames[prefixCls + "-checked"] = inputChecked, _classNames[prefixCls + "-disabled"] = mergedDisabled, _classNames[prefixCls + "-" + checkboxSize] = checkboxSize, _classNames[prefixCls + "-indeterminate"] = !inputChecked && indeterminate, _classNames), className);
  var checkboxCls = classNames(["" + prefixCls], {});
  var ariaChecked = indeterminate ? "mixed" : undefined;
  var handleOnChange = function handleOnChange(e) {
    if (!("checked" in checkboxProps)) {
      setChecked(e.target.checked);
    }
    if (checkboxGroup && checkboxGroup.toggleOption) {
      checkboxGroup.toggleOption({
        label: children || label,
        value: restProps.value
      });
    }
    restProps.onChange == null || restProps.onChange({
      target: _objectSpread(_objectSpread({}, props), {}, {
        checked: e.target.checked
      }),
      stopPropagation: function stopPropagation() {
        e.stopPropagation();
      },
      preventDefault: function preventDefault() {
        e.preventDefault();
      },
      nativeEvent: e.nativeEvent
    });
  };
  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    React.createElement("label", {
      className: cls,
      style: style
    }, /*#__PURE__*/React.createElement("span", {
      className: checkboxCls
    }, /*#__PURE__*/React.createElement("input", _extends({}, checkboxProps, {
      className: prefixCls + "-input",
      checked: !!inputChecked,
      ref: checkboxRef,
      type: "checkbox",
      "aria-checked": ariaChecked,
      disabled: disabled,
      onChange: handleOnChange
    })), /*#__PURE__*/React.createElement("span", {
      className: prefixCls + "-inner"
    }, !!inputChecked && /*#__PURE__*/React.createElement("span", {
      className: prefixCls + "-inner-check-icon"
    }, /*#__PURE__*/React.createElement(TickIcon, null)))), (children || label) && /*#__PURE__*/React.createElement("span", null, children || label))
  );
});
Checkbox.displayName = "zaui-checkbox";
export default Checkbox;