"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _react = _interopRequireWildcard(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _button = _interopRequireDefault(require("../button"));
var _class = require("../../utils/class");
var _sheet = _interopRequireDefault(require("./sheet"));
var _excluded = ["className", "actions", "title"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
var Action = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var className = props.className,
    actions = props.actions,
    title = props.title,
    rest = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  var sheetRef = (0, _react.useRef)(null);
  var prefixCls = (0, _class.getPrefixCls)("action-sheet");
  var groups = actions || [];
  if (!Array.isArray(groups[0])) {
    groups = [groups.filter(function (group) {
      return !Array.isArray(group);
    })];
  }
  (0, _react.useImperativeHandle)(ref, function () {
    var _sheetRef$current;
    return (_sheetRef$current = sheetRef.current) == null ? void 0 : _sheetRef$current.sheet;
  });
  var cls = (0, _clsx.default)(prefixCls, {}, className);
  var actionsChildren = groups.map(function (group, indx) {
    return /*#__PURE__*/_react.default.createElement("ul", {
      className: prefixCls + "-actions-group"
      // eslint-disable-next-line react/no-array-index-key
      ,
      key: "zaui-modal-action-group-key-" + indx
    }, group.map(function (action, index) {
      var _classNames;
      var text = action.text,
        onClick = action.onClick,
        actionClassName = action.className,
        style = action.style,
        close = action.close,
        highLight = action.highLight,
        danger = action.danger,
        disabled = action.disabled;
      var onClose = props.onClose;
      var btnCls = (0, _clsx.default)(actionClassName, prefixCls + "-action", (_classNames = {}, _classNames[prefixCls + "-action-highlight"] = highLight, _classNames));
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
      return /*#__PURE__*/_react.default.createElement("li", {
        className: btnCls,
        key: action.key || "zaui-modal-action-key-" + index
      }, /*#__PURE__*/_react.default.createElement(_button.default, {
        type: actionType,
        style: style,
        variant: "tertiary",
        disabled: disabled,
        fullWidth: true,
        className: prefixCls + "-action-button",
        onClick: onActionClick
      }, text));
    }));
  }) || null;
  return /*#__PURE__*/_react.default.createElement(_sheet.default, (0, _extends2.default)({
    className: cls,
    ref: sheetRef,
    handler: false,
    title: undefined
  }, rest), title && /*#__PURE__*/_react.default.createElement("div", {
    className: prefixCls + "-title-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: prefixCls + "-title"
  }, title)), actionsChildren && /*#__PURE__*/_react.default.createElement("div", {
    className: prefixCls + "-actions-groups"
  }, actionsChildren));
});
Action.displayName = "zaui-action-sheet";
var _default = exports.default = Action;