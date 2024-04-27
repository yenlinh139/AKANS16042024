"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _react = _interopRequireWildcard(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _class = require("../../utils/class");
var _context = require("./context");
var _TickIcon = _interopRequireDefault(require("./TickIcon"));
var _excluded = ["className", "children", "disabled", "style", "defaultChecked", "size", "label", "indeterminate"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2.default)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Checkbox = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
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
    restProps = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  var checkboxGroup = (0, _react.useContext)(_context.GroupContext);
  var mergedDisabled = disabled || (checkboxGroup == null ? void 0 : checkboxGroup.disabled);
  var checkboxRef = (0, _react.useRef)();
  var checkboxProps = _objectSpread({}, restProps);
  if (checkboxGroup) {
    checkboxProps.name = checkboxGroup.name;
    checkboxProps.checked = checkboxGroup.value.indexOf(restProps.value) !== -1;
  }
  var _useState = (0, _react.useState)("checked" in restProps ? restProps.checked : defaultChecked),
    checked = _useState[0],
    setChecked = _useState[1];
  (0, _react.useEffect)(function () {
    checkboxGroup == null || checkboxGroup.registerValue == null || checkboxGroup.registerValue(restProps.value);
  }, []);
  (0, _react.useImperativeHandle)(ref, function () {
    return checkboxRef == null ? void 0 : checkboxRef.current;
  });
  var prefixCls = (0, _class.getPrefixCls)("checkbox");
  var checkboxSize = size || (checkboxGroup == null ? void 0 : checkboxGroup.size);
  var inputChecked = checkboxProps.checked !== undefined ? checkboxProps.checked : checked;
  var cls = (0, _clsx.default)(prefixCls + "-wrapper", (_classNames = {}, _classNames[prefixCls + "-checked"] = inputChecked, _classNames[prefixCls + "-disabled"] = mergedDisabled, _classNames[prefixCls + "-" + checkboxSize] = checkboxSize, _classNames[prefixCls + "-indeterminate"] = !inputChecked && indeterminate, _classNames), className);
  var checkboxCls = (0, _clsx.default)(["" + prefixCls], {});
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
    _react.default.createElement("label", {
      className: cls,
      style: style
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: checkboxCls
    }, /*#__PURE__*/_react.default.createElement("input", (0, _extends2.default)({}, checkboxProps, {
      className: prefixCls + "-input",
      checked: !!inputChecked,
      ref: checkboxRef,
      type: "checkbox",
      "aria-checked": ariaChecked,
      disabled: disabled,
      onChange: handleOnChange
    })), /*#__PURE__*/_react.default.createElement("span", {
      className: prefixCls + "-inner"
    }, !!inputChecked && /*#__PURE__*/_react.default.createElement("span", {
      className: prefixCls + "-inner-check-icon"
    }, /*#__PURE__*/_react.default.createElement(_TickIcon.default, null)))), (children || label) && /*#__PURE__*/_react.default.createElement("span", null, children || label))
  );
});
Checkbox.displayName = "zaui-checkbox";
var _default = exports.default = Checkbox;