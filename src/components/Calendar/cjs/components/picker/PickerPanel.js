"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _PickerColumn = _interopRequireDefault(require("./PickerColumn"));
var _button = _interopRequireDefault(require("../button"));
var _icon = _interopRequireDefault(require("../icon"));
/* eslint-disable security/detect-object-injection */

var PickerPanel = function PickerPanel(props) {
  var className = props.className,
    prefixCls = props.prefixCls,
    data = props.data,
    value = props.value,
    defaultValue = props.defaultValue,
    onChange = props.onChange,
    action = props.action,
    datePicker = props.datePicker,
    closePanel = props.closePanel,
    title = props.title,
    initData = props.initData;

  // Merge classes
  var panelPrefixCls = prefixCls + "-panel";
  var cls = (0, _clsx.default)(panelPrefixCls, {}, className);
  var closeModal = function closeModal(event) {
    closePanel == null || closePanel(event);
  };
  var handleClickAction = function handleClickAction(event) {
    if (action && action.close) {
      closeModal(event);
    }
    action == null || action.onClick == null || action.onClick(event);
  };

  // Render the picker content
  var renderInner = function renderInner() {
    var innerPrefixCls = prefixCls + "-inner";

    // Map the data array to the picker columns
    var columnNodes = data.map(function (column, index) {
      var otpVal = value ? value[column.name] : undefined;
      var otpDefaultValue = defaultValue ? defaultValue[column.name] : undefined;
      if (initData && initData[column.name] && !otpVal && !otpDefaultValue) {
        otpDefaultValue = column.options.find(function (opt) {
          return opt.value === initData[column.name];
        });
      }
      return /*#__PURE__*/_react.default.createElement(_PickerColumn.default, {
        key: "zaui-picker-column-" + (column.name || index),
        name: column.name,
        prefixCls: prefixCls,
        datePickerColumn: datePicker,
        options: column.options,
        value: otpVal,
        defaultValue: otpDefaultValue,
        onChange: onChange
      });
    });
    return /*#__PURE__*/_react.default.createElement("div", {
      className: innerPrefixCls
    }, columnNodes);
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: cls
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: prefixCls + "-header"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: prefixCls + "-title"
  }, title), /*#__PURE__*/_react.default.createElement(_button.default, {
    type: "neutral",
    variant: "tertiary",
    className: prefixCls + "-close-icon",
    icon: /*#__PURE__*/_react.default.createElement(_icon.default, {
      icon: "zi-close"
    }),
    onClick: closeModal
  })), renderInner(), action && /*#__PURE__*/_react.default.createElement("div", {
    className: prefixCls + "-action"
  }, /*#__PURE__*/_react.default.createElement(_button.default, {
    fullWidth: true,
    onClick: handleClickAction
  }, action.text)));
};
PickerPanel.defaultProps = {
  initData: undefined,
  datePicker: false
};
var _default = exports.default = /*#__PURE__*/_react.default.memo(PickerPanel);