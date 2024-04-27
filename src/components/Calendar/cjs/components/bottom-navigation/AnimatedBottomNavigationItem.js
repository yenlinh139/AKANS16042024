"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _react = _interopRequireWildcard(require("react"));
var _BottomNavigationItem = _interopRequireDefault(require("./BottomNavigationItem"));
var _useNavigate = _interopRequireDefault(require("../../hooks/useNavigate"));
var _context = require("./context");
var _excluded = ["linkTo", "onClick"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
var AnimatedBottomNavigationItem = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var navigate = (0, _useNavigate.default)();
  var context = (0, _react.useContext)(_context.BottomNavigationContext);
  var linkTo = props.linkTo,
    onClick = props.onClick,
    rest = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  var itemRef = (0, _react.useRef)(null);
  var handleClick = function handleClick(e) {
    if (onClick) {
      onClick == null || onClick(e);
    } else if (linkTo) {
      var direction = "forward";
      if (context && context.items) {
        var itemKey = context.items.findIndex(function (item) {
          return item.key === rest.itemKey;
        });
        var activeItemkey = context.items.findIndex(function (item) {
          return item.key === context.activeKey;
        });
        direction = activeItemkey > itemKey ? "backward" : "forward";
        if (activeItemkey === itemKey) {
          return;
        }
      }
      navigate == null || navigate(linkTo, {
        animate: true,
        direction: direction
      });
    }
  };
  (0, _react.useImperativeHandle)(ref, function () {
    return itemRef.current;
  });
  return /*#__PURE__*/_react.default.createElement(_BottomNavigationItem.default, (0, _extends2.default)({
    ref: itemRef
  }, rest, {
    onClick: handleClick
  }));
});
var _default = exports.default = AnimatedBottomNavigationItem;