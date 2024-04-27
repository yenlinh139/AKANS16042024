"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireWildcard(require("react"));
var _react2 = require("@use-gesture/react");
var _clsx = _interopRequireDefault(require("clsx"));
var _web = require("@react-spring/web");
var _class = require("../../utils/class");
var _constants = require("./utils/constants");
var _useElementSize = _interopRequireDefault(require("./hooks/useElementSize"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2.default)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Content = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  var _classNames;
  var title = props.title,
    visible = props.visible,
    onVisibleChanged = props.onVisibleChanged,
    _props$handler = props.handler,
    handler = _props$handler === void 0 ? true : _props$handler,
    children = props.children,
    _props$autoHeight = props.autoHeight,
    autoHeight = _props$autoHeight === void 0 ? false : _props$autoHeight,
    contentRef = props.contentRef,
    onClose = props.onClose,
    swipeToClose = props.swipeToClose,
    style = props.style,
    height = props.height,
    snapPoints = props.snapPoints,
    _props$defaultSnapPoi = props.defaultSnapPoint,
    defaultSnapPoint = _props$defaultSnapPoi === void 0 ? 0 : _props$defaultSnapPoi,
    onSnap = props.onSnap;
  var handlerRef = (0, _react.useRef)();
  var _useState = (0, _react.useState)(defaultSnapPoint),
    currentSnapPoint = _useState[0],
    setCurrentSnapPoint = _useState[1];
  var sheetRef = (0, _react.useRef)();
  var sheetHeight = (0, _useElementSize.default)({
    ref: sheetRef
  });
  var _useState2 = (0, _react.useState)({
      movement: [0, 0],
      down: false,
      first: false,
      vy: 0
    }),
    state = _useState2[0],
    set = _useState2[1];
  var getSnapPoints = function getSnapPoints() {
    if (!snapPoints) return undefined;
    if (!sheetHeight) return undefined;
    if (typeof snapPoints === "function") {
      return snapPoints({
        sheetModalHeight: sheetHeight
      });
    }
    return snapPoints.map(function (item) {
      return item * sheetHeight;
    });
  };
  var sheetSnapPoints = getSnapPoints();
  var prevVisible = (0, _react.useRef)(false);
  var prefixCls = (0, _class.getPrefixCls)("sheet-content");
  (0, _react.useImperativeHandle)(contentRef, function () {
    return sheetRef.current;
  });
  var down = state.down,
    movement = state.movement,
    vy = state.vy;
  var getDuration = function getDuration(_ref) {
    var isVisible = _ref.visible,
      points = _ref.points,
      currentPoint = _ref.currentPoint,
      isDragging = _ref.down;
    if (isDragging) return 0;
    return !isVisible || !points || currentPoint === points.length - 1 ? _constants.ANIMATION_DURATION : undefined;
  };
  var animationConfig = _objectSpread(_objectSpread({}, _web.config.stiff), {}, {
    duration: getDuration({
      visible: visible,
      points: sheetSnapPoints,
      currentPoint: currentSnapPoint,
      down: down
    }),
    velocity: vy
  });
  var _useSpring = (0, _web.useSpring)(function () {
      return {
        transformAmount: sheetHeight || window.innerHeight,
        movingAmount: 0,
        config: _objectSpread({}, animationConfig)
      };
    }),
    _useSpring$ = _useSpring[0],
    transformAmount = _useSpring$.transformAmount,
    movingAmount = _useSpring$.movingAmount,
    api = _useSpring[1];
  var snapTo = function snapTo(point) {
    setCurrentSnapPoint(point);
  };
  var cls = (0, _clsx.default)(prefixCls, (_classNames = {}, _classNames[prefixCls + "-hug-content"] = autoHeight, _classNames));
  (0, _react.useImperativeHandle)(ref, function () {
    return {
      sheet: sheetRef.current,
      snapTo: snapTo
    };
  });
  (0, _react.useEffect)(function () {
    if (down) {
      return;
    }
    if (visible && sheetSnapPoints) {
      api.start({
        transformAmount: sheetSnapPoints[currentSnapPoint || 0],
        movingAmount: 0
      });
    } else if (visible && sheetHeight) {
      api.start({
        transformAmount: 0,
        movingAmount: 0
      });
    } else if (!visible) {
      api.start({
        transformAmount: sheetHeight || window.innerHeight,
        movingAmount: 0
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, currentSnapPoint, sheetHeight]);
  (0, _react.useLayoutEffect)(function () {
    if (prevVisible.current) {
      setTimeout(function () {
        onVisibleChanged == null || onVisibleChanged(!!visible);
      }, _constants.ANIMATION_DURATION);
    }
    if (!visible && sheetSnapPoints && sheetSnapPoints.length && currentSnapPoint !== defaultSnapPoint) {
      setCurrentSnapPoint(defaultSnapPoint);
    }
    prevVisible.current = !!visible;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, onVisibleChanged]);
  (0, _react.useEffect)(function () {
    if (down) {
      api.set({
        movingAmount: movement[1]
      });
    }
  }, [down, movement, api]);
  var handlerDrag = function handlerDrag(_ref2) {
    var isDragging = _ref2.down,
      first = _ref2.first,
      _ref2$velocity = _ref2.velocity,
      _vy = _ref2$velocity[1],
      movementValues = _ref2.movement,
      event = _ref2.event,
      memo = _ref2.memo;
    set({
      down: isDragging,
      movement: movementValues,
      first: first,
      vy: _vy
    });
    if (isDragging) return movementValues[1];
    var my = movementValues[1];
    if (memo && memo < 0 && !my) {
      my = memo;
    }
    if (my < 0 && my < -_constants.DRAG_THRESHOLD && sheetSnapPoints) {
      if (currentSnapPoint < sheetSnapPoints.length - 1) {
        onSnap == null || onSnap(currentSnapPoint + 1);
        setCurrentSnapPoint(currentSnapPoint + 1);
      } else if (!sheetSnapPoints) {
        api.start({
          transformAmount: 0,
          movingAmount: 0
        });
      }
      return my;
    }
    if (my > 0 && my > _constants.DRAG_THRESHOLD) {
      if (sheetSnapPoints && currentSnapPoint > 0) {
        onSnap == null || onSnap(currentSnapPoint - 1);
        setCurrentSnapPoint(currentSnapPoint - 1);
      } else {
        onClose == null || onClose(event);
      }
      return my;
    }
    if (sheetSnapPoints) {
      api.start({
        transformAmount: sheetSnapPoints[currentSnapPoint],
        movingAmount: 0
      });
    } else {
      api.start({
        transformAmount: 0,
        movingAmount: 0
      });
    }
    return my;
  };
  var bind = (0, _react2.useDrag)(handlerDrag, {
    filterTaps: true
  });
  var transform = (0, _web.to)([transformAmount, movingAmount], function (amount, moving) {
    if (amount + moving < 0) return "";
    return "translateY(" + (amount + moving) + "px)";
  });
  var header = /*#__PURE__*/_react.default.createElement("div", {
    className: prefixCls + "-header"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: prefixCls + "-title"
  }, title));
  var handlerEl = /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    ref: handlerRef,
    className: prefixCls + "-handler-wrapper"
  }, bind()), /*#__PURE__*/_react.default.createElement("span", {
    className: prefixCls + "-handler"
  }));
  var modalStyle = _objectSpread({}, style || {});
  if (height) {
    modalStyle.height = height;
  }
  return /*#__PURE__*/_react.default.createElement(_web.animated.div, (0, _extends2.default)({
    style: _objectSpread(_objectSpread({}, modalStyle), {}, {
      transform: transform
    })
  }, !handler && (swipeToClose || sheetSnapPoints) ? bind() : {}, {
    className: cls,
    ref: sheetRef
  }), handler && handlerEl, title && header, children);
});
var _default = exports.default = Content;