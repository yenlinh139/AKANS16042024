"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _clsx = _interopRequireDefault(require("clsx"));
var _react = _interopRequireWildcard(require("react"));
var _class = require("../../utils/class");
var _excluded = ["visible", "afterClose", "maskClosable", "onClose", "children", "style", "className"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2.default)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var ModalWrapper = function ModalWrapper(props) {
  var _props$visible = props.visible,
    visible = _props$visible === void 0 ? false : _props$visible,
    afterClose = props.afterClose,
    _props$maskClosable = props.maskClosable,
    maskClosable = _props$maskClosable === void 0 ? true : _props$maskClosable,
    onClose = props.onClose,
    children = props.children,
    style = props.style,
    className = props.className,
    rest = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  var _useState = (0, _react.useState)(visible),
    animatedVisible = _useState[0],
    setAnimatedVisible = _useState[1];
  var wrapperRef = (0, _react.useRef)();
  var contentClickRef = (0, _react.useRef)(false);
  var contentTimeoutRef = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    var pageElement = document.querySelector(".zaui-page");
    if (visible) {
      if (pageElement) {
        pageElement.classList.add("disable-scrolling");
      }
      setAnimatedVisible(true);
    } else if (pageElement) {
      pageElement.classList.remove("disable-scrolling");
    }
  }, [visible]);
  var onVisibleChange = function onVisibleChange(newVisible) {
    if (!newVisible) {
      setAnimatedVisible(false);
      afterClose == null || afterClose();
    }
  };
  var onContentMouseDown = function onContentMouseDown() {
    clearTimeout(contentTimeoutRef.current);
    contentClickRef.current = true;
  };
  var onContentMouseUp = function onContentMouseUp() {
    contentTimeoutRef.current = setTimeout(function () {
      contentClickRef.current = false;
    });
  };
  var onWrapperClick = function onWrapperClick(e) {
    if (!maskClosable) {
      return;
    }
    if (contentClickRef.current) {
      contentClickRef.current = false;
    } else if (wrapperRef.current === e.target) {
      onClose == null || onClose(e);
    }
  };
  var prefixCls = (0, _class.getPrefixCls)("modal-wrapper");
  var cls = (0, _clsx.default)(prefixCls, className);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, rest, {
    ref: wrapperRef,
    onClick: onWrapperClick,
    style: _objectSpread({
      display: !animatedVisible ? "none" : undefined
    }, style || {}),
    className: cls,
    role: "presentation"
  }), /*#__PURE__*/_react.default.cloneElement(children, {
    onMouseDown: onContentMouseDown,
    onMouseUp: onContentMouseUp,
    onVisibleChanged: onVisibleChange
  }));
};
var _default = exports.default = ModalWrapper;