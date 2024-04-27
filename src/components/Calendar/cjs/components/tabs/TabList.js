"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = exports.TabList = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _react = _interopRequireWildcard(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _TabContext = _interopRequireDefault(require("./TabContext"));
var _Tab = _interopRequireDefault(require("./Tab"));
var _class = require("../../utils/class");
var _excluded = ["key", "style", "className", "tabKey"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
var TabList = exports.TabList = function TabList(props) {
  var _useContext = (0, _react.useContext)(_TabContext.default),
    tabs = _useContext.tabs;
  var activeKey = props.activeKey,
    id = props.id,
    destroyInactiveTabPane = props.destroyInactiveTabPane;
  var prefixCls = (0, _class.getPrefixCls)("tab-content");
  var cls = (0, _clsx.default)(prefixCls);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: cls
  }, tabs.map(function (tab) {
    var key = tab.key,
      tabStyle = tab.style,
      tabClassName = tab.className,
      tabKey = tab.tabKey,
      restTabProps = (0, _objectWithoutPropertiesLoose2.default)(tab, _excluded);
    var active = key === activeKey;
    return /*#__PURE__*/_react.default.createElement(_Tab.default, (0, _extends2.default)({
      key: key
    }, restTabProps, {
      style: tabStyle,
      active: active,
      id: id,
      tabKey: tabKey || key,
      className: tabClassName,
      destroyInactiveTabPane: destroyInactiveTabPane
    }));
  }));
};
var _default = exports.default = TabList;