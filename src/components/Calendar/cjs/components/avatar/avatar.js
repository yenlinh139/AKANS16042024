"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _react = _interopRequireDefault(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _propsType = require("./props-type");
var _class = require("../../utils/class");
var _blockIcon = _interopRequireDefault(require("./block-icon"));
var _excluded = ["story", "blocked", "children", "src", "online", "className", "size", "style", "backgroundColor"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2.default)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var TOTAL_GRADIENT_VARIANTS = 4;
var calculateAvatarColor = function calculateAvatarColor(name) {
  if (typeof name !== "string") {
    // eslint-disable-next-line sonarjs/no-duplicate-string
    return "GREEN-GREENLIGHT";
  }
  var sum = 0;
  var length = name.length;
  for (var i = 0; i < length; i += 1) {
    sum += name.charCodeAt(i);
  }
  var colorIndex = sum % TOTAL_GRADIENT_VARIANTS;
  switch (colorIndex) {
    case 1:
      return "GREEN-GREENLIGHT";
    case 2:
      return "PURPLE-BLUE";
    case 3:
      return "SKYBLUE-GREEN";
    default:
      return "BLUE-BLUELIGHT";
  }
};
var Avatar = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var _classNames;
  var story = props.story,
    blocked = props.blocked,
    children = props.children,
    src = props.src,
    online = props.online,
    className = props.className,
    size = props.size,
    style = props.style,
    backgroundColor = props.backgroundColor,
    rest = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  var prefixCls = (0, _class.getPrefixCls)("avatar");
  var bgColor = backgroundColor;
  if (!bgColor && typeof children === "string") {
    bgColor = calculateAvatarColor(children);
  }
  var classes = (0, _clsx.default)(prefixCls, (_classNames = {}, _classNames[prefixCls + "-story"] = story === _propsType.StoryStatus.default, _classNames[prefixCls + "-story-seen"] = story === _propsType.StoryStatus.seen, _classNames[prefixCls + "-text-xsmall"] = size && size <= 24, _classNames[prefixCls + "-text-small"] = size && size > 24 && size <= 32, _classNames[prefixCls + "-text-medium"] = size && size > 32 && size <= 48, _classNames[prefixCls + "-text-large"] = size && size > 48, _classNames[prefixCls + "-color-01"] = bgColor === "BLUE-BLUELIGHT", _classNames[prefixCls + "-color-02"] = bgColor === "PURPLE-BLUE", _classNames[prefixCls + "-color-03"] = bgColor === "SKYBLUE-GREEN", _classNames[prefixCls + "-color-04"] = bgColor === "GREEN-GREENLIGHT", _classNames["" + className] = className, _classNames));
  var avatarStyle = {};
  if (style) {
    avatarStyle = _objectSpread({}, style);
  }
  if (size) {
    avatarStyle = _objectSpread(_objectSpread({}, avatarStyle), {}, {
      "--zaui-avatar-size": size + "px"
    });
  }
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    ref: ref,
    className: classes,
    style: avatarStyle
  }, rest), src ? /*#__PURE__*/_react.default.createElement("img", {
    className: prefixCls + "-image",
    src: src,
    alt: ""
  }) : /*#__PURE__*/_react.default.createElement("div", {
    className: prefixCls + "-inner"
  }, children), online && /*#__PURE__*/_react.default.createElement("span", {
    className: prefixCls + "-online"
  }), blocked && /*#__PURE__*/_react.default.createElement("span", {
    className: prefixCls + "-blocked"
  }, /*#__PURE__*/_react.default.createElement(_blockIcon.default, null)));
});
Avatar.displayName = "zaui-avatar";
var _default = exports.default = Avatar;