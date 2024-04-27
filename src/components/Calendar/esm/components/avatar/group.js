import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["children", "horizontal", "className", "maxCounter", "onCounterClick", "total"];
import classNames from "clsx";
import React from "react";
import { getPrefixCls } from "../../utils/class";
import Avatar from "./avatar";
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
    rest = _objectWithoutPropertiesLoose(props, _excluded);
  var prefixCls = getPrefixCls("avatar-group");
  var handleOnCounterClick = function handleOnCounterClick(event) {
    if (typeof onCounterClick === "function") {
      onCounterClick(event);
    }
  };
  var maxCounter = maxCounterProps < 1 ? DEFAULT_AVATAR_GROUP_COUNTER : maxCounterProps;
  var horizontal = maxCounter > MAX_VERTICAL_AVATAR_GROUP_COUNTER ? true : horizontalProps;
  var childrenComponents = [];
  if (children && React.Children.count(children)) {
    childrenComponents = React.Children.toArray(children);
  }
  var total = totalAvatar && totalAvatar >= childrenComponents.length ? totalAvatar : childrenComponents.length;
  var totalDisplay = total === maxCounter ? total : maxCounter;
  var dataToDisplay = childrenComponents.slice(0, totalDisplay).map(function (child) {
    return child.props;
  });
  var classes = classNames(prefixCls, (_classNames = {}, _classNames[prefixCls + "-horizontal"] = horizontal, _classNames), className);
  var maxCounterCls = classNames(prefixCls + "-item", prefixCls + "-item-max-counter");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes
  }, rest), dataToDisplay.map(function (avatarProps, index) {
    return /*#__PURE__*/React.createElement(Avatar, _extends({
      className: prefixCls + "-item",
      key: (avatarProps == null ? void 0 : avatarProps.id) || "zaui-avatar-" + index
    }, avatarProps, {
      story: false,
      online: false,
      size: 24
    }));
  }), total > totalDisplay && /*#__PURE__*/React.createElement(Avatar, {
    onClick: handleOnCounterClick,
    className: maxCounterCls,
    size: 24
  }, "+", total - totalDisplay));
};
Group.displayName = "zaui-avatar-group";
export default Group;