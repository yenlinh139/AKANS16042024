"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _trigger = _interopRequireDefault(require("../trigger"));
var PickerTrigger = function PickerTrigger(props) {
  var children = props.children,
    popupElement = props.popupElement,
    _props$defaultOpen = props.defaultOpen,
    defaultOpen = _props$defaultOpen === void 0 ? false : _props$defaultOpen,
    visible = props.visible,
    onVisibilityChange = props.onVisibilityChange,
    mask = props.mask,
    maskCloseable = props.maskCloseable;
  return /*#__PURE__*/_react.default.createElement(_trigger.default, {
    action: "click",
    defaultPopupVisible: defaultOpen,
    popupVisible: visible,
    onPopupVisibleChange: onVisibilityChange,
    popup: popupElement,
    mask: mask,
    maskClosable: maskCloseable
  }, children);
};
var _default = exports.default = PickerTrigger;