"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireWildcard(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _icon = _interopRequireDefault(require("../icon"));
var _class = require("../../utils/class");
var _propsType = require("./props-type");
var _context = _interopRequireDefault(require("./context"));
var _constants = require("./common/constants");
var _progress = _interopRequireDefault(require("../progress"));
var _icons = _interopRequireDefault(require("./icons"));
var _CountDown = _interopRequireDefault(require("./CountDown"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2.default)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var BaseSnackbar = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var _classNames, _classNames2;
  var text = props.text,
    prefixIcon = props.prefixIcon,
    action = props.action,
    icon = props.icon,
    verticalAction = props.verticalAction,
    style = props.style,
    className = props.className,
    type = props.type,
    position = props.position,
    _props$downloadProgre = props.downloadProgress,
    downloadProgress = _props$downloadProgre === void 0 ? 0 : _props$downloadProgre,
    duration = props.duration,
    zIndex = props.zIndex;
  var snackbarContext = (0, _react.useContext)(_context.default);
  var validPosition = Object.values(_propsType.SnackbarPosition).includes(position) ? position : _constants.DEFAULT_POSITION;
  var prefixCls = (0, _class.getPrefixCls)("snackbar");
  var defaultIcon;
  if (type !== _propsType.SnackbarType.default && type !== _propsType.SnackbarType.countdown) {
    defaultIcon = (0, _icons.default)(type);
  }
  if (type === _propsType.SnackbarType.countdown) {
    defaultIcon = /*#__PURE__*/_react.default.createElement(_CountDown.default, {
      duration: duration || _constants.DEFAULT_COUNTDOWN_DURATION
    });
  }
  var textOnly = !icon && !defaultIcon && !prefixIcon && !action;
  var cls = (0, _clsx.default)(prefixCls, className, (_classNames = {}, _classNames[prefixCls + "-vertical-action"] = verticalAction, _classNames[prefixCls + "-" + validPosition] = validPosition, _classNames[prefixCls + "-text-only"] = textOnly, _classNames));
  var iconEl = prefixIcon || defaultIcon || (icon ? /*#__PURE__*/_react.default.createElement(_icon.default, {
    icon: "zi-info-circle-solid"
  }) : null);
  var progressBar = type === _propsType.SnackbarType.download ? /*#__PURE__*/_react.default.createElement(_progress.default, {
    className: prefixCls + "-progress",
    maxCompleted: 100,
    completed: downloadProgress
  }) : null;
  var onClickAction = function onClickAction(event) {
    event.preventDefault();
    if (action && action.close && snackbarContext) {
      snackbarContext.closeSnackbar == null || snackbarContext.closeSnackbar();
    }
    action == null || action.onClick == null || action.onClick(event);
  };
  var iconClass = (0, _clsx.default)(prefixCls + "-prefix-icon", (_classNames2 = {}, _classNames2[prefixCls + "-success"] = type === _propsType.SnackbarType.success, _classNames2[prefixCls + "-error"] = type === _propsType.SnackbarType.error, _classNames2[prefixCls + "-warning"] = type === _propsType.SnackbarType.warning, _classNames2[prefixCls + "-info"] = type === _propsType.SnackbarType.info, _classNames2[prefixCls + "-download"] = type === _propsType.SnackbarType.download, _classNames2[prefixCls + "-success"] = type === _propsType.SnackbarType.success, _classNames2[prefixCls + "-wifi-connected"] = type === _propsType.SnackbarType["wifi-connected"], _classNames2[prefixCls + "-wifi-disconnected"] = type === _propsType.SnackbarType["wifi-disconnected"], _classNames2[prefixCls + "-loading"] = type === _propsType.SnackbarType.loading, _classNames2));
  var elStyle = {};
  if (style) {
    elStyle = _objectSpread({}, style);
  }
  if (zIndex) {
    elStyle.zIndex = zIndex;
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: cls,
    ref: ref,
    style: elStyle
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: prefixCls + "-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: prefixCls + "-desc-wrapper"
  }, iconEl && /*#__PURE__*/_react.default.createElement("div", {
    className: iconClass
  }, iconEl), text && /*#__PURE__*/_react.default.createElement("div", {
    className: prefixCls + "-desc"
  }, text)), progressBar), action && /*#__PURE__*/_react.default.createElement("div", {
    role: "presentation",
    className: prefixCls + "-action",
    onClick: onClickAction
  }, action.text));
});
BaseSnackbar.displayName = "zaui-snackbar";
var _default = exports.default = BaseSnackbar;