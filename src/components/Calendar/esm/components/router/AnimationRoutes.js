import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["element"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import React, { useMemo, useRef, useEffect, cloneElement, Children, createRef, useContext, useCallback } from "react";
import classNames from "clsx";
import { NavigationType, useNavigationType, useLocation, Routes } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { getPrefixCls } from "../../utils/class";
import { iOS } from "../../utils/device";
import { AnimationRouterContext } from "./ZMPRouter";
import { NO_ANIMATION_DURATION, ANIMATION_DURATION, PAGE_TRANSITION_DIRECTION } from "./common/constant";
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
  var navigationType = useNavigationType();
  var direction = useRef(PAGE_TRANSITION_DIRECTION.FORWARD);
  var children = props.children;
  var context = useContext(AnimationRouterContext);
  var _ref = context || {},
    animate = _ref.animate,
    setAnimate = _ref.setAnimate,
    directionSetting = _ref.direction;
  var location = useLocation();
  var pathname = location.pathname;
  var initialX = useRef(null);
  var initialY = useRef(null);
  var nodeRefs = useRef({});
  var prefixCls = getPrefixCls("routes");
  var getKey = function getKey(path) {
    if (!path) return "";
    var pathToCompare = path.charAt(0) !== "/" ? "/" + path : path;
    if (pathToCompare.lastIndexOf("/") > 0) {
      pathToCompare = pathToCompare.substring(0, pathToCompare.length - 1);
    }
    return pathToCompare;
  };
  var getNodeRef = useCallback(function (path) {
    var key = getKey(path);
    if (!key) return null;
    if (!nodeRefs.current[String(key)]) {
      nodeRefs.current[String(key)] = /*#__PURE__*/createRef();
    }
    return nodeRefs.current[String(key)];
  }, []);
  var routList = useMemo(function () {
    return Children.map(children, function (child) {
      if ( /*#__PURE__*/React.isValidElement(child)) {
        var _child$props = child.props,
          element = _child$props.element,
          restProps = _objectWithoutPropertiesLoose(_child$props, _excluded);
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
  useEffect(function () {
    var isIOS = iOS();
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
    direction.current = navigationType === NavigationType.Pop ? PAGE_TRANSITION_DIRECTION.BACKWARD : directionSetting || PAGE_TRANSITION_DIRECTION.FORWARD;
  }
  var animationCls = classNames((_classNames = {}, _classNames[prefixCls + "-" + direction.current] = animate, _classNames[prefixCls + "-no-animation"] = !animate, _classNames));
  var wrapperCls = classNames(prefixCls, {});
  var nodeRef = useMemo(function () {
    return getNodeRef(pathname);
  }, [pathname, getNodeRef]);
  return /*#__PURE__*/React.createElement(TransitionGroup, {
    className: wrapperCls,
    childFactory: function childFactory(child) {
      return /*#__PURE__*/cloneElement(child, {
        classNames: animationCls,
        timeout: animate ? ANIMATION_DURATION : NO_ANIMATION_DURATION
      });
    }
  }, /*#__PURE__*/React.createElement(CSSTransition, {
    key: pathname,
    timeout: animate ? ANIMATION_DURATION : NO_ANIMATION_DURATION,
    onExited: function onExited() {
      setAnimate == null || setAnimate({
        animate: true,
        direction: PAGE_TRANSITION_DIRECTION.FORWARD
      });
    },
    nodeRef: nodeRef,
    unmountOnExit: true
  }, /*#__PURE__*/React.createElement("div", {
    ref: nodeRef,
    className: prefixCls + "-item"
  }, /*#__PURE__*/React.createElement(Routes, {
    location: location
  }, routList))));
};
AnimationRoutes.displayName = "zaui-animation-router";
export default AnimationRoutes;