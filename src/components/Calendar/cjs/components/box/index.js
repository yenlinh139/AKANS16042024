"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _react = _interopRequireDefault(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _utils = require("./utils");
var _constants = require("./utils/constants");
var _class = require("../../utils/class");
var _excluded = ["id", "children", "className", "style", "m", "p", "mt", "ml", "mb", "mr", "mx", "my", "pt", "pl", "pb", "pr", "px", "py", "noSpace", "inline", "width", "height", "verticalAlign", "textAlign", "flex", "flexDirection", "flexWrap", "justifyContent", "alignItems", "alignContent"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2.default)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * Box là component giúp bao bọc các element giúp thêm khoảng cách giữa các element một cách dễ dàng theo spacing system của Zalo Mini App. 
 * Ngoài ra box còn hỗ trợ tạo nhanh Flex Layout.
 * @category Layout
 * @subcategory Box
 * @component
 *
 * @example
import React from "react";
import { Page, Box } from "zmp-ui";

function HomePage(props){
    return (
        <Page>
            <Box m={1}>
                <Button size="large">Button</Button>
            </Box>
        </Page>
    );
}
 */
var Box = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var _classNames;
  var id = props.id,
    children = props.children,
    className = props.className,
    style = props.style,
    _props$m = props.m,
    m = _props$m === void 0 ? -1 : _props$m,
    _props$p = props.p,
    p = _props$p === void 0 ? -1 : _props$p,
    _props$mt = props.mt,
    mt = _props$mt === void 0 ? -1 : _props$mt,
    _props$ml = props.ml,
    ml = _props$ml === void 0 ? -1 : _props$ml,
    _props$mb = props.mb,
    mb = _props$mb === void 0 ? -1 : _props$mb,
    _props$mr = props.mr,
    mr = _props$mr === void 0 ? -1 : _props$mr,
    _props$mx = props.mx,
    mx = _props$mx === void 0 ? -1 : _props$mx,
    _props$my = props.my,
    my = _props$my === void 0 ? -1 : _props$my,
    _props$pt = props.pt,
    pt = _props$pt === void 0 ? -1 : _props$pt,
    _props$pl = props.pl,
    pl = _props$pl === void 0 ? -1 : _props$pl,
    _props$pb = props.pb,
    pb = _props$pb === void 0 ? -1 : _props$pb,
    _props$pr = props.pr,
    pr = _props$pr === void 0 ? -1 : _props$pr,
    _props$px = props.px,
    px = _props$px === void 0 ? -1 : _props$px,
    _props$py = props.py,
    py = _props$py === void 0 ? -1 : _props$py,
    noSpace = props.noSpace,
    inline = props.inline,
    width = props.width,
    height = props.height,
    _props$verticalAlign = props.verticalAlign,
    verticalAlign = _props$verticalAlign === void 0 ? "" : _props$verticalAlign,
    _props$textAlign = props.textAlign,
    textAlign = _props$textAlign === void 0 ? "" : _props$textAlign,
    flex = props.flex,
    _props$flexDirection = props.flexDirection,
    flexDirection = _props$flexDirection === void 0 ? "" : _props$flexDirection,
    flexWrap = props.flexWrap,
    _props$justifyContent = props.justifyContent,
    justifyContent = _props$justifyContent === void 0 ? "" : _props$justifyContent,
    _props$alignItems = props.alignItems,
    alignItems = _props$alignItems === void 0 ? "" : _props$alignItems,
    _props$alignContent = props.alignContent,
    alignContent = _props$alignContent === void 0 ? "" : _props$alignContent,
    rest = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  var prefixCls = (0, _class.getPrefixCls)("box");
  var classes = (0, _clsx.default)(prefixCls, (_classNames = {}, _classNames[prefixCls + "-no-space"] = noSpace, _classNames[prefixCls + "-inline"] = inline, _classNames[prefixCls + "-m-" + m] = (0, _utils.validateSpacingNumber)(m), _classNames[prefixCls + "-mt-" + mt] = (0, _utils.validateSpacingNumber)(mt), _classNames[prefixCls + "-ml-" + ml] = (0, _utils.validateSpacingNumber)(ml), _classNames[prefixCls + "-mb-" + mb] = (0, _utils.validateSpacingNumber)(mb), _classNames[prefixCls + "-mr-" + mr] = (0, _utils.validateSpacingNumber)(mr), _classNames[prefixCls + "-mx-" + mx] = (0, _utils.validateSpacingNumber)(mx), _classNames[prefixCls + "-my-" + my] = (0, _utils.validateSpacingNumber)(my), _classNames[prefixCls + "-p-" + p] = (0, _utils.validateSpacingNumber)(p), _classNames[prefixCls + "-pt-" + pt] = (0, _utils.validateSpacingNumber)(pt), _classNames[prefixCls + "-pl-" + pl] = (0, _utils.validateSpacingNumber)(pl), _classNames[prefixCls + "-pb-" + pb] = (0, _utils.validateSpacingNumber)(pb), _classNames[prefixCls + "-pr-" + pr] = (0, _utils.validateSpacingNumber)(pr), _classNames[prefixCls + "-px-" + px] = (0, _utils.validateSpacingNumber)(px), _classNames[prefixCls + "-py-" + py] = (0, _utils.validateSpacingNumber)(py), _classNames[prefixCls + "-flex"] = flex, _classNames[prefixCls + "-flex-" + flexDirection] = (0, _utils.isValidBoxProps)(flexDirection, _constants.BoxPropsKeys.flexDirection), _classNames[prefixCls + "-vertical-align-" + verticalAlign] = (0, _utils.isValidBoxProps)(verticalAlign, _constants.BoxPropsKeys.verticalAlign), _classNames[prefixCls + "-text-align-" + textAlign] = (0, _utils.isValidBoxProps)(textAlign, _constants.BoxPropsKeys.textAlign), _classNames[prefixCls + "-flex-wrap"] = flexWrap === true, _classNames[prefixCls + "-flex-nowrap"] = flexWrap === false, _classNames[prefixCls + "-justify-" + justifyContent] = (0, _utils.isValidBoxProps)(justifyContent, _constants.BoxPropsKeys.justifyContent), _classNames[prefixCls + "-align-items-" + alignItems] = (0, _utils.isValidBoxProps)(alignItems, _constants.BoxPropsKeys.alignItems), _classNames[prefixCls + "-align-content-" + alignContent] = (0, _utils.isValidBoxProps)(alignContent, _constants.BoxPropsKeys.alignContent), _classNames), className);
  var boxStyle = _objectSpread({}, style || {});
  if (width) {
    boxStyle.width = width;
  }
  if (height) {
    boxStyle.height = height;
  }
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, rest, {
    ref: ref,
    id: id,
    style: boxStyle,
    className: classes
  }), children);
});
var _default = exports.default = Box;