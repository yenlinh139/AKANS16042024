"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _clsx = _interopRequireDefault(require("clsx"));
var _react = _interopRequireWildcard(require("react"));
var _text = _interopRequireDefault(require("../text"));
var _clamp = require("../../utils/clamp");
var _getPosition = require("../../utils/get-position");
var _class = require("../../utils/class");
var _useMergedState2 = _interopRequireDefault(require("../../hooks/useMergedState"));
var _Track = _interopRequireDefault(require("./Track"));
var _getChangeValue = require("../../utils/get-change-value");
var _Thumb = _interopRequireDefault(require("./Thumb"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
var Slider = function Slider(props) {
  var rawValue = props.value,
    defaultValue = props.defaultValue,
    name = props.name,
    label = props.label,
    showValue = props.showValue,
    renderValue = props.renderValue,
    prefix = props.prefix,
    suffix = props.suffix,
    _props$min = props.min,
    min = _props$min === void 0 ? 0 : _props$min,
    _props$max = props.max,
    max = _props$max === void 0 ? 100 : _props$max,
    _props$step = props.step,
    step = _props$step === void 0 ? 1 : _props$step,
    _props$minRange = props.minRange,
    minRange = _props$minRange === void 0 ? 1 : _props$minRange,
    _props$marks = props.marks,
    marks = _props$marks === void 0 ? false : _props$marks,
    onChange = props.onChange;
  var prefixCls = (0, _class.getPrefixCls)("slider");
  var _useMergedState = (0, _useMergedState2.default)(defaultValue || 0, {
      value: rawValue
    }),
    value = _useMergedState[0],
    setValue = _useMergedState[1];
  var valueRender = (0, _react.useMemo)(function () {
    if (!showValue) return null;
    if (renderValue) {
      return renderValue(value);
    }
    return Array.isArray(value) ? value.join(" - ") : value;
  }, [value, showValue, renderValue]);
  var _useMemo = (0, _react.useMemo)(function () {
      if (!Array.isArray(value)) {
        return {
          offset: 0,
          position: (0, _getPosition.getPosition)({
            min: min,
            max: max,
            value: value
          })
        };
      }
      var start = (0, _getPosition.getPosition)({
        min: min,
        max: max,
        value: value[0]
      });
      var end = (0, _getPosition.getPosition)({
        min: min,
        max: max,
        value: value[1]
      });
      return {
        offset: start,
        position: end - start
      };
    }, [value, min, max]),
    offset = _useMemo.offset,
    position = _useMemo.position;
  var markList = (0, _react.useMemo)(function () {
    if (!marks) return undefined;
    if (marks !== true) return marks.map(function (mark) {
      return (0, _getPosition.getPosition)({
        min: min,
        max: max,
        value: mark
      });
    });
    var stepCount = (max - min) / step;
    var list = [];
    for (var i = 0; i <= stepCount; i += 1) {
      var markValue = min + i * step;
      var markPosition = (0, _getPosition.getPosition)({
        min: min,
        max: max,
        value: markValue
      });
      list.push(markPosition);
    }
    return list;
  }, [marks, min, max, step]);
  var isSliding = (0, _react.useRef)(false);
  var frame = (0, _react.useRef)(0);
  var trackRef = (0, _react.useRef)(null);
  var thumbIndex = (0, _react.useRef)(0);
  var handleChange = function handleChange(_ref) {
    var x = _ref.x;
    var nextValue = (0, _getChangeValue.getChangeValue)({
      value: x,
      min: min,
      max: max,
      step: step
    });
    if (!Array.isArray(value)) {
      setValue(nextValue);
      onChange == null || onChange(nextValue);
    } else {
      var start = value[0],
        end = value[1];
      if (thumbIndex.current === 0) {
        var endValue = (0, _clamp.clamp)(end - nextValue < minRange ? nextValue + step : end, min, max);
        if (endValue - nextValue < minRange) return;
        var newValue = [nextValue, endValue];
        setValue(newValue);
        onChange == null || onChange(newValue);
      } else {
        var startValue = (0, _clamp.clamp)(nextValue - start < minRange ? nextValue - step : start, min, max);
        if (nextValue - startValue < minRange) return;
        var cloneValue = [startValue, nextValue];
        setValue(cloneValue);
        onChange == null || onChange(cloneValue);
      }
    }
  };
  var handleMove = function handleMove(_ref2, checkNearest) {
    var x = _ref2.x;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(function () {
      if (trackRef.current) {
        var rect = trackRef.current.getBoundingClientRect();
        if (rect.width && rect.height) {
          var tempX = (0, _clamp.clamp)((x - rect.left) / rect.width, 0, 1);
          if (checkNearest) {
            if (Array.isArray(value)) {
              var start = value[0],
                end = value[1];
              var middle = (start + end) / 2;
              var nextValue = (0, _getChangeValue.getChangeValue)({
                value: tempX,
                min: min,
                max: max,
                step: step
              });
              thumbIndex.current = nextValue < middle ? 0 : 1;
            } else {
              thumbIndex.current = 0;
            }
          }
          handleChange({
            x: tempX
          });
        }
      }
    });
  };
  var handleMouseDown = function handleMouseDown(event) {
    isSliding.current = true;
    handleMove({
      x: event.clientX,
      y: event.clientY
    }, true);
  };
  var handleMouseMove = function handleMouseMove(e) {
    if (isSliding.current) {
      handleMove({
        x: e.clientX,
        y: e.clientY
      });
    }
  };
  var handleMouseUp = function handleMouseUp() {
    isSliding.current = false;
  };
  var handleTouchStart = function handleTouchStart(event) {
    isSliding.current = true;
    handleMove({
      x: event.touches[0].clientX,
      y: event.touches[0].clientY
    }, true);
  };
  var handleTouchMove = function handleTouchMove(e) {
    if (e.cancelable) e.preventDefault();
    isSliding.current = true;
    handleMove({
      x: e.touches[0].clientX,
      y: e.touches[0].clientY
    });
  };
  var handleTouchEnd = function handleTouchEnd() {
    isSliding.current = false;
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)(prefixCls + "-wrapper")
  }, (label || showValue) && /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)(prefixCls + "-header")
  }, /*#__PURE__*/_react.default.createElement(_text.default, {
    className: (0, _clsx.default)(prefixCls + "-label")
  }, label), /*#__PURE__*/_react.default.createElement(_text.default, {
    size: "small",
    bold: true,
    className: (0, _clsx.default)(prefixCls + "-value")
  }, valueRender)), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)(prefixCls + "-content")
  }, prefix && /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)(prefixCls + "-prefix")
  }, prefix), /*#__PURE__*/_react.default.createElement("div", {
    role: "presentation",
    className: (0, _clsx.default)(prefixCls + "-handler"),
    onMouseDown: handleMouseDown,
    onMouseMove: handleMouseMove,
    onMouseUp: handleMouseUp,
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd
  }, /*#__PURE__*/_react.default.createElement(_Track.default, {
    ref: trackRef,
    width: position,
    offset: offset,
    marks: markList
  }, Array.isArray(value) && /*#__PURE__*/_react.default.createElement(_Thumb.default, {
    position: offset
  }), /*#__PURE__*/_react.default.createElement(_Thumb.default, {
    position: offset + position
  }))), suffix && /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)(prefixCls + "-suffix")
  }, suffix)), Array.isArray(value) ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("input", {
    type: "hidden",
    name: name ? name + "_from" : undefined,
    value: value[0]
  }), /*#__PURE__*/_react.default.createElement("input", {
    type: "hidden",
    name: name ? name + "_to" : undefined,
    value: value[1]
  })) : /*#__PURE__*/_react.default.createElement("input", {
    type: "hidden",
    name: name,
    value: value
  }));
};
var _default = exports.default = Slider;