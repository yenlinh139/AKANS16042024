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
var _excluded = ["onChange", "onFocus", "onBlur", "onPressEnter", "onKeyDown", "disabled", "className", "defaultValue", "status", "size"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
var TextArea = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
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
    rest = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  var inputPrefixCls = (0, _class.getPrefixCls)("input");
  var prefixCls = (0, _class.getPrefixCls)("input-textarea");
  var inputClassName = (0, _clsx.default)(prefixCls, className);
  var _useMergedState = (0, _useMergedState2.default)(defaultValue, {
      value: props.value
    }),
    value = _useMergedState[0],
    setValue = _useMergedState[1];
  var _useState = (0, _react.useState)(false),
    focused = _useState[0],
    setFocused = _useState[1];
  var textareaRef = (0, _react.useRef)(null);
  var focus = function focus(option) {
    if (textareaRef.current) {
      (0, _commonUtils.triggerFocus)(textareaRef.current, option);
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
      var _textareaRef$current, _textareaRef$current2;
      if (textareaRef.current && ((_textareaRef$current = textareaRef.current) == null ? void 0 : _textareaRef$current.getAttribute("type")) === "password" && (_textareaRef$current2 = textareaRef.current) != null && _textareaRef$current2.hasAttribute("value")) {
        var _textareaRef$current3;
        (_textareaRef$current3 = textareaRef.current) == null || _textareaRef$current3.removeAttribute("value");
      }
    }));
  };
  (0, _react.useImperativeHandle)(ref, function () {
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
    if (textareaRef.current) {
      (0, _commonUtils.resolveOnChange)(textareaRef.current, e, onChange);
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
      (0, _commonUtils.resolveOnChange)(textareaRef.current, e, onChange);
    }
  };
  var getInputElement = function getInputElement() {
    var _classNames;
    var otherProps = (0, _omit.default)(props, ["onPressEnter", "prefix", "suffix", "clearable", "status", "helperText", "errorText", "size",
    // Input elements must be either controlled or uncontrolled,
    // specify either the value prop, or the defaultValue prop, but not both.
    "defaultValue", "affixWrapperClassName", "groupClassName", "inputClassName", "wrapperClassName", "showCount"]);
    return /*#__PURE__*/_react.default.createElement("textarea", (0, _extends2.default)({}, otherProps, {
      onChange: handleChange,
      onFocus: handleFocus,
      onBlur: handleBlur,
      onKeyDown: handleKeyDown,
      className: (0, _clsx.default)(inputPrefixCls, (_classNames = {}, _classNames[inputPrefixCls + "-small"] = mergedSize === "small", _classNames[inputPrefixCls + "-large"] = mergedSize === "large", _classNames[inputPrefixCls + "-disabled"] = mergedDisabled, _classNames), !!value && (0, _statusUtils.getStatusClassNames)(inputPrefixCls, mergedStatus), inputClassName, className),
      ref: textareaRef
    }));
  };
  return /*#__PURE__*/_react.default.createElement(_ClearableLabeledBaseInput.default, (0, _extends2.default)({}, rest, {
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
var _default = exports.default = TextArea;