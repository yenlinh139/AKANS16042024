"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _button = _interopRequireDefault(require("../button"));
var _icon = _interopRequireDefault(require("../icon"));
var _class = require("../../utils/class");
var _context = require("./context");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
var SelectPanel = function SelectPanel(props) {
  var className = props.className,
    optionsList = props.optionsList,
    title = props.title;
  var selectContext = (0, _react.useContext)(_context.Context);
  var _ref = selectContext,
    disabled = _ref.disabled,
    value = _ref.value,
    updateValue = _ref.updateValue,
    closeSelectSheet = _ref.closeSelectSheet;
  var prefixCls = (0, _class.getPrefixCls)("select");
  var panelPrefixCls = prefixCls + "-panel";
  var cls = (0, _clsx.default)(panelPrefixCls, {}, className);
  var renderOptions = function renderOptions(options) {
    var content = [];
    options.forEach(function (otp) {
      if (otp.group) {
        content.push( /*#__PURE__*/_react.default.createElement("div", {
          className: prefixCls + "-group",
          key: otp.key
        }, otp.label));
      } else {
        var _otp$value, _classNames;
        var isSelected = Array.isArray(value) ? value.find(function (val) {
          return val === otp.value;
        }) : value.toString() === (otp == null || (_otp$value = otp.value) == null ? void 0 : _otp$value.toString());
        var itemCls = (0, _clsx.default)(prefixCls + "-option", (_classNames = {}, _classNames[prefixCls + "-option-selected"] = isSelected, _classNames[prefixCls + "-option-disabled"] = disabled || otp.data.disabled, _classNames));
        content.push( /*#__PURE__*/_react.default.createElement("div", {
          key: otp.value,
          className: itemCls,
          role: "presentation",
          onClick: function onClick() {
            if (!disabled && !otp.data.disabled && otp.value !== undefined) {
              updateValue == null || updateValue(otp.value);
            }
          }
        }, otp.data.children || /*#__PURE__*/_react.default.createElement("span", null, otp.label), isSelected && /*#__PURE__*/_react.default.createElement(_icon.default, {
          className: prefixCls + "-option-check-icon",
          icon: "zi-check"
        })));
      }
    });
    return content;
  };
  var closeModal = function closeModal() {
    closeSelectSheet == null || closeSelectSheet();
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: cls
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: prefixCls + "-header"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: prefixCls + "-title"
  }, title), /*#__PURE__*/_react.default.createElement(_button.default, {
    type: "neutral",
    variant: "tertiary",
    className: prefixCls + "-close-icon",
    icon: /*#__PURE__*/_react.default.createElement(_icon.default, {
      icon: "zi-close"
    }),
    onClick: closeModal
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: prefixCls + "-options"
  }, renderOptions(optionsList)));
};
var _default = exports.default = SelectPanel;