import React, { useContext } from 'react'
import classNames from 'clsx'
import { getPrefixCls } from '../../utils/class'
import { CellType } from './props-type'
import CalendarCell from './CalendarCell'
import { CalendarContext } from './context'

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
                // Tính toán số lượng span cần hiển thị dựa trên dữ liệu của cell
                var numberOfSpans = 0
                if (cell.value.getDate() === 11) {
                  numberOfSpans = 1
                } else if (cell.value.getDate() === 15) {
                  numberOfSpans = 2
                } else if (cell.value.getDate() === 17) {
                  numberOfSpans = 1
                } else if (cell.value.getDate() === 16) {
                  numberOfSpans = 1
                } else if (cell.value.getDate() === 27) {
                  numberOfSpans = 3
                } else if (cell.value.getDate() === 17) {
                  numberOfSpans = 1
                }

                // Tạo các span tương ứng với số lượng đã tính toán
                var spanElements = []
                for (var i = 0; i < numberOfSpans; i++) {
                  spanElements.push(
                    /*#__PURE__*/ React.createElement('span', {
                      key: i,
                      className: classNames('status-dot', {
                        'green-dot': i === 0,
                        'yellow-dot': i === 1,
                        'pink-dot': i === 2,
                        'black-dot': i === 3,
                      }),
                    }),
                  )
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
                  /*#__PURE__*/ React.createElement(
                    'div',
                    { className: 'status-UI' },
                    spanElements,
                  ),
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
