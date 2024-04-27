import React, { useCallback, useContext } from 'react'
import classNames from 'clsx'
import { getPrefixCls } from '../../utils/class'
import Button from '../button'
import Icon from '../icon'
import { CalendarContext } from './context'
var CalendarHeaderTitle = function CalendarHeaderTitle(props) {
  var children = props.children,
    onClick = props.onClick
  var prefixCls = getPrefixCls('calendar-header-title')
  return /*#__PURE__*/ React.createElement(
    'span',
    {
      className: prefixCls,
      onClick: onClick,
      role: 'presentation',
    },
    children.replace(' ', ''),
  )
}
var CalendarHeader = function CalendarHeader(props) {
  var context = useContext(CalendarContext)
  var rootClassName = props.rootClassName,
    onNext = props.onNext,
    onPrev = props.onPrev,
    onTypeChange = props.onTypeChange,
    currentValue = props.value
  var locale = context == null ? void 0 : context.locale
  var mode = context == null ? void 0 : context.mode
  // const [currentValue] = React.useState<Date>(value);

  var prefixCls = getPrefixCls('calendar-header')
  var classes = classNames(prefixCls, rootClassName)
  var handleTypeChange = useCallback(
    function (type) {
      onTypeChange(type)
    },
    [onTypeChange],
  )
  var renderDateViewModeTitle = React.useMemo(
    function () {
      var dateString = currentValue.toLocaleString(locale, {
        month: 'short',
        year: 'numeric',
      })
      var monthString = currentValue.toLocaleString(locale, {
        month: 'short',
      })
      var yearString = currentValue.toLocaleString(locale, {
        year: 'numeric',
      })
      var monthPosition = dateString.indexOf(monthString.toLocaleLowerCase())
      if (monthPosition === 0) {
        return /*#__PURE__*/ React.createElement(
          React.Fragment,
          null,
          /*#__PURE__*/ React.createElement(
            CalendarHeaderTitle,
            {
              onClick: function onClick() {
                return handleTypeChange('month')
              },
            },
            monthString,
          ),
          '/',
          /*#__PURE__*/ React.createElement(
            CalendarHeaderTitle,
            {
              onClick: function onClick() {
                return handleTypeChange('year')
              },
            },
            yearString,
          ),
        )
      }
      return /*#__PURE__*/ React.createElement(
        React.Fragment,
        null,
        /*#__PURE__*/ React.createElement(
          CalendarHeaderTitle,
          {
            onClick: function onClick() {
              return handleTypeChange('year')
            },
          },
          yearString,
        ),
        '/',
        /*#__PURE__*/ React.createElement(
          CalendarHeaderTitle,
          {
            onClick: function onClick() {
              return handleTypeChange('month')
            },
          },
          monthString,
        ),
      )
    },
    [currentValue, handleTypeChange, locale],
  )
  var renderMonthViewModeTitle = React.useMemo(
    function () {
      var yearString = currentValue.toLocaleString(locale, {
        year: 'numeric',
      })
      return /*#__PURE__*/ React.createElement(
        CalendarHeaderTitle,
        {
          onClick: function onClick() {
            return handleTypeChange('year')
          },
        },
        yearString,
      )
    },
    [currentValue, handleTypeChange, locale],
  )
  var renderYearViewModeTitle = React.useMemo(
    function () {
      var currentYear = currentValue.getFullYear()
      var decadeStartYear = Math.floor(currentYear / 10) * 10
      var decadeEndYear = decadeStartYear + 9
      var decadeString = decadeStartYear + ' - ' + decadeEndYear
      return /*#__PURE__*/ React.createElement(
        CalendarHeaderTitle,
        {
          onClick: function onClick() {
            return handleTypeChange('decade')
          },
        },
        decadeString,
      )
    },
    [currentValue, handleTypeChange],
  )
  var renderDecadeViewModeTitle = React.useMemo(
    function () {
      var currentYear = currentValue.getFullYear()
      var centuryStartYear = Math.floor(currentYear / 100) * 100
      var centuryEndYear = centuryStartYear + 99
      var centuryString = centuryStartYear + ' - ' + centuryEndYear
      return /*#__PURE__*/ React.createElement(
        CalendarHeaderTitle,
        {
          onClick: function onClick() {
            return null
          },
        },
        centuryString,
      )
    },
    [currentValue],
  )
  var formattedTitle = React.useMemo(
    function () {
      switch (mode) {
        case 'date':
          return renderDateViewModeTitle
        case 'month':
          return renderMonthViewModeTitle
        case 'year':
          return renderYearViewModeTitle
        case 'decade':
          return renderDecadeViewModeTitle
        default:
          return renderDateViewModeTitle
      }
    },
    [
      mode,
      renderDateViewModeTitle,
      renderMonthViewModeTitle,
      renderYearViewModeTitle,
      renderDecadeViewModeTitle,
    ],
  )
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: classes,
    },
    /*#__PURE__*/ React.createElement(Button, {
      className: prefixCls + '-btn-prev',
      icon: /*#__PURE__*/ React.createElement(Icon, {
        icon: 'zi-chevron-left',
      }),
      variant: 'tertiary',
      onClick: onPrev,
    }),
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: prefixCls + '-title',
      },
      formattedTitle,
    ),
    /*#__PURE__*/ React.createElement(Button, {
      className: prefixCls + '-btn-next',
      icon: /*#__PURE__*/ React.createElement(Icon, {
        icon: 'zi-chevron-right',
      }),
      variant: 'tertiary',
      onClick: onNext,
    }),
  )
}
export default CalendarHeader
