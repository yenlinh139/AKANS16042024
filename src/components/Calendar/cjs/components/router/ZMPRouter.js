"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = exports.AnimationRouterContext = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _constant = require("./common/constant");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/**
 * ZMPRouter component: Wrapper thay thể cho BrowserRouter của react-router, component này config sẵn basename để có thể định tuyến trên mini app
 *
 * @category Router
 * @catPosition 2
 * @subcategory ZMPRouter
 * @component
 * @typedef {object} ZMPRouter
 * @prop {ReactNode} children là routes wrapper có thể là AnimationRoutes của zmp-ui hoặc Routes của react-router-dom
 *
 *
 * @example <data>{"live": false}</data>
 function MyApp(props){
    return (
        <App>
            <ZMProuter>
                 <AnimationRoutes>
                     <Route path="/" element={<HomePage />} />
                     <Route path="/page1" element={<Page1 />} />
                </AnimationRoutes>
            </ZMPRouter>
        </App>
    );
}
 */

var AnimationRouterContext = exports.AnimationRouterContext = /*#__PURE__*/_react.default.createContext(undefined);
var ZMPRouter = function ZMPRouter(props) {
  var _useState = (0, _react.useState)(true),
    animate = _useState[0],
    setAnimate = _useState[1];
  var _useState2 = (0, _react.useState)(_constant.PAGE_TRANSITION_DIRECTION.FORWARD),
    direction = _useState2[0],
    setDirection = _useState2[1];
  var pageScrollPosition = (0, _react.useRef)({});
  var children = props.children,
    memoryRouter = props.memoryRouter;
  var basepath = window.BASE_PATH || "";
  var urlParams = new URLSearchParams(window.location.search);
  var appEnv = urlParams.get("env");
  if (process.env.NODE_ENV === "production" || appEnv === "TESTING_LOCAL" || appEnv === "TESTING" || appEnv === "DEVELOPMENT") {
    basepath = "/zapps/" + window.APP_ID;
  }
  var handleSetAnimate = (0, _react.useCallback)(function (_ref) {
    var _ref$animate = _ref.animate,
      ani = _ref$animate === void 0 ? true : _ref$animate,
      _ref$direction = _ref.direction,
      dir = _ref$direction === void 0 ? _constant.PAGE_TRANSITION_DIRECTION.FORWARD : _ref$direction;
    setAnimate(!!ani);
    var correctDirection = [_constant.PAGE_TRANSITION_DIRECTION.FORWARD, _constant.PAGE_TRANSITION_DIRECTION.BACKWARD].some(function (item) {
      return item === dir;
    }) ? dir : _constant.PAGE_TRANSITION_DIRECTION.FORWARD;
    setDirection(correctDirection);
  }, [setAnimate, setDirection]);
  var updateScrollPosition = function updateScrollPosition(key, position) {
    // eslint-disable-next-line security/detect-object-injection
    pageScrollPosition.current[key] = position;
  };
  var contextValue = (0, _react.useMemo)(function () {
    return {
      setAnimate: handleSetAnimate,
      animate: animate,
      direction: direction,
      pageScrollPosition: pageScrollPosition.current,
      updatePosition: updateScrollPosition
    };
  }, [animate, direction, handleSetAnimate]);
  var RouterComponent = memoryRouter ? _reactRouterDom.MemoryRouter : _reactRouterDom.BrowserRouter;
  var routerProps = memoryRouter ? {
    initialEntries: [basepath]
  } : {};
  return /*#__PURE__*/_react.default.createElement(AnimationRouterContext.Provider, {
    value: contextValue
  }, /*#__PURE__*/_react.default.createElement(RouterComponent, (0, _extends2.default)({
    basename: basepath
  }, routerProps), children));
};
ZMPRouter.displayName = "zaui-router";
var _default = exports.default = ZMPRouter;