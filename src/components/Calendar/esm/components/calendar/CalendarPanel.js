import React, { useContext } from 'react'
import classNames from 'clsx'
import { getPrefixCls } from '../../utils/class'
import { CellType } from './props-type'
import CalendarCell from './CalendarCell'
import { CalendarContext } from './context'
var getStatusFromDate = (date) => {
  var statusMap = {
    dcVang: 'Đang chờ',
    StXanh: 'Sắp',
    HTHong: 'Hoàn thành',
    DDen: 'Hủy',
    // Add other mappings if needed
  }
  if (statusMap === 'Đang chờ') {
    return React.createElement('span', {
      className: 'status-dot yellow-dot',
    })
  }
  if (statusMap === 'Sắp') {
    return React.createElement('span', {
      className: 'status-dot green-dot',
    })
  }
  if (statusMap === 'Hoàn thành') {
    return React.createElement('span', {
      className: 'status-dot pink-dot',
    })
  }
  if (statusMap === 'Hủy') {
    return React.createElement('span', {
      className: 'status-dot black-dot',
    })
  } else return null
}

var CalendarPanel = function CalendarPanel(props) {
  var header = props.header,
    body = props.body,
    onCellClick = props.onCellClick
  var _useContext = useContext(CalendarContext),
    cellRender = _useContext.cellRender,
    fullCellRender = _useContext.fullCellRender,
    mode = _useContext.mode,
    selectedDate = _useContext.selectedDate
  var prefixCls = getPrefixCls('calendar-panel')
  var classes = classNames(prefixCls, [prefixCls + '-' + mode])
  var compareDate = function compareDate(date1, date2) {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    )
  }

  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: classes,
    },
    /*#__PURE__*/ React.createElement(
      'div',
      { className: prefixCls + '-status' },
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: 'row',
        },
        /*#__PURE__*/ React.createElement(
          'div',
          {
            className: 'col-3',
          },
          /*#__PURE__*/ React.createElement('span', {
            className: 'status-dot yellow-dot',
          }),
          'Đang chờ',
        ),
        /*#__PURE__*/ React.createElement(
          'div',
          {
            className: 'col-3',
          },
          React.createElement('span', {
            className: 'status-dot green-dot',
          }),
          'Sắp',
        ),
        /*#__PURE__*/ React.createElement(
          'div',
          {
            className: 'col-3',
          },
          React.createElement('span', {
            className: 'status-dot pink-dot',
          }),
          'Hoàn thành',
        ),
        /*#__PURE__*/ React.createElement(
          'div',
          {
            className: 'col-3',
          },
          React.createElement('span', {
            className: 'status-dot black-dot',
          }),
          'Hủy',
        ),
      ),
    ),
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: prefixCls + '-body',
      },
      /*#__PURE__*/ React.createElement(
        'table',
        {
          className: prefixCls + '-content',
        },
        header.length > 0 &&
          /*#__PURE__*/ React.createElement(
            'thead',
            null,
            /*#__PURE__*/ React.createElement(
              'tr',
              null,
              header.map(function (item) {
                return /*#__PURE__*/ React.createElement(
                  'th',
                  {
                    key: String(item),
                  },
                  item,
                )
              }),
            ),
          ),
        /*#__PURE__*/ React.createElement(
          'tbody',
          null,
          body.map(function (item, index) {
            return /*#__PURE__*/ React.createElement(
              'tr',
              {
                key: index,
              },
              item.map(function (cell) {
                var _classNames
                var cellContent = cell.content
                if (typeof cellRender === 'function') {
                  var cellInfo = {
                    originNode: cell.content,
                    today: new Date(),
                    type: mode,
                  }
                  cellContent = cellRender(cell.value, cellInfo)
                }
                var fullCellContent = /*#__PURE__*/ React.createElement(
                  CalendarCell,
                  {
                    label: cell.label,
                    content: cellContent,
                  },
                )
                if (typeof fullCellRender === 'function') {
                  var _cellInfo = {
                    originNode: fullCellContent,
                    today: new Date(),
                    type: mode,
                  }
                  fullCellContent = fullCellRender(cell.value, _cellInfo)
                }
                return /*#__PURE__*/ React.createElement(
                  'td',
                  {
                    key: cell.label,
                    className: classNames(
                      prefixCls + '-cell',
                      ((_classNames = {}),
                      (_classNames[prefixCls + '-cell-in-view'] =
                        cell.type === CellType.IN_VIEW),
                      (_classNames[prefixCls + '-cell-selected'] = compareDate(
                        cell.value,
                        selectedDate,
                      )),
                      (_classNames[prefixCls + '-cell-today'] = compareDate(
                        cell.value,
                        new Date(),
                      )),
                      (_classNames[prefixCls + '-cell-disabled'] =
                        cell.disabled),
                      _classNames),
                    ),
                    onClick: function onClick() {
                      var currentDate = new Date()
                      if (!cell.disabled) {
                        var selectedValue = new Date(
                          cell.value.setHours(
                            currentDate.getHours(),
                            currentDate.getMinutes(),
                            currentDate.getSeconds(),
                            currentDate.getMilliseconds(),
                          ),
                        )
                        onCellClick == null ||
                          onCellClick(selectedValue, cell.type)
                      }
                    },
                    role: 'presentation',
                  },
                  fullCellContent,
                )
              }),
            )
          }),
        ),
      ),
    ),
  )
}

export default CalendarPanel
