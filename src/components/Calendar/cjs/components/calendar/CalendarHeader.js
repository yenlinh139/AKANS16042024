"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _class = require("../../utils/class");
var _button = _interopRequireDefault(require("../button"));
var _icon = _interopRequireDefault(require("../icon"));
var _context = require("./context");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
var CalendarHeaderTitle = function CalendarHeaderTitle(props) {
  var children = props.children,
    onClick = props.onClick;
  var prefixCls = (0, _class.getPrefixCls)("calendar-header-title");
  return /*#__PURE__*/_react.default.createElement("span", {
    className: prefixCls,
    onClick: onClick,
    role: "presentation"
  }, children);
};
var CalendarHeader = function CalendarHeader(props) {
  var context = (0, _react.useContext)(_context.CalendarContext);
  var rootClassName = props.rootClassName,
    onNext = props.onNext,
    onPrev = props.onPrev,
    onTypeChange = props.onTypeChange,
    currentValue = props.value;
  var locale = context == null ? void 0 : context.locale;
  var mode = context == null ? void 0 : context.mode;
  // const [currentValue] = React.useState<Date>(value);

  var prefixCls = (0, _class.getPrefixCls)("calendar-header");
  var classes = (0, _clsx.default)(prefixCls, rootClassName);
  var handleTypeChange = (0, _react.useCallback)(function (type) {
    onTypeChange(type);
  }, [onTypeChange]);
  var renderDateViewModeTitle = _react.default.useMemo(function () {
    var dateString = currentValue.toLocaleString(locale, {
      month: "long",
      year: "numeric"
    });
    var monthString = currentValue.toLocaleString(locale, {
      month: "long"
    });
    var yearString = currentValue.toLocaleString(locale, {
      year: "numeric"
    });
    var monthPosition = dateString.indexOf(monthString.toLocaleLowerCase());
    if (monthPosition === 0) {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(CalendarHeaderTitle, {
        onClick: function onClick() {
          return handleTypeChange("month");
        }
      }, monthString), " ", /*#__PURE__*/_react.default.createElement(CalendarHeaderTitle, {
        onClick: function onClick() {
          return handleTypeChange("year");
        }
      }, yearString));
    }
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(CalendarHeaderTitle, {
      onClick: function onClick() {
        return handleTypeChange("year");
      }
    }, yearString), " ", /*#__PURE__*/_react.default.createElement(CalendarHeaderTitle, {
      onClick: function onClick() {
        return handleTypeChange("month");
      }
    }, monthString));
  }, [currentValue, handleTypeChange, locale]);
  var renderMonthViewModeTitle = _react.default.useMemo(function () {
    var yearString = currentValue.toLocaleString(locale, {
      year: "numeric"
    });
    return /*#__PURE__*/_react.default.createElement(CalendarHeaderTitle, {
      onClick: function onClick() {
        return handleTypeChange("year");
      }
    }, yearString);
  }, [currentValue, handleTypeChange, locale]);
  var renderYearViewModeTitle = _react.default.useMemo(function () {
    var currentYear = currentValue.getFullYear();
    var decadeStartYear = Math.floor(currentYear / 10) * 10;
    var decadeEndYear = decadeStartYear + 9;
    var decadeString = decadeStartYear + " - " + decadeEndYear;
    return /*#__PURE__*/_react.default.createElement(CalendarHeaderTitle, {
      onClick: function onClick() {
        return handleTypeChange("decade");
      }
    }, decadeString);
  }, [currentValue, handleTypeChange]);
  var renderDecadeViewModeTitle = _react.default.useMemo(function () {
    var currentYear = currentValue.getFullYear();
    var centuryStartYear = Math.floor(currentYear / 100) * 100;
    var centuryEndYear = centuryStartYear + 99;
    var centuryString = centuryStartYear + " - " + centuryEndYear;
    return /*#__PURE__*/_react.default.createElement(CalendarHeaderTitle, {
      onClick: function onClick() {
        return null;
      }
    }, centuryString);
  }, [currentValue]);
  var formattedTitle = _react.default.useMemo(function () {
    switch (mode) {
      case "date":
        return renderDateViewModeTitle;
      case "month":
        return renderMonthViewModeTitle;
      case "year":
        return renderYearViewModeTitle;
      case "decade":
        return renderDecadeViewModeTitle;
      default:
        return renderDateViewModeTitle;
    }
  }, [mode, renderDateViewModeTitle, renderMonthViewModeTitle, renderYearViewModeTitle, renderDecadeViewModeTitle]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes
  }, /*#__PURE__*/_react.default.createElement(_button.default, {
    className: prefixCls + "-btn-prev",
    icon: /*#__PURE__*/_react.default.createElement(_icon.default, {
      icon: "zi-arrow-left"
    }),
    variant: "tertiary",
    onClick: onPrev
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: prefixCls + "-title"
  }, formattedTitle), /*#__PURE__*/_react.default.createElement(_button.default, {
    className: prefixCls + "-btn-next",
    icon: /*#__PURE__*/_react.default.createElement(_icon.default, {
      icon: "zi-arrow-right"
    }),
    variant: "tertiary",
    onClick: onNext
  }));
};
var _default = exports.default = CalendarHeader;