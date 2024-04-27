"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _react = _interopRequireWildcard(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _context = _interopRequireDefault(require("./context"));
var _class = require("../../utils/class");
var _excluded = ["className", "children", "style", "disabled", "size", "label", "defaultChecked"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2.default)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Radio = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var _classNames, _classNames2;
  var groupContext = (0, _react.useContext)(_context.default);
  var prefixCls = (0, _class.getPrefixCls)("radio");
  var className = props.className,
    children = props.children,
    style = props.style,
    disabled = props.disabled,
    size = props.size,
    label = props.label,
    defaultChecked = props.defaultChecked,
    restProps = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  var _useState = (0, _react.useState)("checked" in restProps ? restProps.checked : defaultChecked),
    checked = _useState[0],
    setChecked = _useState[1];
  var radioProps = _objectSpread({}, restProps);
  radioProps.disabled = disabled;
  var onChange = function onChange(e) {
    if (!("checked" in radioProps)) {
      setChecked(e.target.checked);
    }
    props.onChange == null || props.onChange(e);
    groupContext == null || groupContext.onChange == null || groupContext.onChange(e);
  };
  if (groupContext) {
    var _props$value, _groupContext$value;
    radioProps.name = groupContext.name;
    radioProps.checked = ((_props$value = props.value) == null ? void 0 : _props$value.toString()) === ((_groupContext$value = groupContext.value) == null ? void 0 : _groupContext$value.toString());
    radioProps.disabled = radioProps.disabled || groupContext.disabled;
  }
  var radioSize = (groupContext == null ? void 0 : groupContext.size) || size;
  var inputChecked = radioProps.checked !== undefined ? radioProps.checked : checked;
  var wrapperCls = (0, _clsx.default)(prefixCls + "-wrapper", (_classNames = {}, _classNames[prefixCls + "-" + radioSize] = radioSize, _classNames), className);
  var radioCls = (0, _clsx.default)(prefixCls, (_classNames2 = {}, _classNames2[prefixCls + "-checked"] = inputChecked, _classNames2[prefixCls + "-disabled"] = radioProps.disabled, _classNames2));
  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    _react.default.createElement("label", {
      className: wrapperCls,
      style: style
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: radioCls
    }, /*#__PURE__*/_react.default.createElement("input", (0, _extends2.default)({}, radioProps, {
      checked: !!inputChecked,
      onChange: onChange,
      type: "radio",
      className: prefixCls + "-input",
      ref: ref
    })), /*#__PURE__*/_react.default.createElement("span", {
      className: prefixCls + "-checkmark"
    })), children !== undefined ? /*#__PURE__*/_react.default.createElement("span", null, children) : /*#__PURE__*/_react.default.createElement("span", null, label))
  );
});
var _default = exports.default = Radio;