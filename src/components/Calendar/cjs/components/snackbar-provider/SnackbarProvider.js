"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _reactTransitionGroup = require("react-transition-group");
var _propsType = require("./props-type");
var _context = _interopRequireDefault(require("./context"));
var _class = require("../../utils/class");
var _BaseSnackbar = _interopRequireDefault(require("./BaseSnackbar"));
var _constants = require("./common/constants");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
var SnackbarProvider = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var _classNames, _classNames2, _classNames3, _classNames4;
  var _useState = (0, _react.useState)(false),
    open = _useState[0],
    setOpen = _useState[1];
  var _useState2 = (0, _react.useState)(false),
    appearDone = _useState2[0],
    setAppearDone = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    timeoutId = _useState3[0],
    setTimeoutId = _useState3[1];
  var _useState4 = (0, _react.useState)(""),
    text = _useState4[0],
    setText = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    icon = _useState5[0],
    setIcon = _useState5[1];
  var _useState6 = (0, _react.useState)(null),
    prefixIcon = _useState6[0],
    setPrefixIcon = _useState6[1];
  var _useState7 = (0, _react.useState)(_propsType.SnackbarType.default),
    type = _useState7[0],
    setType = _useState7[1];
  var _useState8 = (0, _react.useState)(_propsType.SnackbarPosition.bottom),
    position = _useState8[0],
    setPosition = _useState8[1];
  var _useState9 = (0, _react.useState)(type === _propsType.SnackbarType.countdown ? _constants.DEFAULT_COUNTDOWN_DURATION : _constants.DEFAULT_DURATION),
    duration = _useState9[0],
    setDuration = _useState9[1];
  var snackbarRef = (0, _react.useRef)();
  var _useState10 = (0, _react.useState)(),
    onClose = _useState10[0],
    setOnclose = _useState10[1];
  var _useState11 = (0, _react.useState)(),
    action = _useState11[0],
    setAction = _useState11[1];
  var _useState12 = (0, _react.useState)(false),
    verticalAction = _useState12[0],
    setVerticalAction = _useState12[1];
  var _useState13 = (0, _react.useState)(0),
    downloadCompleted = _useState13[0],
    setDownloadCompleted = _useState13[1];
  (0, _react.useImperativeHandle)(ref, function () {
    return snackbarRef.current;
  });
  var triggerSnackbar = (0, _react.useCallback)(function (option) {
    var snackbarTYpe = option.type;
    var snackbarPos = option.position;
    setText((option == null ? void 0 : option.text) || "");
    setIcon(!!(option != null && option.icon));
    setPrefixIcon(option == null ? void 0 : option.prefixIcon);
    setType(snackbarTYpe || _propsType.SnackbarType.default);
    setDuration((option == null ? void 0 : option.duration) || _constants.DEFAULT_DURATION);
    setPosition(snackbarPos || _constants.DEFAULT_POSITION);
    setAction(option == null ? void 0 : option.action);
    setVerticalAction(!!(option != null && option.verticalAction));
    setOnclose(function () {
      return option == null ? void 0 : option.onClose;
    });
    setDownloadCompleted(0);
  }, []);
  var openSnackbar = (0, _react.useCallback)(function (option) {
    if (open === true) {
      setOpen(false);
      setTimeout(function () {
        triggerSnackbar(option);
        setOpen(true);
      }, _constants.DEFAULT_INTERVAL);
    } else {
      triggerSnackbar(option);
      setOpen(true);
    }
  }, [open, triggerSnackbar]);
  var closeSnackbar = (0, _react.useCallback)(function () {
    setOpen(false);
  }, []);
  var setDownloadProgress = (0, _react.useCallback)(function (completed) {
    setDownloadCompleted(completed);
  }, []);
  var validPosition = Object.values(_propsType.SnackbarPosition).includes(position) ? position : _constants.DEFAULT_POSITION;
  var prefixCls = (0, _class.getPrefixCls)("snackbar");
  var contextValue = (0, _react.useMemo)(function () {
    return {
      openSnackbar: openSnackbar,
      closeSnackbar: closeSnackbar,
      setDownloadProgress: setDownloadProgress
    };
  }, [openSnackbar, closeSnackbar, setDownloadProgress]);
  var children = props.children,
    className = props.className,
    style = props.style,
    zIndex = props.zIndex;
  return /*#__PURE__*/_react.default.createElement(_context.default.Provider, {
    value: contextValue
  }, children, /*#__PURE__*/_react.default.createElement(_reactTransitionGroup.CSSTransition, {
    in: open,
    timeout: {
      enter: 100,
      exit: 100,
      appear: 100
    },
    mountOnEnter: true,
    unmountOnExit: true,
    onEntered: function onEntered() {
      return setAppearDone(true);
    },
    onExited: function onExited() {
      return setAppearDone(false);
    },
    onEnter: function onEnter() {
      clearTimeout(timeoutId);
      var timeout = type === _propsType.SnackbarType.countdown ? duration + 1000 : duration;
      setTimeoutId(setTimeout(function () {
        setOpen(false);
      }, timeout));
    },
    onExit: function onExit() {
      onClose == null || onClose();
    },
    classNames: {
      enter: (0, _clsx.default)(prefixCls + "-enter", (_classNames = {}, _classNames[prefixCls + "-enter-" + validPosition] = validPosition, _classNames)),
      enterActive: (0, _clsx.default)(prefixCls + "-enter-active", (_classNames2 = {}, _classNames2[prefixCls + "-enter-active-" + validPosition] = validPosition, _classNames2)),
      exitActive: (0, _clsx.default)(prefixCls + "-exit-active", (_classNames3 = {}, _classNames3[prefixCls + "-exit-active-" + validPosition] = validPosition, _classNames3))
    },
    nodeRef: snackbarRef
  }, /*#__PURE__*/_react.default.createElement(_BaseSnackbar.default, {
    ref: snackbarRef,
    position: position,
    text: text,
    action: action,
    icon: icon,
    type: type,
    prefixIcon: prefixIcon,
    duration: duration,
    style: style,
    className: (0, _clsx.default)(prefixCls, className, (_classNames4 = {}, _classNames4[prefixCls + "-" + validPosition + "-visible"] = appearDone, _classNames4)),
    verticalAction: verticalAction,
    downloadProgress: downloadCompleted,
    zIndex: zIndex
  })));
});
SnackbarProvider.displayName = "zaui-snackbar-provider";
var _default = exports.default = SnackbarProvider;