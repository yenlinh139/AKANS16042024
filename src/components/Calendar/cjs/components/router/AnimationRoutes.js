"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _react = _interopRequireWildcard(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _reactRouterDom = require("react-router-dom");
var _reactTransitionGroup = require("react-transition-group");
var _class = require("../../utils/class");
var _device = require("../../utils/device");
var _ZMPRouter = require("./ZMPRouter");
var _constant = require("./common/constant");
var _excluded = ["element"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2.default)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * AnimationRoutes component: Wrapper thay thế cho Routes của react-router, component này thêm hiệu ứng khi chuyển trang
 *
 * @category Router
 * @catPosition 2
 * @subcategory AnimationRoutes
 * @component
 * @typedef {object} AnimationRoutes
 * @prop {ReactNode} children Các Route page
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

var AnimationRoutes = function AnimationRoutes(props) {
  var _classNames;
  var navigationType = (0, _reactRouterDom.useNavigationType)();
  var direction = (0, _react.useRef)(_constant.PAGE_TRANSITION_DIRECTION.FORWARD);
  var children = props.children;
  var context = (0, _react.useContext)(_ZMPRouter.AnimationRouterContext);
  var _ref = context || {},
    animate = _ref.animate,
    setAnimate = _ref.setAnimate,
    directionSetting = _ref.direction;
  var location = (0, _reactRouterDom.useLocation)();
  var pathname = location.pathname;
  var initialX = (0, _react.useRef)(null);
  var initialY = (0, _react.useRef)(null);
  var nodeRefs = (0, _react.useRef)({});
  var prefixCls = (0, _class.getPrefixCls)("routes");
  var getKey = function getKey(path) {
    if (!path) return "";
    var pathToCompare = path.charAt(0) !== "/" ? "/" + path : path;
    if (pathToCompare.lastIndexOf("/") > 0) {
      pathToCompare = pathToCompare.substring(0, pathToCompare.length - 1);
    }
    return pathToCompare;
  };
  var getNodeRef = (0, _react.useCallback)(function (path) {
    var key = getKey(path);
    if (!key) return null;
    if (!nodeRefs.current[String(key)]) {
      nodeRefs.current[String(key)] = /*#__PURE__*/(0, _react.createRef)();
    }
    return nodeRefs.current[String(key)];
  }, []);
  var routList = (0, _react.useMemo)(function () {
    return _react.Children.map(children, function (child) {
      if ( /*#__PURE__*/_react.default.isValidElement(child)) {
        var _child$props = child.props,
          element = _child$props.element,
          restProps = (0, _objectWithoutPropertiesLoose2.default)(_child$props, _excluded);
        if (!element || element.props.replace === true) return child;
        return _objectSpread(_objectSpread({}, child), {}, {
          props: _objectSpread(_objectSpread({}, restProps), {}, {
            element: element
          })
        });
      }
      return child;
    });
  }, [children]);
  var startTouch = function startTouch(e) {
    initialX.current = e.touches[0].clientX;
    initialY.current = e.touches[0].clientY;
  };
  var moveTouch = function moveTouch(e) {
    if (initialX.current === null) {
      return;
    }
    if (initialY.current === null) {
      return;
    }
    var currentX = e.touches[0].clientX;
    var currentY = e.touches[0].clientY;
    var diffX = initialX.current - currentX;
    var diffY = initialY.current - currentY;
    if (initialX.current <= 24 && Math.abs(diffX) > Math.abs(diffY) && diffX <= 0 && animate) {
      e.preventDefault();
      setAnimate == null || setAnimate({
        animate: false
      });
      e.preventDefault();
    }
    initialX.current = null;
    initialY.current = null;
  };
  (0, _react.useEffect)(function () {
    var isIOS = (0, _device.iOS)();
    if (isIOS) {
      document.addEventListener("touchstart", startTouch, {
        passive: false
      });
      document.addEventListener("touchmove", moveTouch, {
        passive: false
      });
    }
    return function () {
      if (isIOS) {
        document.removeEventListener("touchstart", startTouch);
        document.removeEventListener("touchmove", moveTouch);
      }
    };
  }, []);
  if (animate) {
    direction.current = navigationType === _reactRouterDom.NavigationType.Pop ? _constant.PAGE_TRANSITION_DIRECTION.BACKWARD : directionSetting || _constant.PAGE_TRANSITION_DIRECTION.FORWARD;
  }
  var animationCls = (0, _clsx.default)((_classNames = {}, _classNames[prefixCls + "-" + direction.current] = animate, _classNames[prefixCls + "-no-animation"] = !animate, _classNames));
  var wrapperCls = (0, _clsx.default)(prefixCls, {});
  var nodeRef = (0, _react.useMemo)(function () {
    return getNodeRef(pathname);
  }, [pathname, getNodeRef]);
  return /*#__PURE__*/_react.default.createElement(_reactTransitionGroup.TransitionGroup, {
    className: wrapperCls,
    childFactory: function childFactory(child) {
      return /*#__PURE__*/(0, _react.cloneElement)(child, {
        classNames: animationCls,
        timeout: animate ? _constant.ANIMATION_DURATION : _constant.NO_ANIMATION_DURATION
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_reactTransitionGroup.CSSTransition, {
    key: pathname,
    timeout: animate ? _constant.ANIMATION_DURATION : _constant.NO_ANIMATION_DURATION,
    onExited: function onExited() {
      setAnimate == null || setAnimate({
        animate: true,
        direction: _constant.PAGE_TRANSITION_DIRECTION.FORWARD
      });
    },
    nodeRef: nodeRef,
    unmountOnExit: true
  }, /*#__PURE__*/_react.default.createElement("div", {
    ref: nodeRef,
    className: prefixCls + "-item"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Routes, {
    location: location
  }, routList))));
};
AnimationRoutes.displayName = "zaui-animation-router";
var _default = exports.default = AnimationRoutes;