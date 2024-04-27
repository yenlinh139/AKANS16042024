"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _react = _interopRequireWildcard(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _commonUtils = require("./utils/commonUtils");
var _omit = _interopRequireDefault(require("../../utils/omit"));
var _useMergedState2 = _interopRequireDefault(require("../../hooks/useMergedState"));
var _class = require("../../utils/class");
var _statusUtils = require("../../utils/statusUtils");
var _DisabledContext = _interopRequireDefault(require("../../config-provider/DisabledContext"));
var _SizeContext = _interopRequireDefault(require("../../config-provider/SizeContext"));
var _ClearableLabeledBaseInput = _interopRequireDefault(require("./ClearableLabeledBaseInput"));
var _excluded = ["onChange", "onFocus", "onBlur", "onPressEnter", "onKeyDown", "type", "disabled", "className", "inputClassName", "defaultValue", "status", "size"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
var Input = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  var onChange = props.onChange,
    onFocus = props.onFocus,
    onBlur = props.onBlur,
    onPressEnter = props.onPressEnter,
    onKeyDown = props.onKeyDown,
    _props$type = props.type,
    type = _props$type === void 0 ? "text" : _props$type,
    customDisabled = props.disabled,
    className = props.className,
    inputClassName = props.inputClassName,
    defaultValue = props.defaultValue,
    customStatus = props.status,
    customSize = props.size,
    rest = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  var prefixCls = (0, _class.getPrefixCls)("input");
  var _useMergedState = (0, _useMergedState2.default)(defaultValue, {
      value: props.value
    }),
    value = _useMergedState[0],
    setValue = _useMergedState[1];
  var _useState = (0, _react.useState)(false),
    focused = _useState[0],
    setFocused = _useState[1];
  var inputRef = (0, _react.useRef)(null);
  var focus = function focus(option) {
    if (inputRef.current) {
      (0, _commonUtils.triggerFocus)(inputRef.current, option);
    }
  };

  // ===================== Size =====================
  var size = _react.default.useContext(_SizeContext.default);
  var mergedSize = customSize || size;

  // ===================== Disabled =====================
  var disabled = _react.default.useContext(_DisabledContext.default);
  var mergedDisabled = customDisabled || disabled;

  // ===================== Status =====================
  var contextStatus = "";
  var mergedStatus = (0, _statusUtils.getMergedStatus)(contextStatus, customStatus);

  // ===================== Remove Password value =====================
  var removePasswordTimeoutRef = (0, _react.useRef)([]);
  var removePasswordTimeout = function removePasswordTimeout() {
    removePasswordTimeoutRef.current.push(window.setTimeout(function () {
      var _inputRef$current, _inputRef$current2;
      if (inputRef.current && ((_inputRef$current = inputRef.current) == null ? void 0 : _inputRef$current.getAttribute("type")) === "password" && (_inputRef$current2 = inputRef.current) != null && _inputRef$current2.hasAttribute("value")) {
        var _inputRef$current3;
        (_inputRef$current3 = inputRef.current) == null || _inputRef$current3.removeAttribute("value");
      }
    }));
  };
  (0, _react.useImperativeHandle)(ref, function () {
    return {
      focus: focus,
      blur: function blur() {
        var _inputRef$current4;
        (_inputRef$current4 = inputRef.current) == null || _inputRef$current4.blur();
      },
      setSelectionRange: function setSelectionRange(start, end, direction) {
        var _inputRef$current5;
        (_inputRef$current5 = inputRef.current) == null || _inputRef$current5.setSelectionRange(start, end, direction);
      },
      select: function select() {
        var _inputRef$current6;
        (_inputRef$current6 = inputRef.current) == null || _inputRef$current6.select();
      },
      input: inputRef.current
    };
  });
  (0, _react.useEffect)(function () {
    setFocused(function (prev) {
      return prev && mergedDisabled ? false : prev;
    });
  }, [mergedDisabled]);
  (0, _react.useEffect)(function () {
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
    if (inputRef.current) {
      (0, _commonUtils.resolveOnChange)(inputRef.current, e, onChange);
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
    if (inputRef.current) {
      (0, _commonUtils.resolveOnChange)(inputRef.current, e, onChange);
    }
  };
  var getInputElement = function getInputElement() {
    var _classNames;
    var otherProps = (0, _omit.default)(props, ["onPressEnter", "prefix", "suffix", "clearable", "status", "helperText", "errorText", "size",
    // Input elements must be either controlled or uncontrolled,
    // specify either the value prop, or the defaultValue prop, but not both.
    "defaultValue", "affixWrapperClassName", "groupClassName", "inputClassName", "wrapperClassName", "onInputTriggerClick"]);
    return /*#__PURE__*/_react.default.createElement("input", (0, _extends2.default)({}, otherProps, {
      onChange: handleChange,
      onFocus: handleFocus,
      onBlur: handleBlur,
      onKeyDown: handleKeyDown,
      className: (0, _clsx.default)(prefixCls, (_classNames = {}, _classNames[prefixCls + "-small"] = mergedSize === "small", _classNames[prefixCls + "-large"] = mergedSize === "large", _classNames[prefixCls + "-disabled"] = mergedDisabled, _classNames), (!!value || mergedStatus === "error") && (0, _statusUtils.getStatusClassNames)(prefixCls, mergedStatus), inputClassName, className),
      ref: inputRef,
      type: type
    }));
  };
  return /*#__PURE__*/_react.default.createElement(_ClearableLabeledBaseInput.default, (0, _extends2.default)({}, rest, {
    prefixCls: prefixCls,
    className: className,
    inputElement: getInputElement(),
    handleReset: handleReset,
    value: value,
    focused: focused,
    triggerFocus: focus,
    disabled: mergedDisabled || undefined,
    status: mergedStatus
  }));
});
Input.defaultProps = {
  onInputTriggerClick: undefined
};
var _default = exports.default = Input;