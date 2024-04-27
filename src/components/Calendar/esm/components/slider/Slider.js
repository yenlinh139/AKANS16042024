import clsx from "clsx";
import React, { useMemo, useRef } from "react";
import Text from "../text";
import { clamp } from "../../utils/clamp";
import { getPosition } from "../../utils/get-position";
import { getPrefixCls } from "../../utils/class";
import useMergedState from "../../hooks/useMergedState";
import Track from "./Track";
import { getChangeValue } from "../../utils/get-change-value";
import Thumb from "./Thumb";
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
  var prefixCls = getPrefixCls("slider");
  var _useMergedState = useMergedState(defaultValue || 0, {
      value: rawValue
    }),
    value = _useMergedState[0],
    setValue = _useMergedState[1];
  var valueRender = useMemo(function () {
    if (!showValue) return null;
    if (renderValue) {
      return renderValue(value);
    }
    return Array.isArray(value) ? value.join(" - ") : value;
  }, [value, showValue, renderValue]);
  var _useMemo = useMemo(function () {
      if (!Array.isArray(value)) {
        return {
          offset: 0,
          position: getPosition({
            min: min,
            max: max,
            value: value
          })
        };
      }
      var start = getPosition({
        min: min,
        max: max,
        value: value[0]
      });
      var end = getPosition({
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
  var markList = useMemo(function () {
    if (!marks) return undefined;
    if (marks !== true) return marks.map(function (mark) {
      return getPosition({
        min: min,
        max: max,
        value: mark
      });
    });
    var stepCount = (max - min) / step;
    var list = [];
    for (var i = 0; i <= stepCount; i += 1) {
      var markValue = min + i * step;
      var markPosition = getPosition({
        min: min,
        max: max,
        value: markValue
      });
      list.push(markPosition);
    }
    return list;
  }, [marks, min, max, step]);
  var isSliding = useRef(false);
  var frame = useRef(0);
  var trackRef = useRef(null);
  var thumbIndex = useRef(0);
  var handleChange = function handleChange(_ref) {
    var x = _ref.x;
    var nextValue = getChangeValue({
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
        var endValue = clamp(end - nextValue < minRange ? nextValue + step : end, min, max);
        if (endValue - nextValue < minRange) return;
        var newValue = [nextValue, endValue];
        setValue(newValue);
        onChange == null || onChange(newValue);
      } else {
        var startValue = clamp(nextValue - start < minRange ? nextValue - step : start, min, max);
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
          var tempX = clamp((x - rect.left) / rect.width, 0, 1);
          if (checkNearest) {
            if (Array.isArray(value)) {
              var start = value[0],
                end = value[1];
              var middle = (start + end) / 2;
              var nextValue = getChangeValue({
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
  return /*#__PURE__*/React.createElement("div", {
    className: clsx(prefixCls + "-wrapper")
  }, (label || showValue) && /*#__PURE__*/React.createElement("div", {
    className: clsx(prefixCls + "-header")
  }, /*#__PURE__*/React.createElement(Text, {
    className: clsx(prefixCls + "-label")
  }, label), /*#__PURE__*/React.createElement(Text, {
    size: "small",
    bold: true,
    className: clsx(prefixCls + "-value")
  }, valueRender)), /*#__PURE__*/React.createElement("div", {
    className: clsx(prefixCls + "-content")
  }, prefix && /*#__PURE__*/React.createElement("div", {
    className: clsx(prefixCls + "-prefix")
  }, prefix), /*#__PURE__*/React.createElement("div", {
    role: "presentation",
    className: clsx(prefixCls + "-handler"),
    onMouseDown: handleMouseDown,
    onMouseMove: handleMouseMove,
    onMouseUp: handleMouseUp,
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd
  }, /*#__PURE__*/React.createElement(Track, {
    ref: trackRef,
    width: position,
    offset: offset,
    marks: markList
  }, Array.isArray(value) && /*#__PURE__*/React.createElement(Thumb, {
    position: offset
  }), /*#__PURE__*/React.createElement(Thumb, {
    position: offset + position
  }))), suffix && /*#__PURE__*/React.createElement("div", {
    className: clsx(prefixCls + "-suffix")
  }, suffix)), Array.isArray(value) ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("input", {
    type: "hidden",
    name: name ? name + "_from" : undefined,
    value: value[0]
  }), /*#__PURE__*/React.createElement("input", {
    type: "hidden",
    name: name ? name + "_to" : undefined,
    value: value[1]
  })) : /*#__PURE__*/React.createElement("input", {
    type: "hidden",
    name: name,
    value: value
  }));
};
export default Slider;