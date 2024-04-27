import _extends from "@babel/runtime/helpers/extends";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { PAGE_TRANSITION_DIRECTION } from "./common/constant";
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

export var AnimationRouterContext = /*#__PURE__*/React.createContext(undefined);
var ZMPRouter = function ZMPRouter(props) {
  var _useState = useState(true),
    animate = _useState[0],
    setAnimate = _useState[1];
  var _useState2 = useState(PAGE_TRANSITION_DIRECTION.FORWARD),
    direction = _useState2[0],
    setDirection = _useState2[1];
  var pageScrollPosition = useRef({});
  var children = props.children,
    memoryRouter = props.memoryRouter;
  var basepath = window.BASE_PATH || "";
  var urlParams = new URLSearchParams(window.location.search);
  var appEnv = urlParams.get("env");
  if (process.env.NODE_ENV === "production" || appEnv === "TESTING_LOCAL" || appEnv === "TESTING" || appEnv === "DEVELOPMENT") {
    basepath = "/zapps/" + window.APP_ID;
  }
  var handleSetAnimate = useCallback(function (_ref) {
    var _ref$animate = _ref.animate,
      ani = _ref$animate === void 0 ? true : _ref$animate,
      _ref$direction = _ref.direction,
      dir = _ref$direction === void 0 ? PAGE_TRANSITION_DIRECTION.FORWARD : _ref$direction;
    setAnimate(!!ani);
    var correctDirection = [PAGE_TRANSITION_DIRECTION.FORWARD, PAGE_TRANSITION_DIRECTION.BACKWARD].some(function (item) {
      return item === dir;
    }) ? dir : PAGE_TRANSITION_DIRECTION.FORWARD;
    setDirection(correctDirection);
  }, [setAnimate, setDirection]);
  var updateScrollPosition = function updateScrollPosition(key, position) {
    // eslint-disable-next-line security/detect-object-injection
    pageScrollPosition.current[key] = position;
  };
  var contextValue = useMemo(function () {
    return {
      setAnimate: handleSetAnimate,
      animate: animate,
      direction: direction,
      pageScrollPosition: pageScrollPosition.current,
      updatePosition: updateScrollPosition
    };
  }, [animate, direction, handleSetAnimate]);
  var RouterComponent = memoryRouter ? MemoryRouter : BrowserRouter;
  var routerProps = memoryRouter ? {
    initialEntries: [basepath]
  } : {};
  return /*#__PURE__*/React.createElement(AnimationRouterContext.Provider, {
    value: contextValue
  }, /*#__PURE__*/React.createElement(RouterComponent, _extends({
    basename: basepath
  }, routerProps), children));
};
ZMPRouter.displayName = "zaui-router";
export default ZMPRouter;