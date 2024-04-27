"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireDefault(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _reactTransitionGroup = require("react-transition-group");
var _class = require("../../utils/class");
var _button = _interopRequireDefault(require("../button"));
var _excluded = ["className", "onClick", "highLight", "danger", "close"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2.default)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; } /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
var Content = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var _classNames;
  var title = props.title,
    ariaId = props.ariaId,
    children = props.children,
    coverSrc = props.coverSrc,
    description = props.description,
    actions = props.actions,
    verticalActions = props.verticalActions,
    _props$visible = props.visible,
    visible = _props$visible === void 0 ? false : _props$visible,
    onVisibleChanged = props.onVisibleChanged,
    onClose = props.onClose,
    _props$actionsDivider = props.actionsDivider,
    actionsDivider = _props$actionsDivider === void 0 ? true : _props$actionsDivider,
    onMouseDown = props.onMouseDown,
    onMouseUp = props.onMouseUp,
    modalClassName = props.modalClassName,
    modalStyle = props.modalStyle,
    height = props.height,
    width = props.width;
  var prefixCls = (0, _class.getPrefixCls)("modal-content");
  var cls = (0, _clsx.default)(prefixCls, modalClassName);
  var actionsCls = (0, _clsx.default)(prefixCls + "-actions", (_classNames = {}, _classNames[prefixCls + "-actions-vertical"] = verticalActions, _classNames[prefixCls + "-actions-no-divider"] = actionsDivider === false, _classNames));
  var modalContentStyle = {};
  if (modalStyle) {
    modalContentStyle = _objectSpread({}, modalStyle);
  }
  if (height) {
    modalContentStyle.height = height;
  }
  if (width) {
    modalContentStyle.width = width;
  }
  var coverNode = /*#__PURE__*/_react.default.createElement("div", {
    className: prefixCls + "-cover"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: coverSrc,
    alt: title
  }));
  var mainContent = /*#__PURE__*/_react.default.createElement("div", {
    className: prefixCls + "-main"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: prefixCls + "-title"
  }, title), /*#__PURE__*/_react.default.createElement("div", {
    className: prefixCls + "-description"
  }, description), children);
  var actionContent = actions ? /*#__PURE__*/_react.default.createElement("div", {
    className: actionsCls
  }, actions.map(function (action, index) {
    var _classNames2;
    var actionClassName = action.className,
      onClick = action.onClick,
      highLight = action.highLight,
      danger = action.danger,
      close = action.close,
      buttonProps = (0, _objectWithoutPropertiesLoose2.default)(action, _excluded);
    var btnCls = (0, _clsx.default)(actionClassName, prefixCls + "-action", (_classNames2 = {}, _classNames2[prefixCls + "-action-highlight"] = highLight, _classNames2));
    var onActionClick = function onActionClick(e) {
      if (close && onClose) {
        onClose(e);
        return;
      }
      if (onClick) {
        onClick(e);
      }
    };
    var actionType = "neutral";
    if (highLight) {
      actionType = "highlight";
    }
    if (danger) {
      actionType = "danger";
    }
    return /*#__PURE__*/_react.default.createElement(_button.default, (0, _extends2.default)({}, buttonProps, {
      key: action.key || "zaui-modal-action-key-" + index,
      className: btnCls,
      onClick: onActionClick,
      variant: "tertiary",
      type: actionType
    }), action.text);
  })) : null;
  return /*#__PURE__*/_react.default.createElement(_reactTransitionGroup.CSSTransition, {
    in: visible,
    timeout: {
      exit: 300,
      enter: 300
    },
    classNames: prefixCls,
    key: "modal-content",
    onEnter: function onEnter() {
      onVisibleChanged == null || onVisibleChanged(true);
    },
    nodeRef: ref,
    onExited: function onExited() {
      return onVisibleChanged == null ? void 0 : onVisibleChanged(false);
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    ref: ref,
    key: "dialog-element",
    role: "dialog",
    "aria-labelledby": title ? ariaId : undefined,
    "aria-modal": "true",
    className: cls,
    onMouseDown: onMouseDown,
    onMouseUp: onMouseUp,
    style: modalContentStyle
  }, coverSrc && coverNode, mainContent, actionContent));
});
var _default = exports.default = Content;