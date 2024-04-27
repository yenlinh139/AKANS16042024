"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _react = require("react");
var _reactDom = _interopRequireDefault(require("react-dom"));
function canUseDom() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}
var Portal = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  var didUpdate = props.didUpdate,
    getContainer = props.getContainer,
    children = props.children;
  var parentRef = (0, _react.useRef)();
  var containerRef = (0, _react.useRef)();

  // Ref return nothing, only for wrapper check exist
  (0, _react.useImperativeHandle)(ref, function () {
    return {};
  });

  // Create container in client side with sync to avoid useEffect not get ref
  var initRef = (0, _react.useRef)(false);
  if (!initRef.current && canUseDom()) {
    containerRef.current = getContainer();
    parentRef.current = containerRef.current.parentNode;
    initRef.current = true;
  }
  (0, _react.useEffect)(function () {
    didUpdate == null || didUpdate(props);
  });
  (0, _react.useEffect)(function () {
    var _containerRef$current;
    if ((containerRef == null || (_containerRef$current = containerRef.current) == null ? void 0 : _containerRef$current.parentNode) === null && parentRef.current !== null) {
      var _parentRef$current;
      parentRef == null || (_parentRef$current = parentRef.current) == null || _parentRef$current.appendChild(containerRef.current);
    }
    return function () {
      var _containerRef$current2;
      (_containerRef$current2 = containerRef.current) == null || (_containerRef$current2 = _containerRef$current2.parentNode) == null || _containerRef$current2.removeChild(containerRef.current);
    };
  }, []);
  return containerRef.current ? /*#__PURE__*/_reactDom.default.createPortal(children, containerRef.current) : null;
});
var _default = exports.default = Portal;