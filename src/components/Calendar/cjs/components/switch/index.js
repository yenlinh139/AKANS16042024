"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _clsx3 = _interopRequireDefault(require("clsx"));
var _react = _interopRequireDefault(require("react"));
var _class = require("../../utils/class");
var _excluded = ["className", "wrapperClassName", "size", "label"];
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * @category Data Entry
 * @subcategory Switch
 * @component
 *
 * @example
import React from "react";
import { Page, Switch } from "zmp-ui";

function HomePage(props){
    return (
        <Page>
            <Switch label="Label" />
        </Page>
    );
}
 */
var Switch = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var _clsx, _clsx2;
  var className = props.className,
    wrapperClassName = props.wrapperClassName,
    size = props.size,
    label = props.label,
    rest = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  var prefixCls = (0, _class.getPrefixCls)("switch");
  var Wrapper = label ? "label" : "div";
  return /*#__PURE__*/_react.default.createElement(Wrapper, {
    className: (0, _clsx3.default)(prefixCls + "-wrapper")
  }, /*#__PURE__*/_react.default.createElement("input", (0, _extends2.default)({}, rest, {
    ref: ref,
    type: "checkbox",
    className: (0, _clsx3.default)(prefixCls, (_clsx = {}, _clsx[prefixCls + "-small"] = size === "small", _clsx), className)
  })), label && /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx3.default)(prefixCls + "-label", (_clsx2 = {}, _clsx2[prefixCls + "-label-small"] = size === "small", _clsx2))
  }, label));
});
var _default = exports.default = Switch;