"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _clsx = _interopRequireDefault(require("clsx"));
var _react = _interopRequireWildcard(require("react"));
var _useMergedState2 = _interopRequireDefault(require("../../hooks/useMergedState"));
var _class = require("../../utils/class");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/* eslint-disable react/no-array-index-key */

var OTP = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var disabled = props.disabled,
    _props$otpLength = props.otpLength,
    otpLength = _props$otpLength === void 0 ? 4 : _props$otpLength,
    _props$show = props.show,
    show = _props$show === void 0 ? false : _props$show,
    defaultValue = props.defaultValue,
    onChange = props.onChange,
    rawValue = props.value,
    readOnly = props.readOnly,
    className = props.className,
    style = props.style,
    id = props.id;
  var inputRef = _react.default.useRef(null);
  var inputPrefixCls = (0, _class.getPrefixCls)("input");
  var prefixCls = (0, _class.getPrefixCls)("input-otp");
  var _useMergedState = (0, _useMergedState2.default)(defaultValue || "", {
      value: rawValue
    }),
    value = _useMergedState[0],
    setValue = _useMergedState[1];
  var _useState = (0, _react.useState)(false),
    isFocus = _useState[0],
    setIsFocus = _useState[1];
  var _useState2 = (0, _react.useState)(null),
    focusIndex = _useState2[0],
    setFocusIndex = _useState2[1];
  var handleFocus = (0, _react.useCallback)(function () {
    var _inputRef$current;
    if (disabled || readOnly) return;
    setIsFocus(true);
    (_inputRef$current = inputRef.current) == null || _inputRef$current.focus();
  }, [disabled, readOnly]);
  var handleSetFocusIndex = (0, _react.useCallback)(function (selectedIndex) {
    var len = value.length;
    if (selectedIndex && len > selectedIndex && len - selectedIndex <= 1) {
      setFocusIndex(selectedIndex);
    } else if (len === otpLength) {
      setFocusIndex(len - 1);
    } else {
      setFocusIndex(len);
    }
  }, [value, otpLength]);
  var handleRawInputChange = (0, _react.useCallback)(function (event) {
    var inputValue = event.target.value;
    if (inputValue.length <= otpLength) {
      setValue(inputValue);
      setFocusIndex(inputValue.length);
      onChange == null || onChange(event);
    }
  }, [otpLength, setValue, onChange]);
  var handleClickOtpItem = (0, _react.useCallback)(function (selectedIndex) {
    handleSetFocusIndex(selectedIndex);
    handleFocus();
  }, [handleSetFocusIndex, handleFocus]);
  (0, _react.useImperativeHandle)(ref, function () {
    return {
      el: inputRef.current,
      focus: function focus() {
        handleSetFocusIndex();
        handleFocus();
      },
      blur: function blur() {
        var _inputRef$current2;
        (_inputRef$current2 = inputRef.current) == null || _inputRef$current2.blur();
      }
    };
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)(prefixCls + "-wrapper")
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "number",
    inputMode: "numeric",
    pattern: "[0-9]*",
    autoComplete: "one-time-code",
    maxLength: otpLength,
    ref: inputRef,
    disabled: disabled,
    onFocus: function onFocus() {
      return handleFocus();
    },
    onBlur: function onBlur() {
      return setIsFocus(false);
    },
    value: value,
    onChange: handleRawInputChange,
    readOnly: readOnly,
    className: (0, _clsx.default)(prefixCls + "-hidden-input"),
    id: id
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)(prefixCls + "-list")
  }, Array(otpLength).fill("").map(function (_, index) {
    var _classNames;
    var num = value.slice(index, index + 1);
    var focus = focusIndex === index && isFocus;
    return /*#__PURE__*/_react.default.createElement("div", {
      role: "presentation",
      onClick: function onClick() {
        return handleClickOtpItem(index);
      },
      key: index,
      className: (0, _clsx.default)(inputPrefixCls, prefixCls, (_classNames = {}, _classNames[inputPrefixCls + "-disabled"] = disabled, _classNames[prefixCls + "-active"] = focus && !disabled, _classNames[prefixCls + "-cursor"] = focus && !num && !disabled, _classNames), className),
      style: style
    }, num ? show ? num : /*#__PURE__*/_react.default.createElement("span", {
      className: prefixCls + "-dot"
    }) : "");
  })));
});
OTP.defaultProps = {
  otpLength: 4,
  show: false
};
var _default = exports.default = OTP;