import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["inputClass", "suffix", "label", "placeholder", "status", "helperText", "errorText", "value", "defaultValue", "startDate", "onChange", "disabled", "onVisibilityChange", "endDate", "columnsFormat", "formatPickedValueDisplay", "locale", "dateFormat", "title"];
import React, { useEffect, useState } from "react";
import classNames from "clsx";
import { dayFormatter, monthFormatter } from "../../utils/date";
import { getPrefixCls } from "../../utils/class";
import Picker from "../picker";
import Icon from "../icon";
import { convertDateToPickerValue, createPickerColumns, formatDate, getDateRange, getMonthlyDay, getPosition } from "./utils";
import { YEAR_COL_NAME, DATE_COL_NAME, MONTH_COL_NAME } from "./common/constants";
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
    restProps = _objectWithoutPropertiesLoose(props, _excluded);
  var prefixCls = getPrefixCls("date-picker");

  // Concat base class name and user class name
  var cls = classNames(prefixCls, inputClass);
  var _useState = useState(function () {
      return createPickerColumns(value || defaultValue || new Date(), {
        startDate: startDate,
        endDate: endDate,
        datePickerColumns: columnsFormat,
        dateFormat: dateFormat,
        locale: locale
      });
    }),
    datePickerData = _useState[0],
    setDatePickerData = _useState[1];
  var _useState2 = useState(),
    dateValue = _useState2[0],
    setDateValue = _useState2[1];
  // Set today as default value
  var initDateValue = convertDateToPickerValue(new Date());

  // Convert user default value to picker value
  var defaultDateValue = defaultValue ? convertDateToPickerValue(defaultValue) : undefined;

  // Convert value passed in from props to picker value
  useEffect(function () {
    if (value) {
      setDateValue(convertDateToPickerValue(value));
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
    var _getDateRange = getDateRange(startDate, endDate),
      settingStartDate = _getDateRange.startDate,
      startMonth = _getDateRange.startMonth,
      settingEndDate = _getDateRange.endDate,
      endMonth = _getDateRange.endMonth;
    var _getPosition = getPosition({
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
      if (col.name === DATE_COL_NAME) {
        dateCols = col;
      }
      if (col.name === MONTH_COL_NAME) {
        monthCols = col;
      }
      if (col.name === YEAR_COL_NAME) {
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
          displayName: monthFormatter(locale).format(new Date("0001-01-01").setMonth(m - 1))
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
    var monthlyDays = getMonthlyDay(currentYear, currentMonth);
    var startOptDate = isStartMonth ? settingStartDate : 1;
    var endOptDate = isEndMonth ? settingEndDate : monthlyDays;
    if (dateCols && dateCols.options.length !== endOptDate - startOptDate + 1) {
      needUpdate = true;
      var _opts = [];
      for (var d = startOptDate; d <= endOptDate; d += 1) {
        _opts.push({
          value: d.toString(),
          displayName: dayFormatter(locale).format(new Date("0001-01-01").setDate(d))
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
        if (col.name === DATE_COL_NAME && dateCols) {
          newOpts.push(dateCols);
        }
        if (col.name === YEAR_COL_NAME && yearCols) {
          newOpts.push(yearCols);
        }
        if (col.name === MONTH_COL_NAME && monthCols) {
          newOpts.push(monthCols);
        }
      });
      setDatePickerData(newOpts);
    }
    if (!Number.isNaN(curYear) && !Number.isNaN(curMonth) && !Number.isNaN(curDate)) {
      var _setDateValue;
      setDateValue((_setDateValue = {}, _setDateValue[YEAR_COL_NAME] = currentYear.toString(), _setDateValue[MONTH_COL_NAME] = currentMonth.toString(), _setDateValue[DATE_COL_NAME] = currentDate.toString(), _setDateValue));
      if (fireOnChange) {
        var _onChange;
        onChange == null || onChange(new Date(currentYear, currentMonth - 1, currentDate, 0, 0, 0), (_onChange = {}, _onChange[YEAR_COL_NAME] = currentYear.toString(), _onChange[MONTH_COL_NAME] = currentMonth.toString(), _onChange[DATE_COL_NAME] = currentDate.toString(), _onChange));
      }
    }
  };

  // Event handler for picker change
  var handleChangePicker = function handleChangePicker(val) {
    var _val$DATE_COL_NAME, _val$MONTH_COL_NAME, _val$YEAR_COL_NAME;
    var date = parseInt((_val$DATE_COL_NAME = val[DATE_COL_NAME]) == null ? void 0 : _val$DATE_COL_NAME.value.toString(), 10);
    var month = parseInt((_val$MONTH_COL_NAME = val[MONTH_COL_NAME]) == null ? void 0 : _val$MONTH_COL_NAME.value.toString(), 10);
    var year = parseInt((_val$YEAR_COL_NAME = val[YEAR_COL_NAME]) == null ? void 0 : _val$YEAR_COL_NAME.value.toString(), 10);
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
  var suffixIconNode = /*#__PURE__*/React.createElement("span", {
    className: prefixCls + "-suffix"
  }, suffix || /*#__PURE__*/React.createElement(Icon, {
    icon: "zi-calendar"
  }));
  var formatDateValue = function formatDateValue(pickedValue) {
    if (pickedValue[DATE_COL_NAME] && pickedValue[MONTH_COL_NAME] && pickedValue[YEAR_COL_NAME]) {
      var curDate = parseInt(pickedValue[DATE_COL_NAME].value.toString(), 10);
      var curMonth = parseInt(pickedValue[MONTH_COL_NAME].value.toString(), 10);
      var curYear = parseInt(pickedValue[YEAR_COL_NAME].value.toString(), 10);
      var date = new Date(curYear, curMonth - 1, curDate, 0, 0, 0);
      if (formatPickedValueDisplay) {
        return formatPickedValueDisplay(date);
      }
      return formatDate(date, {
        dateFormat: dateFormat,
        locale: locale
      });
    }
    return "";
  };
  return /*#__PURE__*/React.createElement(Picker, _extends({
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
export default DatePicker;