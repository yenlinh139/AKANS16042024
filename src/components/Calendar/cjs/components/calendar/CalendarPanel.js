"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _class = require("../../utils/class");
var _propsType = require("./props-type");
var _CalendarCell = _interopRequireDefault(require("./CalendarCell"));
var _context = require("./context");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
var CalendarPanel = function CalendarPanel(props) {
  var header = props.header,
    body = props.body,
    onCellClick = props.onCellClick;
  var _useContext = (0, _react.useContext)(_context.CalendarContext),
    cellRender = _useContext.cellRender,
    fullCellRender = _useContext.fullCellRender,
    mode = _useContext.mode,
    selectedDate = _useContext.selectedDate;
  var prefixCls = (0, _class.getPrefixCls)("calendar-panel");
  var classes = (0, _clsx.default)(prefixCls, [prefixCls + "-" + mode]);
  var compareDate = function compareDate(date1, date2) {
    return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate();
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: prefixCls + "-body"
  }, /*#__PURE__*/_react.default.createElement("table", {
    className: prefixCls + "-content"
  }, header.length > 0 && /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, header.map(function (item) {
    return /*#__PURE__*/_react.default.createElement("th", {
      key: String(item)
    }, item);
  }))), /*#__PURE__*/_react.default.createElement("tbody", null, body.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: index
    }, item.map(function (cell) {
      var _classNames;
      var cellContent = cell.content;
      if (typeof cellRender === "function") {
        var cellInfo = {
          originNode: cell.content,
          today: new Date(),
          type: mode
        };
        cellContent = cellRender(cell.value, cellInfo);
      }
      var fullCellContent = /*#__PURE__*/_react.default.createElement(_CalendarCell.default, {
        label: cell.label,
        content: cellContent
      });
      if (typeof fullCellRender === "function") {
        var _cellInfo = {
          originNode: fullCellContent,
          today: new Date(),
          type: mode
        };
        fullCellContent = fullCellRender(cell.value, _cellInfo);
      }
      return /*#__PURE__*/_react.default.createElement("td", {
        key: cell.label,
        className: (0, _clsx.default)(prefixCls + "-cell", (_classNames = {}, _classNames[prefixCls + "-cell-in-view"] = cell.type === _propsType.CellType.IN_VIEW, _classNames[prefixCls + "-cell-selected"] = compareDate(cell.value, selectedDate), _classNames[prefixCls + "-cell-today"] = compareDate(cell.value, new Date()), _classNames[prefixCls + "-cell-disabled"] = cell.disabled, _classNames)),
        onClick: function onClick() {
          var currentDate = new Date();
          if (!cell.disabled) {
            var selectedValue = new Date(cell.value.setHours(currentDate.getHours(), currentDate.getMinutes(), currentDate.getSeconds(), currentDate.getMilliseconds()));
            onCellClick == null || onCellClick(selectedValue, cell.type);
          }
        },
        role: "presentation"
      }, fullCellContent);
    }));
  })))));
};
var _default = exports.default = CalendarPanel;