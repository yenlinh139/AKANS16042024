"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _class = require("../../utils/class");
var _constants = require("./common/constants");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
var CountDown = function CountDown(_ref) {
  var _ref$duration = _ref.duration,
    duration = _ref$duration === void 0 ? _constants.DEFAULT_COUNTDOWN_DURATION : _ref$duration;
  var prefixCls = (0, _class.getPrefixCls)("snackbar-countdown");
  var maxCount = duration / 1000;
  var _useState = (0, _react.useState)(maxCount),
    current = _useState[0],
    setCurrent = _useState[1];
  var strokeWidth = _constants.COUNTDOWN_STROKE_WIDTH;
  var radius = _constants.COUNTDOWN_RADIUS - strokeWidth / 2;
  var width = _constants.COUNTDOWN_RADIUS * 2;
  var height = _constants.COUNTDOWN_RADIUS * 2;
  var viewBox = "0 0 " + width + " " + height;
  var dashArray = radius * Math.PI * 2;
  var percentage = current / maxCount * 100;
  var dashOffset = dashArray - dashArray * percentage / 100;
  (0, _react.useEffect)(function () {
    var timmer = setInterval(function () {
      if (current > 0) {
        setCurrent(function (cur) {
          return cur - 1;
        });
      } else {
        clearInterval(timmer);
      }
    }, 1000);
    return function () {
      return clearInterval(timmer);
    };
  }, [current]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: prefixCls
  }, /*#__PURE__*/_react.default.createElement("svg", {
    className: prefixCls + "-circle",
    width: _constants.COUNTDOWN_RADIUS * 2,
    height: _constants.COUNTDOWN_RADIUS * 2,
    viewBox: viewBox
  }, /*#__PURE__*/_react.default.createElement("circle", {
    className: prefixCls + "-background",
    cx: _constants.COUNTDOWN_RADIUS,
    cy: _constants.COUNTDOWN_RADIUS,
    r: radius,
    strokeWidth: strokeWidth + "px"
  }), /*#__PURE__*/_react.default.createElement("circle", {
    className: prefixCls + "-progress",
    cx: _constants.COUNTDOWN_RADIUS,
    cy: _constants.COUNTDOWN_RADIUS,
    r: radius,
    strokeWidth: strokeWidth + "px",
    style: {
      strokeDasharray: dashArray,
      strokeDashoffset: dashOffset
    },
    transform: "rotate(-90)"
  }), /*#__PURE__*/_react.default.createElement("text", {
    className: prefixCls + "-counter",
    x: _constants.COUNTDOWN_RADIUS,
    y: radius,
    dy: ".4em",
    textAnchor: "middle"
  }, current)));
};
var _default = exports.default = CountDown;