"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireWildcard(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _class = require("../../utils/class");
var _TabContext = _interopRequireDefault(require("./TabContext"));
var _useMergedState3 = _interopRequireDefault(require("../../hooks/useMergedState"));
var _TabList = _interopRequireDefault(require("./TabList"));
var _TabBar = _interopRequireDefault(require("./TabBar"));
var _utils = require("./utils");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2.default)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Tabs = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var _classNames;
  var children = props.children,
    className = props.className,
    activeKey = props.activeKey,
    defaultActiveKey = props.defaultActiveKey,
    id = props.id,
    onChange = props.onChange,
    onTabClick = props.onTabClick,
    renderTabBar = props.renderTabBar,
    scrollable = props.scrollable,
    bottomBar = props.bottomBar,
    destroyInactiveTabPane = props.destroyInactiveTabPane;
  var tabbarRef = (0, _react.useRef)();
  var tabs = (0, _utils.parseTabList)(children);
  var tabKeys = tabs.map(function (tab) {
    return tab.key;
  }).join("_");
  var _useMergedState = (0, _useMergedState3.default)(function () {
      var _tabs$;
      return (_tabs$ = tabs[0]) == null ? void 0 : _tabs$.key;
    }, {
      value: activeKey,
      defaultValue: defaultActiveKey
    }),
    mergedActiveKey = _useMergedState[0],
    setMergedActiveKey = _useMergedState[1];
  var _useMergedState2 = (0, _useMergedState3.default)(null, {
      value: id
    }),
    mergedId = _useMergedState2[0];
  var _useState = (0, _react.useState)(function () {
      return tabs.findIndex(function (tab) {
        return tab.key === mergedActiveKey;
      });
    }),
    activeIndex = _useState[0],
    setActiveIndex = _useState[1];
  (0, _react.useEffect)(function () {
    var newActiveIndex = tabs.findIndex(function (tab) {
      return tab.key === mergedActiveKey;
    });
    if (newActiveIndex === -1) {
      var _tabs$newActiveIndex;
      newActiveIndex = Math.max(0, Math.min(activeIndex, tabs.length - 1));
      setMergedActiveKey((_tabs$newActiveIndex = tabs[newActiveIndex]) == null ? void 0 : _tabs$newActiveIndex.key);
    }
    setActiveIndex(newActiveIndex);
  }, [mergedActiveKey, activeIndex, tabs, tabKeys, setMergedActiveKey]);
  var onInternalTabClick = function onInternalTabClick(key, e) {
    onTabClick == null || onTabClick(key, e);
    var isActiveChanged = key !== mergedActiveKey;
    setMergedActiveKey(key);
    if (isActiveChanged) {
      onChange == null || onChange(key);
    }
  };
  var sharedProps = {
    id: mergedId || undefined,
    activeKey: mergedActiveKey
  };
  var prefixCls = (0, _class.getPrefixCls)("tabs");
  var cls = (0, _clsx.default)(prefixCls, (_classNames = {}, _classNames[prefixCls + "-bottom"] = bottomBar, _classNames), className);
  var tabbarProps = _objectSpread(_objectSpread({}, sharedProps), {}, {
    onTabClick: onInternalTabClick,
    panes: children,
    scrollable: scrollable
  });
  var tabBar = renderTabBar ? renderTabBar(tabbarProps) : /*#__PURE__*/_react.default.createElement(_TabBar.default, (0, _extends2.default)({
    ref: tabbarRef
  }, tabbarProps, {
    id: tabbarProps.id || ""
  }));
  var tabContext = (0, _react.useMemo)(function () {
    return {
      tabs: tabs
    };
  }, [tabs]);
  return /*#__PURE__*/_react.default.createElement(_TabContext.default.Provider, {
    value: tabContext
  }, /*#__PURE__*/_react.default.createElement("div", {
    ref: ref,
    className: cls
  }, !bottomBar && tabBar, /*#__PURE__*/_react.default.createElement(_TabList.default, (0, _extends2.default)({
    destroyInactiveTabPane: destroyInactiveTabPane
  }, sharedProps)), bottomBar && tabBar));
});
var _default = exports.default = Tabs;