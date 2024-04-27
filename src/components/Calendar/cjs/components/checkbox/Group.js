"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _react = _interopRequireWildcard(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _class = require("../../utils/class");
var _context = require("./context");
var _Checkbox = _interopRequireDefault(require("./Checkbox"));
var _excluded = ["className", "defaultValue", "children", "options", "onChange"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
var Group = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var className = props.className,
    defaultValue = props.defaultValue,
    children = props.children,
    _props$options = props.options,
    options = _props$options === void 0 ? [] : _props$options,
    onChange = props.onChange,
    restProps = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  var inputChildren = children;
  var _useState = (0, _react.useState)(restProps.value || defaultValue || []),
    value = _useState[0],
    setValue = _useState[1];
  var _React$useState = _react.default.useState([]),
    registeredValues = _React$useState[0],
    setRegisteredValues = _React$useState[1];
  (0, _react.useEffect)(function () {
    if ("value" in restProps) {
      setValue(restProps.value || []);
    }
  }, [restProps, restProps.value]);
  var prefixCls = (0, _class.getPrefixCls)("checkbox-group");
  var cls = (0, _clsx.default)(prefixCls, className);
  var getOptions = (0, _react.useCallback)(function () {
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
      return /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
        key: option.value.toString(),
        disabled: "disabled" in option ? option.disabled : restProps.disabled,
        name: option.name,
        value: option.value,
        checked: value.indexOf(option.value) !== -1,
        onChange: option.onChange,
        className: (0, _clsx.default)(prefixCls + "-item", option.className),
        style: option.style,
        label: option.label
      });
    });
  }
  var registerValue = (0, _react.useCallback)(function (val) {
    setRegisteredValues(function (vals) {
      return [].concat(vals, [val]);
    });
  }, []);
  var toggleOption = (0, _react.useCallback)(function (option) {
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
  var contextValue = (0, _react.useMemo)(function () {
    return {
      value: value,
      disabled: restProps.disabled,
      name: restProps.name,
      toggleOption: toggleOption,
      registerValue: registerValue,
      size: restProps.size
    };
  }, [value, restProps.disabled, restProps.name, toggleOption, registerValue, restProps.size]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: cls,
    ref: ref
  }, /*#__PURE__*/_react.default.createElement(_context.GroupContext.Provider, {
    value: contextValue
  }, inputChildren));
});
Group.displayName = "zaui-checkbox-group";
var _default = exports.default = Group;