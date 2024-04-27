"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _react = _interopRequireWildcard(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _class = require("../../utils/class");
var _excluded = ["id", "children", "className", "style", "max", "andText", "gutters", "intrinsic"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2.default)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * A custom element for centering a block-level element horizontally,
 * with a max-width value representing the typographic measure
 * @category Layout
 * @subcategory Center
 * @component
 *
 * @example
import React from "react";
import { Page, Center, Text } from "zmp-ui";

function HomePage(props){
    return (
        <Page>
            <Center>
                <Text>Header</Text>
            </Center>
        </Page>
    );
}
 */
var Center = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var id = props.id,
    children = props.children,
    className = props.className,
    style = props.style,
    _props$max = props.max,
    max = _props$max === void 0 ? "var(--measure)" : _props$max,
    _props$andText = props.andText,
    andText = _props$andText === void 0 ? false : _props$andText,
    gutters = props.gutters,
    _props$intrinsic = props.intrinsic,
    intrinsic = _props$intrinsic === void 0 ? false : _props$intrinsic,
    rest = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  var prefixCls = (0, _class.getPrefixCls)("center");
  var classes = (0, _clsx.default)(prefixCls, className);
  var centerStyle = _objectSpread({}, style || {});
  var elementRef = (0, _react.useRef)(null);
  (0, _react.useImperativeHandle)(ref, function () {
    return {
      layout: elementRef.current
    };
  });
  (0, _react.useEffect)(function () {
    var render = function render() {
      if (elementRef.current) {
        var i = "Center-" + [max, andText, gutters, intrinsic].join("");
        elementRef.current.dataset.i = i;
        if (!document.getElementById(i)) {
          var styleEl = document.createElement("style");
          styleEl.id = i;
          styleEl.innerHTML = ("\n                    [data-i=\"" + i + "\"] {\n                        max-width: " + max + ";\n                        " + (gutters ? "\n                        padding-inline-start: " + gutters + ";\n                        padding-inline-end: " + gutters + ";" : "") + "\n                        " + (andText ? "text-align: center;" : "") + "\n                        " + (intrinsic ? "\n                        display: flex;\n                        flex-direction: column;\n                        align-items: center;" : "") + "\n                      }").replace(/\s\s+/g, " ").trim();
          document.head.appendChild(styleEl);
        }
      }
    };
    render();
  }, [max, andText, gutters, intrinsic]);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, rest, {
    ref: elementRef,
    id: id,
    style: centerStyle,
    className: classes
  }), children);
});
var _default = exports.default = Center;