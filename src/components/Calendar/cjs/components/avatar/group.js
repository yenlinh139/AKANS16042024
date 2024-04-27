"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _clsx = _interopRequireDefault(require("clsx"));
var _react = _interopRequireDefault(require("react"));
var _class = require("../../utils/class");
var _avatar = _interopRequireDefault(require("./avatar"));
var _excluded = ["children", "horizontal", "className", "maxCounter", "onCounterClick", "total"];
var DEFAULT_AVATAR_GROUP_COUNTER = 3;
var MAX_VERTICAL_AVATAR_GROUP_COUNTER = 4;
var Group = function Group(props) {
  var _classNames;
  var children = props.children,
    horizontalProps = props.horizontal,
    className = props.className,
    _props$maxCounter = props.maxCounter,
    maxCounterProps = _props$maxCounter === void 0 ? DEFAULT_AVATAR_GROUP_COUNTER : _props$maxCounter,
    onCounterClick = props.onCounterClick,
    totalAvatar = props.total,
    rest = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  var prefixCls = (0, _class.getPrefixCls)("avatar-group");
  var handleOnCounterClick = function handleOnCounterClick(event) {
    if (typeof onCounterClick === "function") {
      onCounterClick(event);
    }
  };
  var maxCounter = maxCounterProps < 1 ? DEFAULT_AVATAR_GROUP_COUNTER : maxCounterProps;
  var horizontal = maxCounter > MAX_VERTICAL_AVATAR_GROUP_COUNTER ? true : horizontalProps;
  var childrenComponents = [];
  if (children && _react.default.Children.count(children)) {
    childrenComponents = _react.default.Children.toArray(children);
  }
  var total = totalAvatar && totalAvatar >= childrenComponents.length ? totalAvatar : childrenComponents.length;
  var totalDisplay = total === maxCounter ? total : maxCounter;
  var dataToDisplay = childrenComponents.slice(0, totalDisplay).map(function (child) {
    return child.props;
  });
  var classes = (0, _clsx.default)(prefixCls, (_classNames = {}, _classNames[prefixCls + "-horizontal"] = horizontal, _classNames), className);
  var maxCounterCls = (0, _clsx.default)(prefixCls + "-item", prefixCls + "-item-max-counter");
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: classes
  }, rest), dataToDisplay.map(function (avatarProps, index) {
    return /*#__PURE__*/_react.default.createElement(_avatar.default, (0, _extends2.default)({
      className: prefixCls + "-item",
      key: (avatarProps == null ? void 0 : avatarProps.id) || "zaui-avatar-" + index
    }, avatarProps, {
      story: false,
      online: false,
      size: 24
    }));
  }), total > totalDisplay && /*#__PURE__*/_react.default.createElement(_avatar.default, {
    onClick: handleOnCounterClick,
    className: maxCounterCls,
    size: 24
  }, "+", total - totalDisplay));
};
Group.displayName = "zaui-avatar-group";
var _default = exports.default = Group;