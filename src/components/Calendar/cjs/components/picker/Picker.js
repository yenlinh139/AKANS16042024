"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireWildcard(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _input = _interopRequireDefault(require("../input"));
var _PickerTrigger = _interopRequireDefault(require("./PickerTrigger"));
var _PickerPanel = _interopRequireDefault(require("./PickerPanel"));
var _class = require("../../utils/class");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2.default)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Picker = function Picker(props) {
  var label = props.label,
    helperText = props.helperText,
    status = props.status,
    errorText = props.errorText,
    data = props.data,
    value = props.value,
    defaultValue = props.defaultValue,
    onChange = props.onChange,
    action = props.action,
    placeholder = props.placeholder,
    title = props.title,
    defaultOpen = props.defaultOpen,
    disabled = props.disabled,
    formatPickedValueDisplay = props.formatPickedValueDisplay,
    _props$mask = props.mask,
    mask = _props$mask === void 0 ? true : _props$mask,
    _props$maskClosable = props.maskClosable,
    maskClosable = _props$maskClosable === void 0 ? true : _props$maskClosable,
    inputClass = props.inputClass,
    datePicker = props.datePicker,
    initData = props.initData,
    suffix = props.suffix,
    prefix = props.prefix,
    _onVisibilityChange = props.onVisibilityChange,
    updateDatePickerData = props.updateDatePickerData,
    id = props.id,
    inputName = props.name;
  var getInitValue = function getInitValue(val, defaultVal, options) {
    var getOption = function getOption(opts) {
      var result = {};
      Object.keys(opts).forEach(function (optName) {
        var group = options.find(function (dataGroup) {
          return dataGroup.name === optName;
        });
        if (group) {
          var opt = group.options.find(function (o) {
            return o.value === opts[optName];
          });
          if (opt) {
            result[optName] = opt;
          } else if (datePicker) {
            updateDatePickerData == null || updateDatePickerData();
          }
        }
      });
      return result;
    };
    if (val) return getOption(val);
    if (defaultVal) return getOption(defaultVal);
    return {};
  };
  var _useState = (0, _react.useState)(!!defaultOpen && !disabled),
    visible = _useState[0],
    setVisible = _useState[1];

  // Local picker state
  var _useState2 = (0, _react.useState)(getInitValue(value, defaultValue, data || [])),
    pickerValue = _useState2[0],
    setPickerValue = _useState2[1];
  (0, _react.useEffect)(function () {
    if (value) {
      setPickerValue(getInitValue(value, undefined, data || []));
    } else {
      setPickerValue({});
    }
  }, [value]);
  var closePicker = function closePicker() {
    setVisible(false);
  };

  // Handle change picker value
  var handleChangePickerValue = function handleChangePickerValue(otp, name) {
    var _pickerValue$name;
    var newState = _objectSpread({}, pickerValue);
    if (((_pickerValue$name = pickerValue[name]) == null ? void 0 : _pickerValue$name.value) !== otp.value) {
      newState[name] = otp;
    }
    setPickerValue(newState);
    if (!value) {
      onChange == null || onChange(newState);
    } else {
      var different = false;
      Object.entries(value).forEach(function (_ref) {
        var _newState$k;
        var k = _ref[0],
          v = _ref[1];
        if (((_newState$k = newState[k]) == null ? void 0 : _newState$k.value) !== v) {
          different = true;
        }
      });
      if (different) {
        onChange == null || onChange(newState);
      }
    }
  };

  // Merge classes
  var prefixCls = (0, _class.getPrefixCls)("picker");
  var inputCls = (0, _clsx.default)(prefixCls + "-input", inputClass);

  // Render the picker modal
  var getPopupElement = function getPopupElement() {
    return /*#__PURE__*/_react.default.createElement(_PickerPanel.default, {
      prefixCls: prefixCls,
      className: prefixCls,
      data: data,
      value: pickerValue,
      onChange: handleChangePickerValue,
      title: title,
      closePanel: closePicker,
      action: action,
      datePicker: datePicker,
      initData: initData
    });
  };

  // Map the value of the picker to the string to be displayed on the input
  var getInputDisplay = function getInputDisplay(picked) {
    if (formatPickedValueDisplay) {
      return formatPickedValueDisplay(picked);
    }
    return Object.keys(picked).map(function (k) {
      return pickerValue[k].displayName;
    }).filter(function (item) {
      return item !== null;
    }).join(", ");
  };
  var inputDisplay = getInputDisplay(pickerValue);
  return /*#__PURE__*/_react.default.createElement(_PickerTrigger.default, {
    popupElement: getPopupElement(),
    visible: visible,
    defaultOpen: defaultOpen,
    onVisibilityChange: function onVisibilityChange(v) {
      if (!disabled) {
        setVisible(v);
        _onVisibilityChange == null || _onVisibilityChange(v);
      }
    },
    mask: mask,
    maskClosable: maskClosable
  }, /*#__PURE__*/_react.default.createElement(_input.default, {
    label: label,
    className: inputCls,
    helperText: helperText,
    status: status,
    errorText: errorText,
    placeholder: placeholder,
    value: inputDisplay,
    readOnly: true,
    disabled: disabled,
    prefix: prefix,
    suffix: suffix,
    id: id,
    name: inputName
  }));
};
Picker.defaultProps = {
  datePicker: false,
  initData: undefined
};
var _default = exports.default = Picker;