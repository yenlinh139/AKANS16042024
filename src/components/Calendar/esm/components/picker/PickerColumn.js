import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import React, { useEffect, useState, useRef } from "react";
import classNames from "clsx";
import { DEFAULT_PICKER_ITEM_HEIGHT } from "./common/constant";
var columnHeight = DEFAULT_PICKER_ITEM_HEIGHT * 5;
var itemHeight = DEFAULT_PICKER_ITEM_HEIGHT;
var PickerColumn = function PickerColumn(props) {
  var options = props.options,
    className = props.className,
    prefixCls = props.prefixCls,
    value = props.value,
    defaultValue = props.defaultValue,
    name = props.name,
    onChange = props.onChange,
    _props$datePickerColu = props.datePickerColumn,
    datePickerColumn = _props$datePickerColu === void 0 ? false : _props$datePickerColu;
  var prevSelected = useRef();

  // State of touch
  var _useState = useState(function () {
      var initVal = value || defaultValue;
      var selectedIndex = initVal ? options.map(function (opt) {
        return opt.value;
      }).indexOf(initVal.value) : 0;
      prevSelected.current = options[selectedIndex].value;
      return {
        isMoving: false,
        startTouchY: 0,
        startScrollerTranslate: 0,
        scrollerTranslate: columnHeight / 2 - itemHeight / 2 - selectedIndex * itemHeight,
        minTranslate: columnHeight / 2 - itemHeight * options.length + itemHeight / 2,
        maxTranslate: columnHeight / 2 - itemHeight / 2
      };
    }),
    state = _useState[0],
    setState = _useState[1];
  var onValueSelected = function onValueSelected(opt, colName) {
    onChange == null || onChange(opt, colName);
  };

  // Compute the translate of scroller
  var computeTranslate = function computeTranslate() {
    var initVal = value || defaultValue;
    var selectedIndex = initVal ? options.map(function (opt) {
      return opt.value;
    }).indexOf(initVal.value) : 0;

    // If the value is not in the options, select the first option
    // only for date picker and the value is previously selected
    if (datePickerColumn && (value == null ? void 0 : value.value) === prevSelected.current && selectedIndex <= 0 && prevSelected.current) {
      var latestValue = parseInt(prevSelected.current.toString(), 10);
      var firstValue = parseInt(options[0].value.toString(), 10);
      var lastValue = parseInt(options[options.length - 1].value.toString(), 10);
      // When the number of days in the month is less than the previous value,
      // select the last day of the month
      if (latestValue > lastValue) {
        selectedIndex = options.length - 1;
      }
      if (lastValue < firstValue) {
        selectedIndex = 0;
      }
    }
    if (selectedIndex <= 0) {
      selectedIndex = 0;
    }

    // This callback is used to update the value of the parent component, thus changing the props passed to this child component
    onValueSelected(options[selectedIndex], name);
    prevSelected.current = options[selectedIndex].value;
    return {
      scrollerTranslate: columnHeight / 2 - itemHeight / 2 - selectedIndex * itemHeight,
      minTranslate: columnHeight / 2 - itemHeight * options.length + itemHeight / 2,
      maxTranslate: columnHeight / 2 - itemHeight / 2
    };
  };

  // Update touch state when value changed from the parent
  useEffect(function () {
    if (state.isMoving) {
      return;
    }
    var newState = computeTranslate();
    setState(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), newState);
    });
    // Previous code:
    // setState(prevState => ({ ...prevState, ...computeTranslate() }));
    // This would threw a warning: https://mini.zalo.me/community/7848204527262067526/datepicker-khong-cap-nhat-value-khi-close
    // Because inside computeTranslate() there is a call to onValueSelected() which will cause re-render
    // Just move it outside the setState()'s callback will solve the problem
  }, [value, options]);

  // Merge classes
  var columnPrefixCls = prefixCls + "-column";
  var scrollerPrefixCls = prefixCls + "-scroller";
  var cls = classNames(columnPrefixCls, {}, className);
  var handleTouchStart = function handleTouchStart(event) {
    var startYPos = event.targetTouches[0].pageY;
    setState(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        startTouchY: startYPos,
        startScrollerTranslate: prevState.scrollerTranslate
      });
    });
  };
  var handleItemClick = function handleItemClick(option, colName) {
    onValueSelected(option, colName);
  };
  var handleTouchMove = function handleTouchMove(event) {
    var touchY = event.targetTouches[0].pageY;
    if (!state.isMoving) {
      setState(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          isMoving: true
        });
      });
    } else {
      var nextScrollerTranslate = state.startScrollerTranslate + touchY - state.startTouchY;
      if (nextScrollerTranslate < state.minTranslate) {
        nextScrollerTranslate = state.minTranslate - Math.pow(state.minTranslate - nextScrollerTranslate, 0.8);
      } else if (nextScrollerTranslate > state.maxTranslate) {
        nextScrollerTranslate = state.maxTranslate + Math.pow(nextScrollerTranslate - state.maxTranslate, 0.8);
      }
      setState(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          scrollerTranslate: nextScrollerTranslate
        });
      });
    }
  };
  var handleTouchEnd = function handleTouchEnd() {
    if (!state.isMoving) {
      return;
    }
    setState(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        isMoving: false,
        startTouchY: 0,
        startScrollerTranslate: 0
      });
    });
    setTimeout(function () {
      var scrollerTranslate = state.scrollerTranslate,
        minTranslate = state.minTranslate,
        maxTranslate = state.maxTranslate;
      var activeIndex;
      if (scrollerTranslate > maxTranslate) {
        activeIndex = 0;
      } else if (scrollerTranslate < minTranslate) {
        activeIndex = options.length - 1;
      } else {
        activeIndex = -Math.floor((scrollerTranslate - maxTranslate) / itemHeight);
      }
      // ???
      if (activeIndex === options.findIndex(function (opt) {
        return opt.value === (value == null ? void 0 : value.value);
      })) {
        setState(function (prevState) {
          return _objectSpread(_objectSpread({}, prevState), computeTranslate());
        });
      } else {
        onValueSelected(options[activeIndex], name);
        prevSelected.current = options[activeIndex].value;
      }
    }, 0);
  };
  var handleTouchCancel = function handleTouchCancel() {
    if (!state.isMoving) {
      return;
    }
    setState(function (prevState) {
      return {
        isMoving: false,
        startTouchY: 0,
        startScrollerTranslate: 0,
        scrollerTranslate: prevState.startScrollerTranslate,
        maxTranslate: prevState.maxTranslate,
        minTranslate: prevState.minTranslate
      };
    });
  };

  // Map each option to a div element and highlight the selected one
  var renderItems = function renderItems() {
    var selectedIndex = options.findIndex(function (opt) {
      return opt.value === (value == null ? void 0 : value.value);
    });
    return options.map(function (option, index) {
      var _classNames;
      var style = {
        height: itemHeight + "px",
        lineHeight: itemHeight + "px"
      };
      var itemPrefixCls = prefixCls + "-item";
      var itemCls = classNames(itemPrefixCls, (_classNames = {}, _classNames[itemPrefixCls + "-selected"] = !state.isMoving && index === selectedIndex, _classNames[itemPrefixCls + "-2nd"] = !state.isMoving && selectedIndex > -1 && (index === selectedIndex - 1 || index === selectedIndex + 1), _classNames));
      return /*#__PURE__*/React.createElement("div", {
        key: name + "-" + (option.key || option.value),
        className: itemCls,
        style: style,
        onClick: function onClick() {
          return handleItemClick(option, name);
        },
        role: "presentation"
      }, option.displayName);
    });
  };
  var translateString = "translate3d(0, " + state.scrollerTranslate + "px, 0)";
  var style = {
    MsTransform: translateString,
    MozTransform: translateString,
    OTransform: translateString,
    WebkitTransform: translateString,
    transform: translateString,
    transitionDuration: "150ms"
  };
  return /*#__PURE__*/React.createElement("div", {
    className: cls
  }, /*#__PURE__*/React.createElement("div", {
    className: scrollerPrefixCls,
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd,
    onTouchCancel: handleTouchCancel,
    style: _objectSpread({
      height: columnHeight + "px"
    }, style)
  }, renderItems()));
};
PickerColumn.defaultProps = {
  datePickerColumn: false
};
export default /*#__PURE__*/React.memo(PickerColumn);