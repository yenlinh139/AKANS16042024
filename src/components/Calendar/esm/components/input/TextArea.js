import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["onChange", "onFocus", "onBlur", "onPressEnter", "onKeyDown", "disabled", "className", "defaultValue", "status", "size"];
import React, { useRef, useState, forwardRef, useImperativeHandle, useEffect } from "react";
import classNames from "clsx";
import { resolveOnChange, triggerFocus } from "./utils/commonUtils";
import omit from "../../utils/omit";
import useMergedState from "../../hooks/useMergedState";
import { getPrefixCls } from "../../utils/class";
import { getMergedStatus, getStatusClassNames } from "../../utils/statusUtils";
import DisabledContext from "../../config-provider/DisabledContext";
import SizeContext from "../../config-provider/SizeContext";
import ClearableLabeledBaseInput from "./ClearableLabeledBaseInput";
var TextArea = /*#__PURE__*/forwardRef(function (props, ref) {
  var onChange = props.onChange,
    onFocus = props.onFocus,
    onBlur = props.onBlur,
    onPressEnter = props.onPressEnter,
    onKeyDown = props.onKeyDown,
    customDisabled = props.disabled,
    className = props.className,
    defaultValue = props.defaultValue,
    customStatus = props.status,
    customSize = props.size,
    rest = _objectWithoutPropertiesLoose(props, _excluded);
  var inputPrefixCls = getPrefixCls("input");
  var prefixCls = getPrefixCls("input-textarea");
  var inputClassName = classNames(prefixCls, className);
  var _useMergedState = useMergedState(defaultValue, {
      value: props.value
    }),
    value = _useMergedState[0],
    setValue = _useMergedState[1];
  var _useState = useState(false),
    focused = _useState[0],
    setFocused = _useState[1];
  var textareaRef = useRef(null);
  var focus = function focus(option) {
    if (textareaRef.current) {
      triggerFocus(textareaRef.current, option);
    }
  };

  // ===================== Size =====================
  var size = React.useContext(SizeContext);
  var mergedSize = customSize || size;

  // ===================== Disabled =====================
  var disabled = React.useContext(DisabledContext);
  var mergedDisabled = customDisabled || disabled;

  // ===================== Status =====================
  var contextStatus = "";
  var mergedStatus = getMergedStatus(contextStatus, customStatus);

  // ===================== Remove Password value =====================
  var removePasswordTimeoutRef = useRef([]);
  var removePasswordTimeout = function removePasswordTimeout() {
    removePasswordTimeoutRef.current.push(window.setTimeout(function () {
      var _textareaRef$current, _textareaRef$current2;
      if (textareaRef.current && ((_textareaRef$current = textareaRef.current) == null ? void 0 : _textareaRef$current.getAttribute("type")) === "password" && (_textareaRef$current2 = textareaRef.current) != null && _textareaRef$current2.hasAttribute("value")) {
        var _textareaRef$current3;
        (_textareaRef$current3 = textareaRef.current) == null || _textareaRef$current3.removeAttribute("value");
      }
    }));
  };
  useImperativeHandle(ref, function () {
    return {
      focus: focus,
      blur: function blur() {
        var _textareaRef$current4;
        (_textareaRef$current4 = textareaRef.current) == null || _textareaRef$current4.blur();
      },
      setSelectionRange: function setSelectionRange(start, end, direction) {
        var _textareaRef$current5;
        (_textareaRef$current5 = textareaRef.current) == null || _textareaRef$current5.setSelectionRange(start, end, direction);
      },
      select: function select() {
        var _textareaRef$current6;
        (_textareaRef$current6 = textareaRef.current) == null || _textareaRef$current6.select();
      },
      textarea: textareaRef.current
    };
  });
  useEffect(function () {
    setFocused(function (prev) {
      return prev && mergedDisabled ? false : prev;
    });
  }, [mergedDisabled]);
  useEffect(function () {
    removePasswordTimeout();
    return function () {
      return removePasswordTimeoutRef.current.forEach(function (item) {
        return window.clearTimeout(item);
      });
    };
  }, []);
  var handleChange = function handleChange(e) {
    if (props.value === undefined) {
      setValue(e.target.value);
    }
    if (textareaRef.current) {
      resolveOnChange(textareaRef.current, e, onChange);
    }
  };
  var handleKeyDown = function handleKeyDown(e) {
    if (onPressEnter && e.key === "Enter") {
      onPressEnter(e);
    }
    onKeyDown == null || onKeyDown(e);
  };
  var handleFocus = function handleFocus(e) {
    setFocused(true);
    removePasswordTimeout();
    onFocus == null || onFocus(e);
  };
  var handleBlur = function handleBlur(e) {
    setFocused(false);
    removePasswordTimeout();
    onBlur == null || onBlur(e);
  };
  var handleReset = function handleReset(e) {
    setValue("");
    focus();
    if (textareaRef.current) {
      resolveOnChange(textareaRef.current, e, onChange);
    }
  };
  var getInputElement = function getInputElement() {
    var _classNames;
    var otherProps = omit(props, ["onPressEnter", "prefix", "suffix", "clearable", "status", "helperText", "errorText", "size",
    // Input elements must be either controlled or uncontrolled,
    // specify either the value prop, or the defaultValue prop, but not both.
    "defaultValue", "affixWrapperClassName", "groupClassName", "inputClassName", "wrapperClassName", "showCount"]);
    return /*#__PURE__*/React.createElement("textarea", _extends({}, otherProps, {
      onChange: handleChange,
      onFocus: handleFocus,
      onBlur: handleBlur,
      onKeyDown: handleKeyDown,
      className: classNames(inputPrefixCls, (_classNames = {}, _classNames[inputPrefixCls + "-small"] = mergedSize === "small", _classNames[inputPrefixCls + "-large"] = mergedSize === "large", _classNames[inputPrefixCls + "-disabled"] = mergedDisabled, _classNames), !!value && getStatusClassNames(inputPrefixCls, mergedStatus), inputClassName, className),
      ref: textareaRef
    }));
  };
  return /*#__PURE__*/React.createElement(ClearableLabeledBaseInput, _extends({}, rest, {
    prefixCls: inputPrefixCls,
    className: className,
    inputElement: getInputElement(),
    handleReset: handleReset,
    value: value,
    focused: focused,
    triggerFocus: focus,
    disabled: mergedDisabled || undefined,
    status: mergedStatus,
    affixWrapperClassName: prefixCls + "-affix-wrapper"
  }));
});
export default TextArea;