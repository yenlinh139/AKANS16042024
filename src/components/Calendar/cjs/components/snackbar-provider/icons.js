"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = exports.WifiOff = exports.Wifi = exports.Warning = exports.Success = exports.Info = exports.Error = exports.Download = void 0;
var _react = _interopRequireDefault(require("react"));
var _icon = _interopRequireDefault(require("../icon"));
var _propsType = require("./props-type");
var _LoadingIcon = _interopRequireDefault(require("./LoadingIcon"));
var Wifi = exports.Wifi = function Wifi() {
  return /*#__PURE__*/_react.default.createElement(_icon.default, {
    icon: "zi-wifi"
  });
};
var WifiOff = exports.WifiOff = function WifiOff() {
  return /*#__PURE__*/_react.default.createElement(_icon.default, {
    icon: "zi-wifi-off"
  });
};
var Download = exports.Download = function Download() {
  return /*#__PURE__*/_react.default.createElement(_icon.default, {
    icon: "zi-download-solid"
  });
};
var Error = exports.Error = function Error() {
  return /*#__PURE__*/_react.default.createElement(_icon.default, {
    icon: "zi-close-circle-solid"
  });
};
var Warning = exports.Warning = function Warning() {
  return /*#__PURE__*/_react.default.createElement(_icon.default, {
    icon: "zi-warning-solid"
  });
};
var Info = exports.Info = function Info() {
  return /*#__PURE__*/_react.default.createElement(_icon.default, {
    icon: "zi-info-circle-solid"
  });
};
var Success = exports.Success = function Success() {
  return /*#__PURE__*/_react.default.createElement(_icon.default, {
    icon: "zi-check-circle-solid"
  });
};
var getIcon = function getIcon(type) {
  switch (type) {
    case _propsType.SnackbarType.download:
      return /*#__PURE__*/_react.default.createElement(Download, null);
    case _propsType.SnackbarType.error:
      return /*#__PURE__*/_react.default.createElement(Error, null);
    case _propsType.SnackbarType.warning:
      return /*#__PURE__*/_react.default.createElement(Warning, null);
    case _propsType.SnackbarType.success:
      return /*#__PURE__*/_react.default.createElement(Success, null);
    case _propsType.SnackbarType["wifi-connected"]:
      return /*#__PURE__*/_react.default.createElement(Wifi, null);
    case _propsType.SnackbarType["wifi-disconnected"]:
      return /*#__PURE__*/_react.default.createElement(WifiOff, null);
    case _propsType.SnackbarType.loading:
      return /*#__PURE__*/_react.default.createElement(_LoadingIcon.default, null);
    default:
      return /*#__PURE__*/_react.default.createElement(Info, null);
  }
};
var _default = exports.default = getIcon;