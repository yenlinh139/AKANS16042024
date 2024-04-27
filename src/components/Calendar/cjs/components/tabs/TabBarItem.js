"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _class = require("../../utils/class");
var TabBarItem = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var _classNames;
  var id = props.id,
    style = props.style,
    _props$tab = props.tab,
    key = _props$tab.key,
    disabled = _props$tab.disabled,
    label = _props$tab.label,
    onClick = props.onClick,
    onFocus = props.onFocus,
    active = props.active;
  var prefixCls = (0, _class.getPrefixCls)("tabs-tabbar-item");
  var cls = (0, _clsx.default)(prefixCls, (_classNames = {}, _classNames[prefixCls + "-active"] = active, _classNames));
  var onInternalClick = function onInternalClick(e) {
    if (disabled) {
      return;
    }
    onClick == null || onClick(e);
  };
  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/interactive-supports-focus
    _react.default.createElement("div", {
      ref: ref,
      key: key,
      className: cls,
      style: style,
      "aria-controls": id && id + "-tab-" + key,
      tabIndex: disabled ? undefined : 0,
      "aria-disabled": disabled,
      onClick: function onClick(e) {
        e.stopPropagation();
        onInternalClick(e);
      },
      role: "tab",
      onFocus: onFocus
    }, label)
  );
});
TabBarItem.displayName = "zaui-tabbar-item";
var _default = exports.default = TabBarItem;