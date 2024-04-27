"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireWildcard(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _reactTransitionGroup = require("react-transition-group");
var _class = require("../../utils/class");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
var Mask = function Mask(props) {
  var _useState = (0, _react.useState)(false),
    animationVisible = _useState[0],
    setAnimationVisible = _useState[1];
  var nodeRef = (0, _react.useRef)(null);
  var _props$visible = props.visible,
    visible = _props$visible === void 0 ? false : _props$visible,
    style = props.style,
    maskProps = props.maskProps,
    children = props.children,
    className = props.className;
  var prefixCls = (0, _class.getPrefixCls)("mask");
  var cls = (0, _clsx.default)(prefixCls, className);
  (0, _react.useEffect)(function () {
    setAnimationVisible(visible);
  }, [visible]);
  return /*#__PURE__*/_react.default.createElement(_reactTransitionGroup.CSSTransition, {
    key: "modal-mask",
    in: animationVisible,
    nodeRef: nodeRef,
    timeout: {
      exit: 300,
      enter: 300
    },
    classNames: prefixCls
  }, /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    ref: nodeRef,
    style: style,
    className: cls
  }, maskProps), children));
};
Mask.displayName = "zaui-mask";
var _default = exports.default = Mask;