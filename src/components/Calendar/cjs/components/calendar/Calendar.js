"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _useMergedState2 = _interopRequireDefault(require("../../hooks/useMergedState"));
var _date = require("../../utils/date");
var _class = require("../../utils/class");
var _propsType = require("./props-type");
var _CalendarHeader = _interopRequireDefault(require("./CalendarHeader"));
var _context = require("./context");
var _CalendarPanel = _interopRequireDefault(require("./CalendarPanel"));
var _swiper = _interopRequireDefault(require("../swiper"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
var Calendar = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var _classNames;
  var rootClassName = props.rootClassName,
    className = props.className,
    defaultValue = props.defaultValue,
    _props$locale = props.locale,
    locale = _props$locale === void 0 ? "vi-VN" : _props$locale,
    _props$startOfWeek = props.startOfWeek,
    startOfWeek = _props$startOfWeek === void 0 ? 0 : _props$startOfWeek,
    _props$numberOfWeek = props.numberOfWeek,
    numberOfWeek = _props$numberOfWeek === void 0 ? "auto" : _props$numberOfWeek,
    _props$dayOfWeekNameF = props.dayOfWeekNameFormat,
    dayOfWeekNameFormat = _props$dayOfWeekNameF === void 0 ? "short" : _props$dayOfWeekNameF,
    dayOfWeekNameRender = props.dayOfWeekNameRender,
    disabledDate = props.disabledDate,
    cellRender = props.cellRender,
    fullCellRender = props.fullCellRender,
    onSelect = props.onSelect,
    onPanelChange = props.onPanelChange;
  var dayFormatter = (0, _react.useMemo)(function () {
    return new Intl.DateTimeFormat(locale, {
      weekday: dayOfWeekNameFormat
    });
  }, [locale, dayOfWeekNameFormat]);
  var _useState = (0, _react.useState)("date"),
    calendarMode = _useState[0],
    setCalendarMode = _useState[1];
  var swiperRef = (0, _react.useRef)(null);
  var _useMergedState = (0, _useMergedState2.default)(defaultValue, {
      value: props.value
    }),
    value = _useMergedState[0];
  var _React$useState = _react.default.useState(value != null ? value : new Date()),
    currentValue = _React$useState[0],
    setCurrentValue = _React$useState[1];
  var _React$useState2 = _react.default.useState(value != null ? value : new Date()),
    selectedValue = _React$useState2[0],
    setSelectedValue = _React$useState2[1];
  var prefixCls = (0, _class.getPrefixCls)("calendar");
  var classes = (0, _clsx.default)(prefixCls, rootClassName, className, (_classNames = {}, _classNames[prefixCls + "-full"] = props.fullscreen, _classNames));
  var calendarRef = (0, _react.useRef)(null);
  (0, _react.useImperativeHandle)(ref, function () {
    return {
      calendar: calendarRef.current
    };
  });
  var checkCellType = function checkCellType(condition) {
    if (condition) {
      return _propsType.CellType.IN_VIEW;
    }
    return _propsType.CellType.OUT_OF_VIEW;
  };
  var dayOfWeekArray = (0, _react.useMemo)(function () {
    return (0, _date.getDayOfWeekArray)(startOfWeek);
  }, [startOfWeek]);
  var contextValue = (0, _react.useMemo)(function () {
    return {
      date: currentValue,
      selectedDate: selectedValue,
      mode: calendarMode,
      locale: locale,
      cellRender: cellRender,
      fullCellRender: fullCellRender
    };
  }, [selectedValue, currentValue, calendarMode, locale, cellRender, fullCellRender]);
  var handleOnTypeChange = function handleOnTypeChange(type) {
    setCalendarMode(type);
  };
  var generatePanelData = (0, _react.useCallback)(function (date) {
    if (date === void 0) {
      date = new Date();
    }
    var header = [];
    var data = [];
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = numberOfWeek === "auto" ? 1 : date.getDate();
    var weeksInMonth = numberOfWeek === "auto" ? (0, _date.getWeeksInMonth)(year, month, startOfWeek) : numberOfWeek;
    if (calendarMode === "date") {
      var startDate = new Date(year, month - 1, day);
      var dayOfStartDate = startDate.getDay();
      var aDate = new Date(startDate.setDate(startDate.getDate() - dayOfWeekArray.indexOf(dayOfStartDate)));
      for (var i = 0; i < weeksInMonth; i++) {
        data[Number(i)] = [];
        for (var j = 0; j < 7; j++) {
          if (i === 0) {
            header[Number(j)] = typeof dayOfWeekNameRender === "function" ? dayOfWeekNameRender(aDate.getDay()) : dayFormatter.format(aDate);
          }
          data[Number(i)][Number(j)] = {
            label: aDate.getDate().toString(),
            value: new Date(aDate),
            type: checkCellType(aDate.getMonth() === month - 1 || numberOfWeek !== "auto"),
            disabled: !!disabledDate && disabledDate(aDate)
          };
          aDate.setDate(aDate.getDate() + 1);
        }
      }
    } else if (calendarMode === "month") {
      data[0] = [];
      for (var _i = 0; _i < 12; _i++) {
        data[0][Number(_i)] = {
          label: (0, _date.monthFormatter)(locale).format(new Date(year, _i)),
          value: new Date(year, _i, 1),
          type: _propsType.CellType.IN_VIEW,
          disabled: false
        };
      }
    } else if (calendarMode === "year") {
      var decadeStartYear = Math.floor(year / 10) * 10;
      var decadeEndYear = decadeStartYear + 9;
      data[0] = [];
      for (var _i2 = 0; _i2 < 12; _i2++) {
        var aYear = decadeStartYear + _i2 - 1;
        data[0][Number(_i2)] = {
          label: String(aYear),
          value: new Date(aYear, 0, 1),
          type: checkCellType(aYear >= decadeStartYear && aYear <= decadeEndYear),
          disabled: false
        };
      }
    } else if (calendarMode === "decade") {
      var centuryStartYear = Math.floor(year / 100) * 100;
      var centuryEndYear = centuryStartYear + 99;
      data[0] = [];
      for (var _i3 = 0; _i3 < 12; _i3++) {
        var _aYear = centuryStartYear + _i3 * 10 - 10;
        data[0][Number(_i3)] = {
          label: _aYear + "-" + (_aYear + 9),
          value: new Date(_aYear, 0, 1),
          type: checkCellType(_aYear >= centuryStartYear && _aYear <= centuryEndYear),
          disabled: false
        };
      }
    } else {
      throw new Error("Invalid calendar mode: " + calendarMode);
    }
    return {
      header: header,
      body: data
    };
  }, [disabledDate, dayFormatter, calendarMode, dayOfWeekArray, dayOfWeekNameRender, numberOfWeek, startOfWeek, locale]);
  var getPrevValue = _react.default.useCallback(function (aValue) {
    var newDate = new Date(aValue);
    var monthDecrement;
    var dayDecrement;
    var yearDecrement;
    switch (calendarMode) {
      case "date":
        var _ref = numberOfWeek === "auto" ? [1, 0] : [0, 7 * numberOfWeek];
        monthDecrement = _ref[0];
        dayDecrement = _ref[1];
        newDate.setMonth(newDate.getMonth() - monthDecrement);
        newDate.setDate(newDate.getDate() - dayDecrement);
        break;
      case "month":
      case "year":
      case "decade":
        yearDecrement = calendarMode === "month" ? 1 : calendarMode === "year" ? 10 : 100;
        newDate.setFullYear(newDate.getFullYear() - yearDecrement);
        newDate.setMonth(0);
        newDate.setDate(1);
        break;
      default:
        break;
    }
    return newDate;
  }, [calendarMode, numberOfWeek]);
  var getNextValue = _react.default.useCallback(function (aValue) {
    var newDate = new Date(aValue);
    var monthIncrement;
    var dayIncrement;
    var yearIncrement;
    switch (calendarMode) {
      case "date":
        var _ref2 = numberOfWeek === "auto" ? [1, 0] : [0, 7 * numberOfWeek];
        monthIncrement = _ref2[0];
        dayIncrement = _ref2[1];
        newDate.setMonth(newDate.getMonth() + monthIncrement);
        newDate.setDate(newDate.getDate() + dayIncrement);
        break;
      case "month":
      case "year":
      case "decade":
        yearIncrement = calendarMode === "month" ? 1 : calendarMode === "year" ? 10 : 100;
        newDate.setFullYear(newDate.getFullYear() + yearIncrement);
        newDate.setMonth(0);
        newDate.setDate(1);
        break;
      default:
        break;
    }
    return newDate;
  }, [calendarMode, numberOfWeek]);
  var _React$useState3 = _react.default.useState([getPrevValue(currentValue), currentValue, getNextValue(currentValue)]),
    panelArray = _React$useState3[0],
    setPanelArray = _React$useState3[1];
  var _React$useState4 = _react.default.useState(1),
    currentIndex = _React$useState4[0],
    setCurrentIndex = _React$useState4[1];
  var handleCellClick = _react.default.useCallback(function (data, type, currentPanelIndex) {
    var nextPanelMode = calendarMode === "date" ? "date" : calendarMode === "month" ? "date" : calendarMode === "year" ? "month" : "year";
    setPanelArray(function (prev) {
      var newPanelArray = [].concat(prev);
      newPanelArray[Number(currentPanelIndex)] = data;
      return newPanelArray;
    });
    setCurrentValue(data);
    if (type === _propsType.CellType.IN_VIEW) {
      setCalendarMode(nextPanelMode);
      setSelectedValue(data);
      onSelect == null || onSelect(data, {
        source: calendarMode
      });
    }
  }, [calendarMode, onSelect]);
  var handleSwiperChange = _react.default.useCallback(function (nextIndex) {
    if (currentIndex === 1 && nextIndex === 0 || currentIndex === 2 && nextIndex === 1 || currentIndex === 0 && nextIndex === 2) {
      panelArray[Number(nextIndex)] = getPrevValue(panelArray[Number(currentIndex)]);
      panelArray[Number(nextIndex + 2) % 3] = getPrevValue(panelArray[Number(nextIndex)]);
      setPanelArray(panelArray);
      setCurrentIndex(nextIndex);
    } else if (currentIndex === 0 && nextIndex === 1 || currentIndex === 1 && nextIndex === 2 || currentIndex === 2 && nextIndex === 0) {
      panelArray[Number(nextIndex)] = getNextValue(panelArray[Number(currentIndex)]);
      panelArray[Number(nextIndex + 1) % 3] = getNextValue(panelArray[Number(nextIndex)]);
      setPanelArray(panelArray);
      setCurrentIndex(nextIndex);
    }
    setCurrentValue(panelArray[nextIndex]);
    onPanelChange == null || onPanelChange(panelArray[nextIndex], calendarMode);
  }, [calendarMode, currentIndex, getNextValue, getPrevValue, onPanelChange, panelArray]);
  return /*#__PURE__*/_react.default.createElement(_context.CalendarContext.Provider, {
    value: contextValue
  }, /*#__PURE__*/_react.default.createElement("div", {
    ref: calendarRef,
    className: (0, _clsx.default)(classes, props.className),
    style: props.style
  }, /*#__PURE__*/_react.default.createElement(_CalendarHeader.default, {
    value: currentValue,
    onPrev: function onPrev() {
      var _swiperRef$current;
      (_swiperRef$current = swiperRef.current) == null || _swiperRef$current.prev();
    },
    onNext: function onNext() {
      var _swiperRef$current2;
      (_swiperRef$current2 = swiperRef.current) == null || _swiperRef$current2.next();
    },
    onTypeChange: function onTypeChange(type) {
      return handleOnTypeChange(type);
    },
    defaultMode: calendarMode
  }), /*#__PURE__*/_react.default.createElement(_swiper.default, {
    dots: false,
    ref: swiperRef,
    afterChange: function afterChange(index) {
      return handleSwiperChange(index);
    },
    defaultActive: currentIndex,
    loop: true
  }, panelArray.map(function (item, index) {
    var panelData = generatePanelData(item);
    return /*#__PURE__*/_react.default.createElement(_swiper.default.Slide, {
      key: index
    }, /*#__PURE__*/_react.default.createElement(_CalendarPanel.default, {
      body: panelData.body,
      header: panelData.header,
      onCellClick: function onCellClick(data, type) {
        return handleCellClick(data, type, index);
      }
    }));
  }))));
});
var _default = exports.default = Calendar;