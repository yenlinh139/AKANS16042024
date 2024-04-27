"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireWildcard(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _class = require("../../utils/class");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2.default)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Tab = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var _classNames;
  var children = props.children,
    className = props.className,
    id = props.id,
    style = props.style,
    active = props.active,
    tabKey = props.tabKey,
    destroyInactiveTabPane = props.destroyInactiveTabPane;
  var _React$useState = _react.default.useState(active),
    visited = _React$useState[0],
    setVisited = _React$useState[1];
  (0, _react.useEffect)(function () {
    if (active) {
      setVisited(true);
    } else if (destroyInactiveTabPane) {
      setVisited(false);
    }
  }, [active, destroyInactiveTabPane]);
  var prefixCls = (0, _class.getPrefixCls)("tab");
  var cls = (0, _clsx.default)(prefixCls, (_classNames = {}, _classNames[prefixCls + "-active"] = active, _classNames), className);
  var mergedStyle = {};
  if (!active) {
    mergedStyle.display = "none";
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    id: id && id + "-tab-" + tabKey,
    role: "tabpanel",
    tabIndex: active ? 0 : -1,
    "aria-labelledby": id && id + "-tab-" + tabKey,
    "aria-hidden": !active,
    style: _objectSpread(_objectSpread({}, mergedStyle), style),
    ref: ref,
    className: cls
  }, (active || visited) && children);
});
var _default = exports.default = Tab;