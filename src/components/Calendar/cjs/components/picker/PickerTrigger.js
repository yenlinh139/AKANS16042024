"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _trigger = _interopRequireDefault(require("../trigger"));
var PickerTrigger = function PickerTrigger(props) {
  var children = props.children,
    popupElement = props.popupElement,
    onVisibilityChange = props.onVisibilityChange,
    defaultOpen = props.defaultOpen,
    visible = props.visible,
    mask = props.mask,
    maskClosable = props.maskClosable;
  return /*#__PURE__*/_react.default.createElement(_trigger.default, {
    action: "click",
    popup: popupElement,
    defaultPopupVisible: defaultOpen,
    popupVisible: visible,
    mask: mask,
    maskClosable: maskClosable,
    onPopupVisibleChange: onVisibilityChange
  }, children);
};
var _default = exports.default = PickerTrigger;