"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _ZMPRouter = require("../../components/router/ZMPRouter");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
var useNavigate = function useNavigate() {
  var navigate = (0, _reactRouterDom.useNavigate)();
  var context = _react.default.useContext(_ZMPRouter.AnimationRouterContext);
  if (!context) {
    throw new Error("To use `useNavigate`, component must be contained with ZMPRouter component");
  }
  return (0, _react.useCallback)(function (to, options) {
    var _ref = options || {},
      animate = _ref.animate,
      direction = _ref.direction;
    context.setAnimate({
      animate: animate != null ? animate : true,
      direction: direction || "forward"
    });
    if (typeof to === "number") {
      navigate(to);
    } else {
      navigate(to, options);
    }
  }, [context, navigate]);
};
var _default = exports.default = useNavigate;