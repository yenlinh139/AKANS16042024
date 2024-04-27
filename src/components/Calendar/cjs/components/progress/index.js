"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireDefault(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _class = require("../../utils/class");
var _utils = require("./utils");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2.default)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * Progress component: Component giúp hiển thị giao diện cho biết một tiến trình đang thực hiện
 *
 * @category Data Display
 * @subCategory Progress
 * @component
 *
 * @example
import React from 'react';
import { Progress } from 'zmp-ui';

const TestPage = () => {
    return (
        <Progress showLabel completed={25} maxCompleted={100} />
    )
}
export default TestPage;
 */
var Progress = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var _classNames;
  var className = props.className,
    _props$maxCompleted = props.maxCompleted,
    maxCompleted = _props$maxCompleted === void 0 ? 100 : _props$maxCompleted,
    _props$completed = props.completed,
    completed = _props$completed === void 0 ? 0 : _props$completed,
    strokeWidth = props.strokeWidth,
    strokeColor = props.strokeColor,
    _props$trailColor = props.trailColor,
    trailColor = _props$trailColor === void 0 ? null : _props$trailColor,
    formatLabel = props.formatLabel,
    showLabel = props.showLabel;
  var prefixCls = (0, _class.getPrefixCls)("progress");
  var strokeStyle = {};
  var trailStyle = {};
  if (typeof strokeColor === "string") {
    strokeStyle = {
      background: strokeColor
    };
  }
  if (typeof trailColor === "string") {
    trailStyle = {
      background: trailColor
    };
  }
  var percent = (0, _utils.getPercent)(completed, maxCompleted);
  var progressStyle = _objectSpread({
    width: percent + "%"
  }, strokeStyle);
  if (strokeWidth) {
    trailStyle.height = strokeWidth + "px";
  }
  var label = null;
  if (showLabel) {
    label = formatLabel ? formatLabel(completed, maxCompleted) : percent + "%";
  }
  var cls = (0, _clsx.default)(prefixCls, (_classNames = {}, _classNames[prefixCls + "-show-label"] = showLabel, _classNames), className);
  return /*#__PURE__*/_react.default.createElement("div", {
    ref: ref,
    className: cls
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: prefixCls + "-outer"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: prefixCls + "-inner",
    style: trailStyle
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: prefixCls + "-completed",
    style: progressStyle
  }))), /*#__PURE__*/_react.default.createElement("span", {
    className: prefixCls + "-label"
  }, label));
});
Progress.displayName = "zaui-progress";
var _default = exports.default = Progress;