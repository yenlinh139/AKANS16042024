"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _default = exports.default = function _default(callback, buffer) {
  var calledRef = _react.default.useRef(false);
  var timeoutRef = _react.default.useRef(null);
  function cancelTrigger() {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
  }
  function trigger(force) {
    cancelTrigger();
    if (!calledRef.current || force === true) {
      if (callback() === false) {
        // Not delay since callback cancelled self
        return;
      }
      calledRef.current = true;
      timeoutRef.current = window.setTimeout(function () {
        calledRef.current = false;
      }, buffer);
    } else {
      timeoutRef.current = window.setTimeout(function () {
        calledRef.current = false;
        trigger();
      }, buffer);
    }
  }
  return [trigger, function () {
    calledRef.current = false;
    cancelTrigger();
  }];
};