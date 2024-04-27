"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _react = require("react");
var _resizeObserverPolyfill = _interopRequireDefault(require("resize-observer-polyfill"));
var useElementSize = function useElementSize(_ref) {
  var ref = _ref.ref;
  var _useState = (0, _react.useState)(0),
    size = _useState[0],
    setSize = _useState[1];
  var handleResize = function handleResize(entries) {
    var _entries$0$borderBoxS;
    if (((_entries$0$borderBoxS = entries[0].borderBoxSize) == null ? void 0 : _entries$0$borderBoxS.length) > 0) {
      var _entries$0$borderBoxS2;
      setSize((_entries$0$borderBoxS2 = entries[0].borderBoxSize[0]) == null ? void 0 : _entries$0$borderBoxS2.blockSize);
    } else {
      setSize(entries[0].contentRect.height);
    }
  };
  (0, _react.useLayoutEffect)(function () {
    if (!ref || !ref.current) {
      return;
    }
    var resizeObserver = new _resizeObserverPolyfill.default(handleResize);
    resizeObserver.observe(ref.current);

    // eslint-disable-next-line consistent-return
    return function () {
      resizeObserver.disconnect();
    };
  }, [ref]);
  return size || 0;
};
var _default = exports.default = useElementSize;