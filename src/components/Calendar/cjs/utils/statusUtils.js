"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.getMergedStatus = void 0;
exports.getStatusClassNames = getStatusClassNames;
var _clsx = _interopRequireDefault(require("clsx"));
var _type = require("./type");
var ValidateStatuses = (0, _type.tuple)("success", "warning", "error", "validating", "");
var InputStatuses = (0, _type.tuple)("success", "error", "");
function getStatusClassNames(prefixCls, status, hasFeedback) {
  var _classNames;
  return (0, _clsx.default)((_classNames = {}, _classNames[prefixCls + "-status-success"] = status === "success", _classNames[prefixCls + "-status-warning"] = status === "warning", _classNames[prefixCls + "-status-error"] = status === "error", _classNames[prefixCls + "-status-validating"] = status === "validating", _classNames[prefixCls + "-has-feedback"] = hasFeedback, _classNames));
}
var getMergedStatus = exports.getMergedStatus = function getMergedStatus(contextStatus, customStatus) {
  return customStatus || contextStatus;
};