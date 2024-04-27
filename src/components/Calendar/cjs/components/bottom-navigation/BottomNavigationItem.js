"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _class = require("../../utils/class");
var BottomNavigationItem = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var _classNames;
  var icon = props.icon,
    activeIcon = props.activeIcon,
    label = props.label,
    onClick = props.onClick,
    active = props.active,
    onChange = props.onChange,
    itemKey = props.itemKey,
    id = props.id,
    className = props.className,
    style = props.style;
  var prefixCls = (0, _class.getPrefixCls)("bottom-navigation-item");
  var cls = (0, _clsx.default)(prefixCls, className, (_classNames = {}, _classNames[prefixCls + "-active"] = !!active, _classNames));
  var handleClickItem = function handleClickItem(e) {
    if (itemKey) {
      onChange(itemKey);
    }
    onClick == null || onClick(e);
  };
  var iconEl = active && activeIcon ? activeIcon : icon;
  return /*#__PURE__*/_react.default.createElement("button", {
    id: id,
    style: style,
    ref: ref,
    onClick: handleClickItem,
    className: cls
  }, iconEl && /*#__PURE__*/_react.default.createElement("span", {
    className: prefixCls + "-icon"
  }, " ", iconEl), /*#__PURE__*/_react.default.createElement("span", {
    className: prefixCls + "-label"
  }, label));
});
var _default = exports.default = BottomNavigationItem;