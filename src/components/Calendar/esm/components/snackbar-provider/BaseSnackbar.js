import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import React, { useContext } from "react";
import classNames from "clsx";
import Icon from "../icon";
import { getPrefixCls } from "../../utils/class";
import { SnackbarType, SnackbarPosition } from "./props-type";
import context from "./context";
import { DEFAULT_COUNTDOWN_DURATION, DEFAULT_POSITION } from "./common/constants";
import Progress from "../progress";
import getIcon from "./icons";
import CountDown from "./CountDown";
var BaseSnackbar = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
  var snackbarContext = useContext(context);
  var validPosition = Object.values(SnackbarPosition).includes(position) ? position : DEFAULT_POSITION;
  var prefixCls = getPrefixCls("snackbar");
  var defaultIcon;
  if (type !== SnackbarType.default && type !== SnackbarType.countdown) {
    defaultIcon = getIcon(type);
  }
  if (type === SnackbarType.countdown) {
    defaultIcon = /*#__PURE__*/React.createElement(CountDown, {
      duration: duration || DEFAULT_COUNTDOWN_DURATION
    });
  }
  var textOnly = !icon && !defaultIcon && !prefixIcon && !action;
  var cls = classNames(prefixCls, className, (_classNames = {}, _classNames[prefixCls + "-vertical-action"] = verticalAction, _classNames[prefixCls + "-" + validPosition] = validPosition, _classNames[prefixCls + "-text-only"] = textOnly, _classNames));
  var iconEl = prefixIcon || defaultIcon || (icon ? /*#__PURE__*/React.createElement(Icon, {
    icon: "zi-info-circle-solid"
  }) : null);
  var progressBar = type === SnackbarType.download ? /*#__PURE__*/React.createElement(Progress, {
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
  var iconClass = classNames(prefixCls + "-prefix-icon", (_classNames2 = {}, _classNames2[prefixCls + "-success"] = type === SnackbarType.success, _classNames2[prefixCls + "-error"] = type === SnackbarType.error, _classNames2[prefixCls + "-warning"] = type === SnackbarType.warning, _classNames2[prefixCls + "-info"] = type === SnackbarType.info, _classNames2[prefixCls + "-download"] = type === SnackbarType.download, _classNames2[prefixCls + "-success"] = type === SnackbarType.success, _classNames2[prefixCls + "-wifi-connected"] = type === SnackbarType["wifi-connected"], _classNames2[prefixCls + "-wifi-disconnected"] = type === SnackbarType["wifi-disconnected"], _classNames2[prefixCls + "-loading"] = type === SnackbarType.loading, _classNames2));
  var elStyle = {};
  if (style) {
    elStyle = _objectSpread({}, style);
  }
  if (zIndex) {
    elStyle.zIndex = zIndex;
  }
  return /*#__PURE__*/React.createElement("div", {
    className: cls,
    ref: ref,
    style: elStyle
  }, /*#__PURE__*/React.createElement("div", {
    className: prefixCls + "-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: prefixCls + "-desc-wrapper"
  }, iconEl && /*#__PURE__*/React.createElement("div", {
    className: iconClass
  }, iconEl), text && /*#__PURE__*/React.createElement("div", {
    className: prefixCls + "-desc"
  }, text)), progressBar), action && /*#__PURE__*/React.createElement("div", {
    role: "presentation",
    className: prefixCls + "-action",
    onClick: onClickAction
  }, action.text));
});
BaseSnackbar.displayName = "zaui-snackbar";
export default BaseSnackbar;