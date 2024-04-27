"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _react = _interopRequireDefault(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _class = require("../../utils/class");
var _item = _interopRequireDefault(require("./item"));
var _excluded = ["className", "dataSource", "renderItem", "children", "divider", "loading", "noSpacing"];
function List(props, ref) {
  var _classNames;
  var className = props.className,
    dataSource = props.dataSource,
    renderItem = props.renderItem,
    children = props.children,
    _props$divider = props.divider,
    divider = _props$divider === void 0 ? true : _props$divider,
    loading = props.loading,
    noSpacing = props.noSpacing,
    rest = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  var prefixCls = (0, _class.getPrefixCls)("list");
  var classes = (0, _clsx.default)(prefixCls, (_classNames = {}, _classNames[prefixCls + "-loading"] = loading, _classNames[prefixCls + "-no-divider"] = !divider, _classNames[prefixCls + "-no-spacing"] = !!noSpacing, _classNames["" + className] = className, _classNames));
  return /*#__PURE__*/_react.default.createElement("ul", (0, _extends2.default)({
    ref: ref,
    className: classes
  }, rest), dataSource ? dataSource.map(function (item, index) {
    if (renderItem) {
      return renderItem(item, index, loading);
    }
    return /*#__PURE__*/_react.default.createElement(_item.default, {
      title: item.title,
      prefix: item.prefix,
      suffix: item.suffix,
      subTitle: item.subTitle,
      brackets: item.brackets,
      style: item.style,
      className: item.className,
      id: item.id
    });
  }) : children);
}
var LinkWithRef = /*#__PURE__*/_react.default.forwardRef(List);
LinkWithRef.displayName = "zaui-list";
var _default = exports.default = LinkWithRef;