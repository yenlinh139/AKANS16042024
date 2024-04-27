"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.useSnackbar = void 0;
var _react = require("react");
var _context = _interopRequireDefault(require("../context"));
var useSnackbar = exports.useSnackbar = function useSnackbar() {
  var snackbarContext = (0, _react.useContext)(_context.default);
  var _ref = snackbarContext || {},
    openSnackbar = _ref.openSnackbar,
    closeSnackbar = _ref.closeSnackbar,
    setDownloadProgress = _ref.setDownloadProgress;
  var open = function open(option) {
    openSnackbar == null || openSnackbar(option);
  };
  var close = function close() {
    closeSnackbar == null || closeSnackbar();
  };
  var setDownload = function setDownload(completed) {
    setDownloadProgress == null || setDownloadProgress(completed);
  };
  return {
    openSnackbar: open,
    closeSnackbar: close,
    setDownloadProgress: setDownload
  };
};