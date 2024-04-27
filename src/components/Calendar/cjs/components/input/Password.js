"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _react = _interopRequireWildcard(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _eye = _interopRequireDefault(require("./icons/eye"));
var _eyeInvisible = _interopRequireDefault(require("./icons/eye-invisible"));
var _Input = _interopRequireDefault(require("./Input"));
var _class = require("../../utils/class");
var _omit = _interopRequireDefault(require("../../utils/omit"));
var _excluded = ["className", "visibilityToggle"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2.default)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Password = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var _useState = (0, _react.useState)(false),
    visible = _useState[0],
    setVisible = _useState[1];
  var onVisibleChange = function onVisibleChange() {
    var disabled = props.disabled;
    if (disabled) {
      return;
    }
    setVisible(!visible);
  };
  var getIcon = function getIcon(prefixCls) {
    var _props$iconRender = props.iconRender,
      iconRender = _props$iconRender === void 0 ? function () {
        return null;
      } : _props$iconRender;
    var icon = iconRender(visible);
    var iconProps = {
      onClick: onVisibleChange,
      className: prefixCls + "-icon",
      key: "passwordIcon",
      onMouseDown: function onMouseDown(e) {
        e.preventDefault();
      },
      onMouseUp: function onMouseUp(e) {
        e.preventDefault();
      }
    };
    return /*#__PURE__*/_react.default.cloneElement( /*#__PURE__*/_react.default.isValidElement(icon) ? icon : /*#__PURE__*/_react.default.createElement("span", null, icon), iconProps);
  };
  var renderPassword = function renderPassword() {
    var className = props.className,
      visibilityToggle = props.visibilityToggle,
      restProps = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
    var prefixCls = (0, _class.getPrefixCls)("input-password");
    var suffixIcon = visibilityToggle && getIcon(prefixCls);
    var inputClassName = (0, _clsx.default)(prefixCls, className);
    var omittedProps = _objectSpread(_objectSpread({}, (0, _omit.default)(restProps, ["suffix", "iconRender"])), {}, {
      type: visible ? "text" : "password",
      className: inputClassName,
      suffix: suffixIcon
    });
    return /*#__PURE__*/_react.default.createElement(_Input.default, (0, _extends2.default)({
      ref: ref
    }, omittedProps));
  };
  return renderPassword();
});
Password.defaultProps = {
  visibilityToggle: true,
  iconRender: function iconRender(visible) {
    return visible ? /*#__PURE__*/_react.default.createElement(_eye.default, null) : /*#__PURE__*/_react.default.createElement(_eyeInvisible.default, null);
  }
};
var _default = exports.default = Password;