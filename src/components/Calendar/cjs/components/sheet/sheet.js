"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireWildcard(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _modalWrapper = _interopRequireDefault(require("../../common/modal-wrapper"));
var _class = require("../../utils/class");
var _content = _interopRequireDefault(require("./content"));
var _modalMask = _interopRequireDefault(require("../../common/modal-mask"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
var Sheet = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var className = props.className,
    maskClosable = props.maskClosable,
    _props$visible = props.visible,
    visible = _props$visible === void 0 ? false : _props$visible,
    maskStyle = props.maskStyle,
    _props$mask = props.mask,
    mask = _props$mask === void 0 ? true : _props$mask,
    maskClassName = props.maskClassName,
    onClose = props.onClose,
    afterClose = props.afterClose,
    zIndex = props.zIndex,
    contentRef = props.contentRef,
    unmountOnClose = props.unmountOnClose;
  var _useState = (0, _react.useState)(false),
    animatedVisible = _useState[0],
    setAnimatedVisible = _useState[1];
  var _useState2 = (0, _react.useState)(!unmountOnClose),
    contentVisible = _useState2[0],
    setContentVisible = _useState2[1];
  var sheetRef = (0, _react.useRef)(null);
  (0, _react.useImperativeHandle)(contentRef, function () {
    var _sheetRef$current;
    return (_sheetRef$current = sheetRef.current) == null ? void 0 : _sheetRef$current.sheet;
  });
  (0, _react.useImperativeHandle)(ref, function () {
    var _sheetRef$current2, _sheetRef$current3;
    return {
      sheet: (_sheetRef$current2 = sheetRef.current) == null ? void 0 : _sheetRef$current2.sheet,
      snapTo: (_sheetRef$current3 = sheetRef.current) == null ? void 0 : _sheetRef$current3.snapTo
    };
  });
  (0, _react.useEffect)(function () {
    if (visible && unmountOnClose) {
      setContentVisible(true);
    }
    setAnimatedVisible(visible);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);
  var prefixCls = (0, _class.getPrefixCls)("sheet");
  var cls = (0, _clsx.default)(prefixCls, {}, className);
  var handleAfterClose = function handleAfterClose() {
    if (unmountOnClose) {
      setContentVisible(false);
    }
    afterClose == null || afterClose();
  };
  if (!contentVisible && unmountOnClose) {
    return null;
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: cls
  }, mask && /*#__PURE__*/_react.default.createElement(_modalMask.default, {
    visible: animatedVisible,
    style: maskStyle,
    className: maskClassName
  }), /*#__PURE__*/_react.default.createElement(_modalWrapper.default, {
    maskClosable: maskClosable,
    visible: animatedVisible,
    onClose: onClose,
    afterClose: handleAfterClose,
    className: prefixCls + "-wrapper",
    style: {
      zIndex: zIndex
    }
  }, /*#__PURE__*/_react.default.createElement(_content.default, (0, _extends2.default)({}, props, {
    visible: animatedVisible,
    ref: sheetRef
  }))));
});
var _default = exports.default = Sheet;