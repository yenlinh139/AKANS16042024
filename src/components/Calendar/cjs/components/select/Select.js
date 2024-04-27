"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _react = _interopRequireWildcard(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _icon = _interopRequireDefault(require("../icon"));
var _class = require("../../utils/class");
var _Input = _interopRequireDefault(require("../input/Input"));
var _SelectTrigger = _interopRequireDefault(require("./SelectTrigger"));
var _SelectPanel = _interopRequireDefault(require("./SelectPanel"));
var _options = require("./utils/options");
var _context = require("./context");
var _excluded = ["className", "defaultOpen", "label", "status", "helperText", "errorText", "placeholder", "children", "defaultValue", "disabled", "mask", "maskCloseable", "multiple", "onChange", "closeOnSelect", "onVisibilityChange"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
var Select = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var className = props.className,
    defaultOpen = props.defaultOpen,
    label = props.label,
    status = props.status,
    helperText = props.helperText,
    errorText = props.errorText,
    placeholder = props.placeholder,
    children = props.children,
    defaultValue = props.defaultValue,
    disabled = props.disabled,
    _props$mask = props.mask,
    mask = _props$mask === void 0 ? true : _props$mask,
    _props$maskCloseable = props.maskCloseable,
    maskCloseable = _props$maskCloseable === void 0 ? true : _props$maskCloseable,
    multiple = props.multiple,
    onChange = props.onChange,
    closeOnSelect = props.closeOnSelect,
    _onVisibilityChange = props.onVisibilityChange,
    restProps = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  var _useState = (0, _react.useState)(restProps.value || defaultValue || []),
    value = _useState[0],
    setValue = _useState[1];
  var _useState2 = (0, _react.useState)(!!defaultOpen && !disabled),
    visible = _useState2[0],
    setVisible = _useState2[1];
  var prefixCls = (0, _class.getPrefixCls)("select");
  var cls = (0, _clsx.default)(prefixCls, className);
  var optionsList = (0, _options.convertChildrenToData)(children);
  var options = (0, _options.flattenOptions)(optionsList);
  var getSelectedInputDisplay = function getSelectedInputDisplay(val) {
    if (!Array.isArray(val)) {
      var _options$find;
      return (_options$find = options.find(function (otp) {
        return otp.value === val;
      })) == null || (_options$find = _options$find.label) == null ? void 0 : _options$find.toString();
    }
    return val.map(function (selected) {
      var item = options.find(function (otp) {
        return selected === otp.value;
      });
      return item == null ? void 0 : item.label;
    }).join(", ");
  };
  var inputDisplay = getSelectedInputDisplay(restProps.value || value);
  var updateValue = (0, _react.useCallback)(function (val) {
    if (Array.isArray(value) && multiple) {
      var index = value.indexOf(val);
      if (index !== -1) {
        var newValue = [].concat(value);
        newValue.splice(index, 1);
        onChange == null || onChange([].concat(newValue));
        setValue([].concat(newValue));
      } else {
        onChange == null || onChange([].concat(value, [val]));
        setValue([].concat(value, [val]));
      }
    } else {
      onChange == null || onChange(val);
      setValue(val);
      if (closeOnSelect) {
        // eslint-disable-next-line no-use-before-define
        closeSelectSheet();
      }
    }
  }, [closeOnSelect, multiple, onChange, value]);
  var closeSelectSheet = function closeSelectSheet() {
    setVisible(false);
  };
  var contextValue = (0, _react.useMemo)(function () {
    return {
      value: restProps.value || value,
      name: restProps.name,
      disabled: disabled,
      updateValue: updateValue,
      closeSelectSheet: closeSelectSheet
    };
  }, [disabled, restProps.name, restProps.value, updateValue, value]);
  var getPopupElement = (0, _react.useCallback)(function () {
    return /*#__PURE__*/_react.default.createElement(_SelectPanel.default, {
      title: label,
      optionsList: options
    }, children);
  }, [children, label, options]);
  return /*#__PURE__*/_react.default.createElement(_context.Context.Provider, {
    value: contextValue
  }, /*#__PURE__*/_react.default.createElement(_SelectTrigger.default, {
    defaultOpen: defaultOpen,
    visible: visible,
    popupElement: getPopupElement(),
    mask: mask,
    maskCloseable: maskCloseable,
    onVisibilityChange: function onVisibilityChange(v) {
      if (v !== visible) {
        setVisible(v);
        _onVisibilityChange == null || _onVisibilityChange(v);
      }
    }
  }, /*#__PURE__*/_react.default.createElement(_Input.default, {
    ref: ref,
    className: cls,
    label: label,
    helperText: helperText,
    status: status,
    errorText: errorText,
    placeholder: placeholder,
    readOnly: true,
    disabled: disabled,
    value: inputDisplay,
    name: restProps.name,
    id: restProps.id,
    suffix: /*#__PURE__*/_react.default.createElement(_icon.default, {
      className: prefixCls + "-icon",
      icon: "zi-chevron-down"
    })
  })));
});
var _default = exports.default = Select;