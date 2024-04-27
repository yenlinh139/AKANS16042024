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
var _excluded = ["id", "children", "className", "style", "justify", "align", "space"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2.default)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * A custom element for grouping items, with control over the margin between them
 * @category Layout
 * @subcategory Cluster
 * @component
 *
 * @example
import React from "react";
import { Page, Cluster, Text } from "zmp-ui";

function HomePage(props){
    return (
        <Page>
            <Cluster>
                <Text>Items 1</Text>
                <Text>Items 2</Text>
                <Text>Items 3</Text>
                <Text>Items 4</Text>
            </Cluster>
        </Page>
    );
}
 */
var Cluster = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var id = props.id,
    children = props.children,
    className = props.className,
    style = props.style,
    _props$justify = props.justify,
    justify = _props$justify === void 0 ? "flex-start" : _props$justify,
    _props$align = props.align,
    align = _props$align === void 0 ? "flex-start" : _props$align,
    _props$space = props.space,
    space = _props$space === void 0 ? "var(--s1)" : _props$space,
    rest = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  var prefixCls = (0, _class.getPrefixCls)("cluster");
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
        var i = "Cluster-" + [justify, align, space].join("");
        elementRef.current.dataset.i = i;
        if (!document.getElementById(i)) {
          var styleEl = document.createElement("style");
          styleEl.id = i;
          styleEl.innerHTML = ("\n                    [data-i=\"" + i + "\"] {\n                        justify-content: " + justify + ";\n                        align-items: " + align + ";\n                        gap: " + space + ";\n                      }").replace(/\s\s+/g, " ").trim();
          document.head.appendChild(styleEl);
        }
      }
    };
    render();
  }, [justify, align, space]);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, rest, {
    ref: elementRef,
    id: id,
    style: centerStyle,
    className: classes
  }), children);
});
var _default = exports.default = Cluster;