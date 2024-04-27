import React, { useCallback, useMemo, useState, useRef, useImperativeHandle } from "react";
import classNames from "clsx";
import { CSSTransition } from "react-transition-group";
import { SnackbarType, SnackbarPosition } from "./props-type";
import SnackbarContext from "./context";
import { getPrefixCls } from "../../utils/class";
import BaseSnackbar from "./BaseSnackbar";
import { DEFAULT_COUNTDOWN_DURATION, DEFAULT_DURATION, DEFAULT_INTERVAL, DEFAULT_POSITION } from "./common/constants";
var SnackbarProvider = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _classNames, _classNames2, _classNames3, _classNames4;
  var _useState = useState(false),
    open = _useState[0],
    setOpen = _useState[1];
  var _useState2 = useState(false),
    appearDone = _useState2[0],
    setAppearDone = _useState2[1];
  var _useState3 = useState(null),
    timeoutId = _useState3[0],
    setTimeoutId = _useState3[1];
  var _useState4 = useState(""),
    text = _useState4[0],
    setText = _useState4[1];
  var _useState5 = useState(false),
    icon = _useState5[0],
    setIcon = _useState5[1];
  var _useState6 = useState(null),
    prefixIcon = _useState6[0],
    setPrefixIcon = _useState6[1];
  var _useState7 = useState(SnackbarType.default),
    type = _useState7[0],
    setType = _useState7[1];
  var _useState8 = useState(SnackbarPosition.bottom),
    position = _useState8[0],
    setPosition = _useState8[1];
  var _useState9 = useState(type === SnackbarType.countdown ? DEFAULT_COUNTDOWN_DURATION : DEFAULT_DURATION),
    duration = _useState9[0],
    setDuration = _useState9[1];
  var snackbarRef = useRef();
  var _useState10 = useState(),
    onClose = _useState10[0],
    setOnclose = _useState10[1];
  var _useState11 = useState(),
    action = _useState11[0],
    setAction = _useState11[1];
  var _useState12 = useState(false),
    verticalAction = _useState12[0],
    setVerticalAction = _useState12[1];
  var _useState13 = useState(0),
    downloadCompleted = _useState13[0],
    setDownloadCompleted = _useState13[1];
  useImperativeHandle(ref, function () {
    return snackbarRef.current;
  });
  var triggerSnackbar = useCallback(function (option) {
    var snackbarTYpe = option.type;
    var snackbarPos = option.position;
    setText((option == null ? void 0 : option.text) || "");
    setIcon(!!(option != null && option.icon));
    setPrefixIcon(option == null ? void 0 : option.prefixIcon);
    setType(snackbarTYpe || SnackbarType.default);
    setDuration((option == null ? void 0 : option.duration) || DEFAULT_DURATION);
    setPosition(snackbarPos || DEFAULT_POSITION);
    setAction(option == null ? void 0 : option.action);
    setVerticalAction(!!(option != null && option.verticalAction));
    setOnclose(function () {
      return option == null ? void 0 : option.onClose;
    });
    setDownloadCompleted(0);
  }, []);
  var openSnackbar = useCallback(function (option) {
    if (open === true) {
      setOpen(false);
      setTimeout(function () {
        triggerSnackbar(option);
        setOpen(true);
      }, DEFAULT_INTERVAL);
    } else {
      triggerSnackbar(option);
      setOpen(true);
    }
  }, [open, triggerSnackbar]);
  var closeSnackbar = useCallback(function () {
    setOpen(false);
  }, []);
  var setDownloadProgress = useCallback(function (completed) {
    setDownloadCompleted(completed);
  }, []);
  var validPosition = Object.values(SnackbarPosition).includes(position) ? position : DEFAULT_POSITION;
  var prefixCls = getPrefixCls("snackbar");
  var contextValue = useMemo(function () {
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
  return /*#__PURE__*/React.createElement(SnackbarContext.Provider, {
    value: contextValue
  }, children, /*#__PURE__*/React.createElement(CSSTransition, {
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
      var timeout = type === SnackbarType.countdown ? duration + 1000 : duration;
      setTimeoutId(setTimeout(function () {
        setOpen(false);
      }, timeout));
    },
    onExit: function onExit() {
      onClose == null || onClose();
    },
    classNames: {
      enter: classNames(prefixCls + "-enter", (_classNames = {}, _classNames[prefixCls + "-enter-" + validPosition] = validPosition, _classNames)),
      enterActive: classNames(prefixCls + "-enter-active", (_classNames2 = {}, _classNames2[prefixCls + "-enter-active-" + validPosition] = validPosition, _classNames2)),
      exitActive: classNames(prefixCls + "-exit-active", (_classNames3 = {}, _classNames3[prefixCls + "-exit-active-" + validPosition] = validPosition, _classNames3))
    },
    nodeRef: snackbarRef
  }, /*#__PURE__*/React.createElement(BaseSnackbar, {
    ref: snackbarRef,
    position: position,
    text: text,
    action: action,
    icon: icon,
    type: type,
    prefixIcon: prefixIcon,
    duration: duration,
    style: style,
    className: classNames(prefixCls, className, (_classNames4 = {}, _classNames4[prefixCls + "-" + validPosition + "-visible"] = appearDone, _classNames4)),
    verticalAction: verticalAction,
    downloadProgress: downloadCompleted,
    zIndex: zIndex
  })));
});
SnackbarProvider.displayName = "zaui-snackbar-provider";
export default SnackbarProvider;