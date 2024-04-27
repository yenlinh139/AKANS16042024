"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _react = _interopRequireWildcard(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _date = require("../../utils/date");
var _class = require("../../utils/class");
var _picker = _interopRequireDefault(require("../picker"));
var _icon = _interopRequireDefault(require("../icon"));
var _utils = require("./utils");
var _constants = require("./common/constants");
var _excluded = ["inputClass", "suffix", "label", "placeholder", "status", "helperText", "errorText", "value", "defaultValue", "startDate", "onChange", "disabled", "onVisibilityChange", "endDate", "columnsFormat", "formatPickedValueDisplay", "locale", "dateFormat", "title"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
var DatePicker = function DatePicker(props) {
  var inputClass = props.inputClass,
    suffix = props.suffix,
    label = props.label,
    placeholder = props.placeholder,
    status = props.status,
    helperText = props.helperText,
    errorText = props.errorText,
    value = props.value,
    defaultValue = props.defaultValue,
    _props$startDate = props.startDate,
    startDate = _props$startDate === void 0 ? new Date(1900, 0, 1, 0, 0, 0) : _props$startDate,
    onChange = props.onChange,
    disabled = props.disabled,
    onVisibilityChange = props.onVisibilityChange,
    _props$endDate = props.endDate,
    endDate = _props$endDate === void 0 ? new Date(2100, 31, 11, 0, 0, 0) : _props$endDate,
    _props$columnsFormat = props.columnsFormat,
    columnsFormat = _props$columnsFormat === void 0 ? "DD-MM-YYYY" : _props$columnsFormat,
    formatPickedValueDisplay = props.formatPickedValueDisplay,
    _props$locale = props.locale,
    locale = _props$locale === void 0 ? "vi-VN" : _props$locale,
    _props$dateFormat = props.dateFormat,
    dateFormat = _props$dateFormat === void 0 ? "dd/mm/yyyy" : _props$dateFormat,
    title = props.title,
    restProps = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  var prefixCls = (0, _class.getPrefixCls)("date-picker");

  // Concat base class name and user class name
  var cls = (0, _clsx.default)(prefixCls, inputClass);
  var _useState = (0, _react.useState)(function () {
      return (0, _utils.createPickerColumns)(value || defaultValue || new Date(), {
        startDate: startDate,
        endDate: endDate,
        datePickerColumns: columnsFormat,
        dateFormat: dateFormat,
        locale: locale
      });
    }),
    datePickerData = _useState[0],
    setDatePickerData = _useState[1];
  var _useState2 = (0, _react.useState)(),
    dateValue = _useState2[0],
    setDateValue = _useState2[1];
  // Set today as default value
  var initDateValue = (0, _utils.convertDateToPickerValue)(new Date());

  // Convert user default value to picker value
  var defaultDateValue = defaultValue ? (0, _utils.convertDateToPickerValue)(defaultValue) : undefined;

  // Convert value passed in from props to picker value
  (0, _react.useEffect)(function () {
    if (value) {
      setDateValue((0, _utils.convertDateToPickerValue)(value));
    } else {
      setDateValue(undefined);
    }
  }, [value]);
  var updateData = function updateData(curDate, curMonth, curYear, fireOnChange) {
    if (fireOnChange === void 0) {
      fireOnChange = true;
    }
    var currentDate = curDate;
    var currentMonth = curMonth;
    var currentYear = curYear;
    var needUpdate = false;
    var _getDateRange = (0, _utils.getDateRange)(startDate, endDate),
      settingStartDate = _getDateRange.startDate,
      startMonth = _getDateRange.startMonth,
      settingEndDate = _getDateRange.endDate,
      endMonth = _getDateRange.endMonth;
    var _getPosition = (0, _utils.getPosition)({
        startDate: startDate,
        endDate: endDate,
        currentMonth: currentMonth,
        currentYear: currentYear
      }),
      isEndMonth = _getPosition.isEndMonth,
      isEndYear = _getPosition.isEndYear,
      isStartMonth = _getPosition.isStartMonth,
      isStartYear = _getPosition.isStartYear;
    var dateCols;
    var monthCols;
    var yearCols;
    datePickerData.forEach(function (col) {
      if (col.name === _constants.DATE_COL_NAME) {
        dateCols = col;
      }
      if (col.name === _constants.MONTH_COL_NAME) {
        monthCols = col;
      }
      if (col.name === _constants.YEAR_COL_NAME) {
        yearCols = col;
      }
    });
    var startOptMonth = isStartYear ? startMonth : 1;
    var endOptMonth = isEndYear ? endMonth : 12;
    if (monthCols && monthCols.options.length !== endOptMonth - startOptMonth + 1) {
      needUpdate = true;
      var opts = [];
      for (var m = startOptMonth; m <= endOptMonth; m += 1) {
        opts.push({
          value: m.toString(),
          displayName: (0, _date.monthFormatter)(locale).format(new Date("0001-01-01").setMonth(m - 1))
        });
      }
      monthCols.options = [].concat(opts);
    }
    if (isStartYear && currentMonth < startMonth) {
      currentMonth = startMonth;
    }
    if (isEndYear && currentMonth > endMonth) {
      currentMonth = endMonth;
    }
    var monthlyDays = (0, _utils.getMonthlyDay)(currentYear, currentMonth);
    var startOptDate = isStartMonth ? settingStartDate : 1;
    var endOptDate = isEndMonth ? settingEndDate : monthlyDays;
    if (dateCols && dateCols.options.length !== endOptDate - startOptDate + 1) {
      needUpdate = true;
      var _opts = [];
      for (var d = startOptDate; d <= endOptDate; d += 1) {
        _opts.push({
          value: d.toString(),
          displayName: (0, _date.dayFormatter)(locale).format(new Date("0001-01-01").setDate(d))
        });
      }
      dateCols.options = [].concat(_opts);
    }
    if (currentDate > monthlyDays) {
      currentDate = monthlyDays;
    }
    if (isEndMonth && currentDate > settingEndDate) {
      currentDate = settingEndDate;
    } else if (isStartMonth && currentDate < settingStartDate) {
      currentDate = settingStartDate;
    }
    if (needUpdate) {
      var newOpts = [];
      datePickerData.forEach(function (col) {
        if (col.name === _constants.DATE_COL_NAME && dateCols) {
          newOpts.push(dateCols);
        }
        if (col.name === _constants.YEAR_COL_NAME && yearCols) {
          newOpts.push(yearCols);
        }
        if (col.name === _constants.MONTH_COL_NAME && monthCols) {
          newOpts.push(monthCols);
        }
      });
      setDatePickerData(newOpts);
    }
    if (!Number.isNaN(curYear) && !Number.isNaN(curMonth) && !Number.isNaN(curDate)) {
      var _setDateValue;
      setDateValue((_setDateValue = {}, _setDateValue[_constants.YEAR_COL_NAME] = currentYear.toString(), _setDateValue[_constants.MONTH_COL_NAME] = currentMonth.toString(), _setDateValue[_constants.DATE_COL_NAME] = currentDate.toString(), _setDateValue));
      if (fireOnChange) {
        var _onChange;
        onChange == null || onChange(new Date(currentYear, currentMonth - 1, currentDate, 0, 0, 0), (_onChange = {}, _onChange[_constants.YEAR_COL_NAME] = currentYear.toString(), _onChange[_constants.MONTH_COL_NAME] = currentMonth.toString(), _onChange[_constants.DATE_COL_NAME] = currentDate.toString(), _onChange));
      }
    }
  };

  // Event handler for picker change
  var handleChangePicker = function handleChangePicker(val) {
    var _val$DATE_COL_NAME, _val$MONTH_COL_NAME, _val$YEAR_COL_NAME;
    var date = parseInt((_val$DATE_COL_NAME = val[_constants.DATE_COL_NAME]) == null ? void 0 : _val$DATE_COL_NAME.value.toString(), 10);
    var month = parseInt((_val$MONTH_COL_NAME = val[_constants.MONTH_COL_NAME]) == null ? void 0 : _val$MONTH_COL_NAME.value.toString(), 10);
    var year = parseInt((_val$YEAR_COL_NAME = val[_constants.YEAR_COL_NAME]) == null ? void 0 : _val$YEAR_COL_NAME.value.toString(), 10);
    if (!Number.isNaN(year)) {
      updateData(date, month, year);
    }
  };
  var updateDatePickerData = function updateDatePickerData() {
    if (!value) {
      return;
    }
    updateData(value.getDate(), value.getMonth() + 1, value.getFullYear(), false);
  };
  var suffixIconNode = /*#__PURE__*/_react.default.createElement("span", {
    className: prefixCls + "-suffix"
  }, suffix || /*#__PURE__*/_react.default.createElement(_icon.default, {
    icon: "zi-calendar"
  }));
  var formatDateValue = function formatDateValue(pickedValue) {
    if (pickedValue[_constants.DATE_COL_NAME] && pickedValue[_constants.MONTH_COL_NAME] && pickedValue[_constants.YEAR_COL_NAME]) {
      var curDate = parseInt(pickedValue[_constants.DATE_COL_NAME].value.toString(), 10);
      var curMonth = parseInt(pickedValue[_constants.MONTH_COL_NAME].value.toString(), 10);
      var curYear = parseInt(pickedValue[_constants.YEAR_COL_NAME].value.toString(), 10);
      var date = new Date(curYear, curMonth - 1, curDate, 0, 0, 0);
      if (formatPickedValueDisplay) {
        return formatPickedValueDisplay(date);
      }
      return (0, _utils.formatDate)(date, {
        dateFormat: dateFormat,
        locale: locale
      });
    }
    return "";
  };
  return /*#__PURE__*/_react.default.createElement(_picker.default, (0, _extends2.default)({
    data: datePickerData,
    title: title,
    label: label,
    placeholder: placeholder || dateFormat,
    status: status,
    value: dateValue,
    defaultValue: defaultDateValue,
    helperText: helperText,
    errorText: errorText,
    inputClass: cls,
    datePicker: true,
    disabled: disabled,
    formatPickedValueDisplay: formatDateValue,
    initData: initDateValue,
    suffix: suffixIconNode,
    updateDatePickerData: updateDatePickerData,
    onChange: handleChangePicker,
    onVisibilityChange: onVisibilityChange
  }, restProps));
};
DatePicker.displayName = "zaui-date-picker";
var _default = exports.default = DatePicker;