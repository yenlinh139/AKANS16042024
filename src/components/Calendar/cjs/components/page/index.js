"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _react = _interopRequireWildcard(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _reactRouterDom = require("react-router-dom");
var _class = require("../../utils/class");
var _ZMPRouter = require("../router/ZMPRouter");
var _excluded = ["className", "id", "style", "children", "resetScroll", "hideScrollbar", "restoreScroll", "restoreScrollOnBack", "name"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/**
 * Page component: Component wrapper nội dung trang
 *
 * @category Container
 * @subCategory Page
 * @component
 *
 * @example
function HomePage(props){
    return (
        <Page>
            <Input label="Label" helperText="Helper text" />
        </Page>
    );
}
 */
var Page = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var _classNames;
  var routerContext = (0, _react.useContext)(_ZMPRouter.AnimationRouterContext);
  var className = props.className,
    id = props.id,
    style = props.style,
    children = props.children,
    _props$resetScroll = props.resetScroll,
    resetScroll = _props$resetScroll === void 0 ? true : _props$resetScroll,
    _props$hideScrollbar = props.hideScrollbar,
    hideScrollbar = _props$hideScrollbar === void 0 ? false : _props$hideScrollbar,
    restoreScroll = props.restoreScroll,
    restoreScrollOnBack = props.restoreScrollOnBack,
    name = props.name,
    rest = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  var isScrolling = (0, _react.useRef)();
  if (!routerContext && (restoreScroll || restoreScrollOnBack)) {
    throw new Error("To use Scroll Restoration feature, Page must be contained with ZMPRouter.");
  }
  var location = (0, _reactRouterDom.useLocation)();
  var getPageKey = function getPageKey() {
    if (restoreScrollOnBack) {
      return location.key;
    }
    return name || location.pathname;
  };
  var prefixCls = (0, _class.getPrefixCls)("page");
  var pageRef = (0, _react.useRef)();
  (0, _react.useImperativeHandle)(ref, function () {
    return pageRef.current;
  });
  var cls = (0, _clsx.default)(prefixCls, (_classNames = {}, _classNames[prefixCls + "-hide-scrollbar"] = hideScrollbar, _classNames), className);
  var positionKey = getPageKey();
  var onPageScroll = function onPageScroll() {
    if (!routerContext) {
      return;
    }
    clearTimeout(isScrolling.current);
    isScrolling.current = setTimeout(function () {
      var _pageRef$current;
      var updatePosition = routerContext.updatePosition;
      updatePosition(positionKey, ((_pageRef$current = pageRef.current) == null ? void 0 : _pageRef$current.scrollTop) || 0);
    }, 150);
  };
  var restoreScrollPosition = (0, _react.useCallback)(function () {
    if (!routerContext) {
      return;
    }
    var pageScrollPosition = routerContext.pageScrollPosition;
    if (pageScrollPosition[positionKey] !== undefined && restoreScrollOnBack || restoreScroll) {
      var _pageScrollPosition$p;
      // eslint-disable-next-line security/detect-object-injection
      pageRef.current.scrollTo(0, (_pageScrollPosition$p = pageScrollPosition == null ? void 0 : pageScrollPosition[positionKey]) != null ? _pageScrollPosition$p : 0);
    }
  }, [restoreScroll, restoreScrollOnBack, routerContext, positionKey]);
  (0, _react.useLayoutEffect)(function () {
    var page = pageRef.current;
    if (page && routerContext && (restoreScroll || restoreScrollOnBack)) {
      restoreScrollPosition();
      page == null || page.addEventListener("scroll", onPageScroll);
    }
    if (resetScroll && !restoreScroll && !restoreScrollOnBack) {
      page.scrollTo(0, 0);
    }
    return function () {
      if (page && routerContext && (restoreScroll || restoreScrollOnBack)) {
        page == null || page.removeEventListener("scroll", onPageScroll);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageRef, resetScroll, restoreScroll, restoreScrollOnBack]);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, rest, {
    className: cls,
    id: id,
    style: style,
    ref: pageRef
  }), children);
});
var _default = exports.default = Page;