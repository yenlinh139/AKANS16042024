"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _react = _interopRequireDefault(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _class = require("../../utils/class");
var _excluded = ["title", "children", "subTitle", "prefix", "suffix", "brackets", "className", "onClick"];
var ListItem = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var _classNames;
  var title = props.title,
    children = props.children,
    subTitle = props.subTitle,
    prefix = props.prefix,
    suffix = props.suffix,
    brackets = props.brackets,
    className = props.className,
    onClick = props.onClick,
    rest = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  var prefixCls = (0, _class.getPrefixCls)("list-item");
  var classes = (0, _clsx.default)(prefixCls, (_classNames = {}, _classNames["" + className] = className, _classNames));
  var handleClick = function handleClick(event) {
    if (onClick) {
      onClick(event);
    }
  };
  return /*#__PURE__*/_react.default.createElement("li", (0, _extends2.default)({}, rest, {
    role: "presentation",
    onClick: handleClick,
    ref: ref,
    className: classes
  }), prefix && /*#__PURE__*/_react.default.createElement("div", {
    className: prefixCls + "-prefix"
  }, prefix), /*#__PURE__*/_react.default.createElement("div", {
    className: prefixCls + "-right"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: prefixCls + "-content"
  }, title && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: prefixCls + "-title-container"
  }, title && /*#__PURE__*/_react.default.createElement("span", {
    className: prefixCls + "-title"
  }, title), brackets && /*#__PURE__*/_react.default.createElement("span", {
    className: prefixCls + "-brackets"
  }, "(", brackets, ")")), subTitle && /*#__PURE__*/_react.default.createElement("div", {
    className: prefixCls + "-subtitle"
  }, subTitle)), children), suffix && /*#__PURE__*/_react.default.createElement("div", {
    className: prefixCls + "-suffix"
  }, " ", suffix)));
});
ListItem.displayName = "zaui-list-item";
var _default = exports.default = ListItem;