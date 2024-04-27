"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _resizeObserverPolyfill = _interopRequireDefault(require("resize-observer-polyfill"));
var _class = require("../../utils/class");
var _TabContext = _interopRequireDefault(require("./TabContext"));
var _TabBarItem = _interopRequireDefault(require("./TabBarItem"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
var TabBar = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var _classNames;
  var className = props.className,
    id = props.id,
    style = props.style,
    onTabClick = props.onTabClick,
    scrollable = props.scrollable,
    activeKey = props.activeKey;
  var _useContext = (0, _react.useContext)(_TabContext.default),
    tabs = _useContext.tabs;
  var _useState = (0, _react.useState)({
      width: 0,
      left: 0
    }),
    activeLineStyles = _useState[0],
    setActiveLineStyles = _useState[1];
  var tabsWrapperRef = (0, _react.useRef)();
  var tabItemRefs = (0, _react.useRef)(new Map());
  var getRef = function getRef(key) {
    if (!tabItemRefs.current.has(key)) {
      tabItemRefs.current.set(key, /*#__PURE__*/_react.default.createRef());
    }
    return tabItemRefs.current.get(key);
  };
  var scrollToTab = (0, _react.useCallback)(function (key) {
    if (key === void 0) {
      key = activeKey;
    }
    var activeTab = getRef(key);
    if (activeTab && activeTab.current) {
      var _activeTab$current;
      var tabOffset = ((_activeTab$current = activeTab.current) == null ? void 0 : _activeTab$current.getBoundingClientRect()) || {};
      var left = tabOffset.left,
        right = tabOffset.right,
        width = tabOffset.width;
      var tabbar = ref;
      var scrollLeft = tabbar.current.scrollLeft;
      var tabbarWidth = tabbar == null ? void 0 : tabbar.current.clientWidth;
      if (!tabbarWidth) {
        return;
      }
      if (right >= tabbarWidth - 40) {
        tabbar.current.scrollTo({
          left: scrollLeft + (right - tabbarWidth) + 40,
          behavior: "smooth"
        });
        return;
      }
      if (left <= 40 && scrollLeft > 0) {
        tabbar.current.scrollTo({
          left: scrollLeft - (width - right + 40),
          behavior: "smooth"
        });
      }
    }
  }, [activeKey, ref]);
  var setLineStyles = (0, _react.useCallback)(function (key) {
    if (key === void 0) {
      key = activeKey;
    }
    var activeTab = getRef(key);
    if (activeTab && activeTab.current) {
      if (!activeTab.current.clientWidth) {
        return;
      }
      setActiveLineStyles({
        width: activeTab.current.clientWidth - 24,
        left: activeTab.current.offsetLeft + 12
      });
    }
  }, [activeKey]);
  (0, _react.useLayoutEffect)(function () {
    var refEl = ref;
    if (!refEl || !refEl.current) {
      return undefined;
    }
    var resizeObserver = new _resizeObserverPolyfill.default(function () {
      if (refEl.current.clientWidth) {
        if (refEl.current.scrollWidth > refEl.current.clientWidth) {
          refEl.current.style.setProperty("--zaui-tabbar-width", refEl.current.scrollWidth + "px");
        }
        scrollToTab(activeKey);
        setLineStyles();
      }
    });
    resizeObserver.observe(refEl.current);
    return function () {
      resizeObserver.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeKey]);
  var prefixCls = (0, _class.getPrefixCls)("tabs-tabbar");
  var cls = (0, _clsx.default)(prefixCls, (_classNames = {}, _classNames[prefixCls + "-scrollable"] = scrollable, _classNames), className);
  (0, _react.useLayoutEffect)(function () {
    scrollToTab(activeKey);
    setLineStyles();
  }, [activeKey, scrollToTab, setLineStyles]);
  var tabNodes = tabs.map(function (tab) {
    var key = tab.key;
    return /*#__PURE__*/_react.default.createElement(_TabBarItem.default, {
      key: key,
      ref: getRef(key),
      onClick: function onClick(e) {
        onTabClick == null || onTabClick(key, e);
      },
      active: key === activeKey,
      tab: tab,
      id: id,
      onFocus: function onFocus() {
        if (!tabsWrapperRef.current) {
          return;
        }
        tabsWrapperRef.current.scrollTop = 0;
      }
    });
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    ref: ref,
    className: cls,
    style: style
  }, tabNodes, /*#__PURE__*/_react.default.createElement("span", {
    className: prefixCls + "-active-line",
    style: {
      width: activeLineStyles.width + "px",
      left: activeLineStyles.left + "px"
    }
  }));
});
var _default = exports.default = TabBar;