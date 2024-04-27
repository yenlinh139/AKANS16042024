"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _context = _interopRequireDefault(require("./context"));
var _class = require("../../utils/class");
var _Radio = _interopRequireDefault(require("./Radio"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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
  var _useState = (0, _react.useState)(propValue || defaultValue),
    value = _useState[0],
    setValue = _useState[1];
  var onRadioChange = (0, _react.useCallback)(function (e) {
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
  (0, _react.useLayoutEffect)(function () {
    if (propValue) {
      setValue(propValue);
    }
  }, [propValue]);
  var prefixCls = (0, _class.getPrefixCls)("radio-group");
  var childrenRadio = children;
  if (options && options.length > 0) {
    childrenRadio = options.map(function (option) {
      return /*#__PURE__*/_react.default.createElement(_Radio.default, {
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
  var contextValue = (0, _react.useMemo)(function () {
    return {
      onChange: onRadioChange,
      value: value,
      disabled: !!disabled,
      name: name,
      size: size
    };
  }, [disabled, name, onRadioChange, size, value]);
  var cls = (0, _clsx.default)(prefixCls, className);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: cls,
    style: style
  }, /*#__PURE__*/_react.default.createElement(_context.default.Provider, {
    value: contextValue
  }, childrenRadio));
};
var _default = exports.default = RadioGroup;