import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["id", "children", "className", "style", "min", "columnCount", "rowSpace", "columnSpace"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import React, { useEffect, useImperativeHandle, useRef } from "react";
import classNames from "clsx";
import { getPrefixCls } from "../../utils/class";

/**
 * A custom element for grouping items, with control over the margin between them
 * @category Layout
 * @subcategory Grid
 * @component
 *
 * @example
import React from "react";
import { Page, Grid, Text } from "zmp-ui";

function HomePage(props){
    return (
        <Page>
            <Grid>
                <Text>Items 1</Text>
                <Text>Items 2</Text>
                <Text>Items 3</Text>
                <Text>Items 4</Text>
            </Grid>
        </Page>
    );
}
 */
var Grid = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var id = props.id,
    children = props.children,
    className = props.className,
    style = props.style,
    _props$min = props.min,
    min = _props$min === void 0 ? "100%" : _props$min,
    columnCount = props.columnCount,
    _props$rowSpace = props.rowSpace,
    rowSpace = _props$rowSpace === void 0 ? "var(--s1)" : _props$rowSpace,
    _props$columnSpace = props.columnSpace,
    columnSpace = _props$columnSpace === void 0 ? "var(--s1)" : _props$columnSpace,
    rest = _objectWithoutPropertiesLoose(props, _excluded);
  var prefixCls = getPrefixCls("grid");
  var classes = classNames(prefixCls, className);
  var centerStyle = _objectSpread({}, style || {});
  var elementRef = useRef(null);
  useImperativeHandle(ref, function () {
    return {
      layout: elementRef.current
    };
  });
  useEffect(function () {
    var render = function render() {
      if (elementRef.current) {
        var i = "Grid-" + [columnCount, min, rowSpace, columnSpace].join("");
        elementRef.current.dataset.i = i;
        if (!document.getElementById(i)) {
          var styleEl = document.createElement("style");
          styleEl.id = i;
          styleEl.innerHTML = ("\n                    [data-i=\"" + i + "\"] {\n                        " + (rowSpace && "row-gap: " + rowSpace + ";") + "\n                        " + (columnSpace && "column-gap: " + columnSpace + ";") + "\n                        " + (columnCount && columnCount > 0 && "grid-template-columns: repeat(" + columnCount + ", 1fr)") + "\n                      }\n\n                      " + (typeof columnCount === "undefined" && "@supports (width: min(" + min + ", 100%)) {\n                            [data-i=\"" + i + "\"] {\n                              grid-template-columns: repeat(auto-fill, minmax(min(" + min + ", 100%), 1fr));\n                            }\n                          }") + "\n            \n                      ").replace(/\s\s+/g, " ").trim();
          document.head.appendChild(styleEl);
        }
      }
    };
    render();
  }, [columnCount, min, rowSpace, columnSpace]);
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    ref: elementRef,
    id: id,
    style: centerStyle,
    className: classes
  }), children);
});
export default Grid;