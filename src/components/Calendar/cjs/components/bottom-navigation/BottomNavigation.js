"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireWildcard(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _useMergedState2 = _interopRequireDefault(require("../../hooks/useMergedState"));
var _class = require("../../utils/class");
var _context = require("./context");
var _utils = require("./utils");
var _BottomNavigationItem = _interopRequireDefault(require("./BottomNavigationItem"));
var _AnimatedBottomNavigationItem = _interopRequireDefault(require("./AnimatedBottomNavigationItem"));
var _excluded = ["key", "style", "className", "itemKey", "linkTo"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2.default)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var BottomNavigation = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var _classNames;
  var className = props.className,
    style = props.style,
    children = props.children,
    fixed = props.fixed,
    id = props.id,
    onChange = props.onChange,
    activeKey = props.activeKey,
    defaultActiveKey = props.defaultActiveKey,
    zIndex = props.zIndex;
  var prefixCls = (0, _class.getPrefixCls)("bottom-navigation");
  var cls = (0, _clsx.default)(prefixCls, className, (_classNames = {}, _classNames[prefixCls + "-fixed"] = fixed, _classNames));
  var items = (0, _utils.parseItemList)(children);
  if (!items || items.length < 2) {
    // This is neccessary to tell the developers to either add in more items or not to use Bottom Navigation at all
    // eslint-disable-next-line no-console
    console.warn("Bottom Navigation must to have at least 2 items");
  }
  var itemKeys = items.map(function (item) {
    return item.key;
  }).join("_");
  var _useMergedState = (0, _useMergedState2.default)(function () {
      var _items$;
      return (_items$ = items[0]) == null ? void 0 : _items$.key;
    }, {
      value: activeKey,
      defaultValue: defaultActiveKey
    }),
    mergedActiveKey = _useMergedState[0],
    setMergedActiveKey = _useMergedState[1];
  var _useState = (0, _react.useState)(function () {
      return items.findIndex(function (item) {
        return item.key === mergedActiveKey;
      });
    }),
    activeIndex = _useState[0],
    setActiveIndex = _useState[1];
  (0, _react.useEffect)(function () {
    var newActiveIndex = items.findIndex(function (item) {
      return item.key === mergedActiveKey;
    });
    if (newActiveIndex === -1) {
      var _items$newActiveIndex;
      newActiveIndex = Math.max(0, Math.min(activeIndex, items.length - 1));
      // not passing user input here
      // eslint-disable-next-line security/detect-object-injection
      setMergedActiveKey((_items$newActiveIndex = items[newActiveIndex]) == null ? void 0 : _items$newActiveIndex.key);
    }
    setActiveIndex(newActiveIndex);
  }, [mergedActiveKey, activeIndex, items, itemKeys, setMergedActiveKey]);
  var handleonChange = function handleonChange(key) {
    var isActiveChanged = key !== mergedActiveKey;
    setMergedActiveKey(key);
    if (isActiveChanged) {
      onChange == null || onChange(key);
    }
  };
  var contextValue = (0, _react.useMemo)(function () {
    return {
      activeKey: mergedActiveKey,
      items: items
    };
  }, [items, mergedActiveKey]);
  var elStyle = _objectSpread(_objectSpread({}, style || {}), zIndex !== undefined ? {
    zIndex: zIndex
  } : {});
  return /*#__PURE__*/_react.default.createElement("div", {
    ref: ref,
    id: id,
    style: elStyle,
    className: cls
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: prefixCls + "-content"
  }, /*#__PURE__*/_react.default.createElement(_context.BottomNavigationContext.Provider, {
    value: contextValue
  }, items.map(function (item) {
    var key = item.key,
      tabStyle = item.style,
      tabClassName = item.className,
      itemKey = item.itemKey,
      linkTo = item.linkTo,
      restTabProps = (0, _objectWithoutPropertiesLoose2.default)(item, _excluded);
    var activeItem = key === mergedActiveKey;
    if (linkTo) {
      return /*#__PURE__*/_react.default.createElement(_AnimatedBottomNavigationItem.default, (0, _extends2.default)({
        key: key
      }, restTabProps, {
        linkTo: linkTo,
        style: tabStyle,
        active: activeItem,
        itemKey: itemKey || key,
        className: tabClassName,
        onChange: handleonChange
      }));
    }
    return /*#__PURE__*/_react.default.createElement(_BottomNavigationItem.default, (0, _extends2.default)({
      key: key
    }, restTabProps, {
      style: tabStyle,
      active: activeItem,
      itemKey: itemKey || key,
      className: tabClassName,
      onChange: handleonChange
    }));
  }))));
});
var _default = exports.default = BottomNavigation;