"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _class = require("../../utils/class");
/**
 * Spinner component: Component hiển thị loading cho phần nội dung khi cần thiết
 *
 * @category Data Display
 * @subCategory Spinner
 * @component
 *
 * @example
import React from 'react';
import { Spinner } from 'zmp-ui';

const TestPage = () => {
    return (
        <Spinner logo="logo-url-here" />
    )
}
export default TestPage;
 * @example 
import React from 'react';
import { Spinner } from 'zmp-ui';

const TestPage = () => {
    return (
        <Spinner />
    )
}
 *  @example 
import React from 'react';
import { Spinner } from 'zmp-ui';

const TestPage = () => {
    return (
        <Spinner
            logo={
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: "red",
                    }}
                />
            }
        />
    )
}
 */
var Spinner = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var prefixCls = (0, _class.getPrefixCls)("spinner");
  var _props$visible = props.visible,
    visible = _props$visible === void 0 ? true : _props$visible,
    _props$logo = props.logo,
    logo = _props$logo === void 0 ? null : _props$logo;
  var cls = (0, _clsx.default)(prefixCls);
  if (!visible) {
    return null;
  }
  var logoEl = typeof logo === "string" ? /*#__PURE__*/_react.default.createElement("img", {
    src: logo,
    alt: "spinner"
  }) : logo;
  return /*#__PURE__*/_react.default.createElement("div", {
    ref: ref,
    className: cls
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: prefixCls + "-ring"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: prefixCls + "-dot"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: prefixCls + "-logo"
  }, logoEl));
});
Spinner.displayName = "zaui-spinner";
var _default = exports.default = Spinner;