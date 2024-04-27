"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireWildcard(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _react2 = require("@use-gesture/react");
var _web = require("@react-spring/web");
var _class = require("../../utils/class");
var _context = require("./context");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2.default)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Image = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var src = props.src,
    alt = props.alt;
  var width = window.innerWidth;
  var height = window.innerHeight;
  var targetRef = (0, _react.useRef)(null);
  var boundsRef = (0, _react.useRef)(null);
  var clicks = (0, _react.useRef)(0);
  var singleClickTimer = (0, _react.useRef)(0);
  var _useState = (0, _react.useState)(false),
    isPinching = _useState[0],
    setIsPinching = _useState[1];
  var _ref = (0, _react.useContext)(_context.ImageViewerContext) || {
      isZoomed: false
    },
    isZoomed = _ref.isZoomed,
    setIsZoomed = _ref.setIsZoomed,
    toggleHeader = _ref.setShowHeader;
  var getScale = function getScale(_ref2) {
    var displayWidth = _ref2.displayWidth,
      displayHeight = _ref2.displayHeight;
    var imgEl = targetRef.current;
    if (imgEl) {
      var naturalHeight = imgEl.naturalHeight,
        naturalWidth = imgEl.naturalWidth;
      if (naturalHeight < displayHeight && naturalWidth < displayWidth) {
        return 1;
      }
      var realDisplayHeight = displayWidth * naturalHeight / naturalWidth;
      if (realDisplayHeight > displayHeight) {
        return naturalHeight / displayHeight;
      }
      return naturalWidth / displayWidth;
    }
    return 1;
  };
  var _useSpring = (0, _web.useSpring)(function () {
      return {
        x: 0,
        y: 0,
        scale: getScale({
          displayWidth: width,
          displayHeight: height
        })
      };
    }),
    style = _useSpring[0],
    api = _useSpring[1];
  (0, _react.useImperativeHandle)(ref, function () {
    return boundsRef.current;
  });
  var prefixCls = (0, _class.getPrefixCls)("image");
  var cls = (0, _clsx.default)(prefixCls);
  var handleZoom = (0, _react.useCallback)(function (event) {
    var el = targetRef.current;
    var maxScale = getScale({
      displayHeight: height,
      displayWidth: width
    });
    if (!isZoomed && maxScale === 1) {
      return;
    }
    if (!isZoomed && el) {
      var clientX = event.clientX,
        clientY = event.clientY;
      api.start({
        x: Math.round((width / 2 - clientX) * maxScale),
        y: Math.round((height / 2 - clientY) * maxScale),
        scale: maxScale,
        onRest: function onRest() {
          setIsZoomed == null || setIsZoomed(true);
        }
      });
    } else if (el) {
      api.start({
        scale: 1,
        x: 0,
        y: 0,
        onRest: function onRest() {
          setIsZoomed == null || setIsZoomed(false);
        }
      });
    }
    toggleHeader == null || toggleHeader(!!isZoomed);
  }, [api, height, isZoomed, setIsZoomed, toggleHeader, width]);
  var handleOnPinch = function handleOnPinch(_ref3) {
    var offset = _ref3.offset,
      first = _ref3.first,
      pinching = _ref3.pinching;
    var scaleValue = offset[0];
    var maxScale = getScale({
      displayHeight: height,
      displayWidth: width
    });
    if (!isZoomed && maxScale === 1) {
      return;
    }
    if (first) {
      setIsZoomed == null || setIsZoomed(true);
      setIsPinching(true);
      return;
    }
    if (pinching) {
      api.set({
        scale: scaleValue
      });
    } else {
      api.set({
        scale: scaleValue,
        x: 0,
        y: 0
      });
      setIsPinching(false);
      setIsZoomed == null || setIsZoomed(scaleValue > 1);
    }
  };
  var handleDragImage = function handleDragImage(_ref4) {
    var first = _ref4.first,
      _ref4$movement = _ref4.movement,
      mx = _ref4$movement[0],
      my = _ref4$movement[1],
      _ref4$memo = _ref4.memo,
      memo = _ref4$memo === void 0 ? [] : _ref4$memo;
    if (!isZoomed || !mx && !my || isPinching) {
      return [0, 0, width, height];
    }
    var memoValue = memo;
    if (first) {
      var scale = style.scale.get();
      var _x = style.x.get();
      var _y = style.y.get();
      var _w = width * scale;
      var _h = height * scale;
      memoValue = [_x + mx, _y + my, _w, _h];
    }
    var _memoValue = memoValue,
      x = _memoValue[0],
      y = _memoValue[1],
      w = _memoValue[2],
      h = _memoValue[3];
    var posX = Math.min(w * 0.5, Math.max(x + mx, -w * 0.5));
    var posY = Math.min(w * 0.5, Math.max(y + my, -h * 0.5));
    api.start({
      x: posX,
      y: posY
    });
    return memoValue;
  };
  var handleClick = function handleClick(_ref5) {
    var event = _ref5.event;
    clicks.current += 1;
    if (clicks.current === 1) {
      singleClickTimer.current = window.setTimeout(function () {
        toggleHeader == null || toggleHeader(function (show) {
          return !show;
        });
        clicks.current = 0;
        clearTimeout(singleClickTimer.current);
      }, 250);
    } else if (clicks.current === 2) {
      handleZoom(event);
      clicks.current = 0;
      clearTimeout(singleClickTimer.current);
    }
  };
  var bind = (0, _react2.useGesture)({
    onDrag: handleDragImage,
    onPinch: handleOnPinch,
    onClick: handleClick
  }, {
    pinch: {
      threshold: 0.1,
      scaleBounds: {
        min: 1,
        max: getScale({
          displayHeight: height,
          displayWidth: width
        })
      }
    },
    drag: {
      filterTaps: true,
      enabled: isZoomed
    }
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    ref: boundsRef,
    className: prefixCls + "-container"
  }, /*#__PURE__*/_react.default.createElement(_web.animated.img, (0, _extends2.default)({
    ref: targetRef,
    className: cls,
    src: src,
    alt: alt,
    style: _objectSpread({}, style)
  }, bind())));
});
var _default = exports.default = Image;