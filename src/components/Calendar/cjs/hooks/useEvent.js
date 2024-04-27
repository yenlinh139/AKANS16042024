"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = useEvent;
var _react = _interopRequireDefault(require("react"));
// eslint-disable-next-line @typescript-eslint/ban-types
function useEvent(callback) {
  var fnRef = _react.default.useRef();
  fnRef.current = callback;
  return _react.default.useCallback(function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return fnRef.current == null ? void 0 : fnRef.current.apply(fnRef, args);
  }, []);
}