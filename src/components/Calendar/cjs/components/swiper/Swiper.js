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
var _class = require("../../utils/class");
var _utils = require("./utils");
var _context = require("./context");
var _SwiperSlide = _interopRequireDefault(require("./SwiperSlide"));
var _SwiperDots = _interopRequireDefault(require("./SwiperDots"));
var _constants = require("./utils/constants");
var _excluded = ["style"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2.default)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Swiper = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var children = props.children,
    _props$defaultActive = props.defaultActive,
    defaultActive = _props$defaultActive === void 0 ? 0 : _props$defaultActive,
    _props$dots = props.dots,
    dots = _props$dots === void 0 ? true : _props$dots,
    _props$autoplay = props.autoplay,
    autoplay = _props$autoplay === void 0 ? false : _props$autoplay,
    id = props.id,
    style = props.style,
    className = props.className,
    afterChange = props.afterChange,
    _props$duration = props.duration,
    duration = _props$duration === void 0 ? _constants.AUTOPLAY_DELAY : _props$duration,
    _props$loop = props.loop,
    loop = _props$loop === void 0 ? false : _props$loop,
    _props$disableSwipe = props.disableSwipe,
    disableSwipe = _props$disableSwipe === void 0 ? false : _props$disableSwipe;
  var autoPlayRequest = _react.default.useRef(0);
  var lastTimeAutoPlay = _react.default.useRef(0);
  var index = (0, _react.useRef)(loop ? defaultActive + 1 : defaultActive);
  var _useState = (0, _react.useState)(loop ? defaultActive + 1 : defaultActive),
    active = _useState[0],
    setActive = _useState[1];
  var runningAnimation = (0, _react.useRef)(false);
  var _useState2 = (0, _react.useState)({
      xMove: 0,
      down: false
    }),
    springState = _useState2[0],
    setSpringState = _useState2[1];
  var slides = (0, _utils.getSlides)(children, loop);
  var _useSprings = (0, _web.useSprings)(slides.length, function () {
      return {
        opacity: 1
      };
    }),
    springs = _useSprings[0],
    setOpacity = _useSprings[1];
  var _useSpring = (0, _web.useSpring)(function () {
      return {
        translateX: -active * 100,
        moving: 0,
        config: {
          duration: _constants.DURATION
        }
      };
    }, []),
    _useSpring$ = _useSpring[0],
    translateX = _useSpring$.translateX,
    moving = _useSpring$.moving,
    set = _useSpring[1];
  var prefixCls = (0, _class.getPrefixCls)("swiper");
  var cls = (0, _clsx.default)(prefixCls, className);
  var xMove = springState.xMove,
    down = springState.down;
  var getTotalSlides = (0, _react.useCallback)(function () {
    if (loop) {
      return slides.length - 2;
    }
    return slides.length;
  }, [slides, loop]);
  var runSprings = (0, _react.useCallback)(function (_vx, isDragging, mx, offset) {
    var offsetValue = offset || 1;
    if (isDragging || runningAnimation.current) {
      return;
    }
    var totalSlides = getTotalSlides();
    var activeIndex = index.current;
    if (!isDragging && Math.abs(mx) > _constants.SWIPE_DISTANCE) {
      index.current += mx > 0 ? -1 * offsetValue : 1 * offsetValue;
      activeIndex = index.current;
      if (index.current === totalSlides) {
        activeIndex = loop ? totalSlides : totalSlides - 1;
        setActive(totalSlides);
      } else if (index.current <= 0) {
        activeIndex = loop ? totalSlides + index.current % totalSlides : 0;
        setActive(activeIndex);
      } else {
        activeIndex = index.current % totalSlides;
        setActive(activeIndex);
      }
    }
    var finalY = index.current % slides.length * 100;
    setOpacity(function (i) {
      return {
        opacity: i % totalSlides === activeIndex ? 1 : 0.8
      };
    });
    set({
      translateX: -finalY,
      moving: 0,
      config: {
        duration: undefined
      },
      onStart: function onStart() {
        runningAnimation.current = true;
      },
      onRest: function onRest() {
        runningAnimation.current = false;
        if (!loop) {
          afterChange == null || afterChange(activeIndex);
          return;
        }
        if (index.current === 0) {
          index.current = slides.length - 2;
          set({
            translateX: -index.current * 100,
            moving: 0,
            config: {
              duration: 0
            }
          });
        } else if (index.current === slides.length - 1) {
          index.current = 1;
          set({
            translateX: -index.current * 100,
            moving: 0,
            config: {
              duration: 0
            }
          });
        }
        afterChange == null || afterChange(activeIndex - 1);
      }
    });
  }, [slides.length, setOpacity, set, afterChange, getTotalSlides, loop]);
  var handleAutoPlay = (0, _react.useCallback)(function (now) {
    if (now - lastTimeAutoPlay.current >= duration) {
      lastTimeAutoPlay.current = now;
      if (!down) {
        runSprings(-1, false, -(_constants.SWIPE_DISTANCE + 1));
      }
    }
    autoPlayRequest.current = requestAnimationFrame(handleAutoPlay);
  }, [down, duration, runSprings]);
  var nextSlide = (0, _react.useCallback)(function () {
    if (down) {
      return;
    }
    if (!loop && index.current >= slides.length - 1) {
      return;
    }
    runSprings(-1, false, -(_constants.SWIPE_DISTANCE + 1));
  }, [down, runSprings, loop, slides]);
  var prevSlide = (0, _react.useCallback)(function () {
    if (down) {
      return;
    }
    if (!loop && index.current === 0) {
      return;
    }
    runSprings(-1, false, _constants.SWIPE_DISTANCE + 1);
  }, [down, runSprings, loop]);
  var goToSlide = (0, _react.useCallback)(function (slideIndex) {
    var totalSlides = getTotalSlides();
    var validIndex = slideIndex;
    if (slideIndex > totalSlides - 1) {
      validIndex = totalSlides - 1;
    }
    if (slideIndex < 0) {
      validIndex = 0;
    }
    var delta = validIndex - active;
    if (loop) {
      delta += 1;
    }
    if (delta === 0) {
      return;
    }
    runSprings(-1, false, -delta * (_constants.SWIPE_DISTANCE + 1), Math.abs(delta));
  }, [active, loop, getTotalSlides, runSprings]);
  (0, _react.useImperativeHandle)(ref, function () {
    return {
      next: nextSlide,
      prev: prevSlide,
      goTo: goToSlide,
      activeIndex: loop ? active - 1 : active
    };
  }, [active, nextSlide, prevSlide, goToSlide, loop]);
  (0, _react.useEffect)(function () {
    if (autoplay) {
      autoPlayRequest.current = requestAnimationFrame(handleAutoPlay);
    }
    return function () {
      if (autoPlayRequest.current) {
        cancelAnimationFrame(autoPlayRequest.current);
      }
    };
  }, [autoplay, handleAutoPlay]);
  (0, _react.useEffect)(function () {
    if (down) {
      set({
        moving: xMove,
        config: {
          duration: 0
        }
      });
    }
  }, [down, xMove, set]);
  var bind = (0, _react2.useDrag)(function (_ref) {
    var _ref$velocity = _ref.velocity,
      vx = _ref$velocity[0],
      isDown = _ref.down,
      _ref$movement = _ref.movement,
      mx = _ref$movement[0];
    if (runningAnimation.current) {
      return;
    }
    var totalSlides = getTotalSlides();
    if (mx > 0 && index.current === 0 && !loop) {
      return;
    }
    if (mx < 0 && index.current >= totalSlides - 1 && !loop) {
      return;
    }
    setSpringState({
      xMove: mx,
      down: isDown
    });
    runSprings(-vx, isDown, mx);
  }, {
    filterTaps: true,
    enabled: !disableSwipe
  });
  var contextValue = (0, _react.useMemo)(function () {
    return {
      activeIndex: loop ? active - 1 : active,
      slides: loop ? slides.slice(1, slides.length - 1) : slides
    };
  }, [slides, active, loop]);
  var transform = (0, _web.to)([translateX, moving], function (amount, movingAmount) {
    return "translateX(calc(" + amount + "% + " + movingAmount + "px))";
  });
  return /*#__PURE__*/_react.default.createElement(_context.SwiperContext.Provider, {
    value: contextValue
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: cls,
    id: id,
    style: style
  }, /*#__PURE__*/_react.default.createElement(_web.animated.div, (0, _extends2.default)({
    className: prefixCls + "-wrapper",
    style: {
      transform: transform
    }
  }, bind()), springs.map(function (_ref2, i) {
    var opacity = _ref2.opacity;
    var slide = slides[i];
    var _slide$node$props = slide.node.props,
      slideStyle = _slide$node$props.style,
      rest = (0, _objectWithoutPropertiesLoose2.default)(_slide$node$props, _excluded);
    return /*#__PURE__*/_react.default.createElement(_SwiperSlide.default, (0, _extends2.default)({
      style: _objectSpread(_objectSpread({}, slideStyle), {}, {
        opacity: opacity
      })
    }, rest, {
      key: slide.key
    }), slide.children);
  })), dots && /*#__PURE__*/_react.default.createElement(_SwiperDots.default, null)));
});
var _default = exports.default = Swiper;