"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _clsx = _interopRequireDefault(require("clsx"));
var _react = _interopRequireDefault(require("react"));
var _statusUtils = require("../../utils/statusUtils");
var _class = require("../../utils/class");
var _BaseInput = _interopRequireDefault(require("./BaseInput"));
var _closeCircle = _interopRequireDefault(require("./icons/close-circle"));
var _infoCircle = _interopRequireDefault(require("./icons/info-circle"));
var _successCircle = _interopRequireDefault(require("./icons/success-circle"));
var _warning = _interopRequireDefault(require("./icons/warning"));
var _commonUtils = require("./utils/commonUtils");
var _excluded = ["label", "helperText", "errorText", "status", "clearable", "addonBefore", "addonAfter", "suffix", "disabled", "value", "affixWrapperClassName", "groupClassName", "maxLength", "showCount"];
var ClearableLabeledBaseInput = function ClearableLabeledBaseInput(props) {
  var label = props.label,
    helperText = props.helperText,
    errorText = props.errorText,
    status = props.status,
    clearable = props.clearable,
    addonBefore = props.addonBefore,
    addonAfter = props.addonAfter,
    suffix = props.suffix,
    disabled = props.disabled,
    value = props.value,
    affixWrapperClassName = props.affixWrapperClassName,
    groupClassName = props.groupClassName,
    maxLength = props.maxLength,
    showCount = props.showCount,
    rest = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  var prefixCls = (0, _class.getPrefixCls)("input");
  var getSuffix = function getSuffix() {
    var hasMaxLength = Number(maxLength) > 0;
    if (suffix || showCount || status === "success") {
      var _classNames, _classNames2;
      var val = (0, _commonUtils.fixControlledValue)(value);
      var valueLength = val.length;
      var maxLengthStr = hasMaxLength ? "/ " + maxLength : "";
      var dataCount = typeof showCount === "object" ? showCount.formatter({
        value: val,
        count: valueLength,
        maxLength: maxLength
      }) : "" + valueLength + maxLengthStr;
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, status === "success" && value && !disabled && /*#__PURE__*/_react.default.createElement("span", {
        className: (0, _clsx.default)(prefixCls + "-status-success", (_classNames = {}, _classNames[prefixCls + "-status-success-has-suffix"] = !!suffix, _classNames))
      }, /*#__PURE__*/_react.default.createElement(_successCircle.default, {
        className: prefixCls + "-status-success-icon"
      })), !!showCount && /*#__PURE__*/_react.default.createElement("span", {
        className: (0, _clsx.default)(prefixCls + "-show-count-suffix", (_classNames2 = {}, _classNames2[prefixCls + "-show-count-has-suffix"] = !!suffix, _classNames2))
      }, dataCount), suffix);
    }
    return null;
  };
  var getAddonBefore = function getAddonBefore() {
    if (label) {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", {
        className: prefixCls + "-label"
      }, label), addonBefore);
    }
    return null;
  };
  var getAddonAfter = function getAddonAfter() {
    if (addonAfter || helperText || errorText) {
      var _classNames3;
      var hasError = status === "error";
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (helperText || errorText) && /*#__PURE__*/_react.default.createElement("span", {
        className: (0, _clsx.default)(prefixCls + "-helper-text", (_classNames3 = {}, _classNames3[prefixCls + "-helper-text-has-error"] = hasError && !disabled, _classNames3))
      }, hasError && !disabled ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_warning.default, {
        className: prefixCls + "-helper-text-icon"
      }), /*#__PURE__*/_react.default.createElement("span", {
        className: prefixCls + "-helper-text-content"
      }, errorText)) : helperText ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_infoCircle.default, {
        className: prefixCls + "-helper-text-icon"
      }), /*#__PURE__*/_react.default.createElement("span", {
        className: prefixCls + "-helper-text-content"
      }, helperText)) : null), addonAfter);
    }
    return null;
  };
  var getAllowClear = function getAllowClear() {
    if (!disabled && clearable) {
      var _classNames4;
      var displayMode = typeof clearable === "object" && clearable != null && clearable.mode ? clearable.mode : "always";
      return {
        clearIcon: /*#__PURE__*/_react.default.createElement(_closeCircle.default, {
          className: (0, _clsx.default)(prefixCls + "-clear-icon", (_classNames4 = {}, _classNames4[prefixCls + "-clear-icon-display-mode-focus"] = displayMode === "focus", _classNames4))
        })
      };
    }
    return false;
  };
  return /*#__PURE__*/_react.default.createElement(_BaseInput.default, (0, _extends2.default)({}, rest, {
    disabled: disabled,
    value: (0, _commonUtils.fixControlledValue)(value),
    addonBefore: getAddonBefore(),
    addonAfter: getAddonAfter(),
    allowClear: getAllowClear(),
    suffix: getSuffix(),
    affixWrapperClassName: (0, _clsx.default)((0, _statusUtils.getStatusClassNames)(prefixCls + "-affix-wrapper", status), affixWrapperClassName),
    groupClassName: (0, _clsx.default)((0, _statusUtils.getStatusClassNames)(prefixCls + "-group-wrapper", status), groupClassName)
  }));
};
var _default = exports.default = ClearableLabeledBaseInput;