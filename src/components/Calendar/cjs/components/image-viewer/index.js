"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _react = _interopRequireWildcard(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _web = require("@react-spring/web");
var _react2 = require("@use-gesture/react");
var _Image = _interopRequireDefault(require("./Image"));
var _class = require("../../utils/class");
var _modalMask = _interopRequireDefault(require("../../common/modal-mask"));
var _context = require("./context");
var _button = _interopRequireDefault(require("../button"));
var _icon = _interopRequireDefault(require("../icon"));
var _excluded = ["images", "visible", "onClose", "activeIndex", "maskStyle", "maskClassName"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2.default)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var ImageViewer = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var images = props.images,
    visible = props.visible,
    onClose = props.onClose,
    defaultActiveIndex = props.activeIndex,
    maskStyle = props.maskStyle,
    maskClassName = props.maskClassName,
    rest = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  var _useState = (0, _react.useState)(false),
    isZoomed = _useState[0],
    setIsZoomed = _useState[1];
  var _useState2 = (0, _react.useState)(defaultActiveIndex || 0),
    activeIndex = _useState2[0],
    setActiveIndex = _useState2[1];
  var force = (0, _react.useRef)(false);
  var prevActiveIndex = (0, _react.useRef)(defaultActiveIndex || 0);
  var _useState3 = (0, _react.useState)(!!visible),
    animationVisible = _useState3[0],
    setAnimationVisible = _useState3[1];
  var _useState4 = (0, _react.useState)(true),
    showHeader = _useState4[0],
    setShowHeader = _useState4[1];
  var prefixCls = (0, _class.getPrefixCls)("image-viewer");
  var cls = (0, _clsx.default)(prefixCls);
  var contextValue = (0, _react.useMemo)(function () {
    return {
      isZoomed: isZoomed,
      setIsZoomed: setIsZoomed,
      currentIndex: activeIndex,
      showHeader: showHeader,
      setShowHeader: setShowHeader
    };
  }, [isZoomed, activeIndex, showHeader]);
  var style = (0, _web.useSpring)({
    scale: visible ? 1 : 0.5,
    opacity: visible ? 1 : 0.5,
    config: {
      duration: 200
    },
    onRest: function onRest() {
      if (!visible) {
        setAnimationVisible(false);
      }
    }
  });
  var transitions = (0, _web.useTransition)(activeIndex, {
    key: activeIndex,
    from: {
      opacity: 0,
      transform: activeIndex < prevActiveIndex.current ? "translate3d(-50%,0,0)" : "translate3d(50%,0,0)"
    },
    enter: {
      opacity: 1,
      transform: "translate3d(0%,0,0)",
      onRest: function onRest() {
        prevActiveIndex.current = activeIndex;
        force.current = false;
      },
      config: {
        duration: force.current ? 0 : 300
      }
    },
    leave: {
      opacity: 0,
      transform: activeIndex < prevActiveIndex.current ? "translate3d(50%,0,0)" : "translate3d(-50%,0,0)",
      config: {
        duration: force.current ? 0 : 200
      }
    },
    exitBeforeEnter: true
  });
  var bind = (0, _react2.useDrag)(function (_ref) {
    var isDown = _ref.down,
      _ref$movement = _ref.movement,
      mx = _ref$movement[0];
    if (isZoomed) {
      return;
    }
    var totalImages = images.length;
    if (mx > 0 && activeIndex === 0) {
      return;
    }
    if (mx < 0 && activeIndex >= totalImages - 1) {
      return;
    }
    if (!isDown && Math.abs(mx) > 100) {
      if (mx > 0) {
        setActiveIndex(activeIndex - 1);
      } else {
        setActiveIndex(activeIndex + 1);
      }
    }
  }, {
    filterTaps: true
  });
  (0, _react.useLayoutEffect)(function () {
    if (visible) {
      if (defaultActiveIndex !== prevActiveIndex.current) {
        force.current = true;
      }
      if (!Number.isNaN(defaultActiveIndex)) {
        setActiveIndex(defaultActiveIndex || 0);
      }
      setAnimationVisible(visible);
    }
  }, [visible]);
  var goToNextImage = function goToNextImage() {
    setActiveIndex(function (curIndex) {
      return Math.min(curIndex + 1, images.length);
    });
  };
  var goToPrevImage = function goToPrevImage() {
    setActiveIndex(function (curIndex) {
      return Math.max(curIndex - 1, 0);
    });
  };
  return /*#__PURE__*/_react.default.createElement(_context.ImageViewerContext.Provider, {
    value: contextValue
  }, /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: cls,
    ref: ref
  }, rest), /*#__PURE__*/_react.default.createElement(_modalMask.default, {
    visible: visible,
    style: maskStyle,
    className: maskClassName
  }), visible && showHeader && /*#__PURE__*/_react.default.createElement("div", {
    className: prefixCls + "-header"
  }, /*#__PURE__*/_react.default.createElement("span", {
    role: "presentation",
    className: prefixCls + "-close-button",
    onClick: onClose
  }, "\u0110\xF3ng")), /*#__PURE__*/_react.default.createElement(_web.animated.div, {
    style: _objectSpread({
      display: animationVisible ? "block" : "none"
    }, style),
    className: prefixCls + "-container"
  }, animationVisible && showHeader && images.length > 1 && !isZoomed && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_button.default, {
    disabled: activeIndex === 0,
    icon: /*#__PURE__*/_react.default.createElement(_icon.default, {
      icon: "zi-chevron-left"
    }),
    className: prefixCls + "-nav-btn " + prefixCls + "-nav-btn-prev",
    size: "small",
    onClick: goToPrevImage
  }), /*#__PURE__*/_react.default.createElement(_button.default, {
    disabled: activeIndex === images.length - 1,
    icon: /*#__PURE__*/_react.default.createElement(_icon.default, {
      icon: "zi-chevron-right"
    }),
    className: prefixCls + "-nav-btn " + prefixCls + "-nav-btn-next",
    size: "small",
    onClick: goToNextImage
  })), animationVisible && transitions(function (transition, i) {
    return /*#__PURE__*/_react.default.createElement(_web.animated.div, (0, _extends2.default)({
      className: prefixCls + "-images",
      style: _objectSpread({
        width: "100%",
        height: "100%"
      }, transition)
    }, bind()), images[i] && /*#__PURE__*/_react.default.createElement(_Image.default, {
      src: images[i].src,
      alt: images[i].alt
    }));
  }))));
});
var _default = exports.default = ImageViewer;