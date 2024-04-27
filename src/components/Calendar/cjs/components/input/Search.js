"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _react = _interopRequireDefault(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _Input = _interopRequireDefault(require("./Input"));
var _class = require("../../utils/class");
var _searchOutlined = _interopRequireDefault(require("./icons/search-outlined"));
var _ref = require("../../utils/ref");
var _button = _interopRequireDefault(require("../button"));
var _SizeContext = _interopRequireDefault(require("../../config-provider/SizeContext"));
var _excluded = ["className", "suffix", "loading", "disabled", "size", "onSearch", "onChange", "onCompositionStart", "onCompositionEnd"];
var Search = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var _classNames;
  var className = props.className,
    suffix = props.suffix,
    loading = props.loading,
    disabled = props.disabled,
    customizeSize = props.size,
    customOnSearch = props.onSearch,
    customOnChange = props.onChange,
    onCompositionStart = props.onCompositionStart,
    onCompositionEnd = props.onCompositionEnd,
    restProps = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  var contextSize = _react.default.useContext(_SizeContext.default);
  var composedRef = _react.default.useRef(false);
  var size = customizeSize || contextSize;
  var inputRef = _react.default.useRef(null);
  var onChange = function onChange(e) {
    if (e && e.target && e.type === "click" && customOnSearch) {
      customOnSearch(e.target.value, e);
    }
    if (customOnChange) {
      customOnChange(e);
    }
  };
  var onMouseDown = function onMouseDown(e) {
    var _inputRef$current;
    if (document.activeElement === ((_inputRef$current = inputRef.current) == null ? void 0 : _inputRef$current.input)) {
      e.preventDefault();
    }
  };
  var onSearch = function onSearch(e) {
    if (customOnSearch) {
      var _inputRef$current2;
      customOnSearch(((_inputRef$current2 = inputRef.current) == null || (_inputRef$current2 = _inputRef$current2.input) == null ? void 0 : _inputRef$current2.value) || "", e);
    }
  };
  var onPressEnter = function onPressEnter(e) {
    if (composedRef.current) {
      return;
    }
    onSearch(e);
  };
  var prefixCls = (0, _class.getPrefixCls)("input-search");
  var searchIcon = /*#__PURE__*/_react.default.createElement(_searchOutlined.default, null);
  var btnClassName = prefixCls + "-button";
  var buttonSearch = /*#__PURE__*/_react.default.createElement(_button.default, {
    className: btnClassName,
    variant: "tertiary",
    type: "neutral",
    disabled: disabled,
    key: "enterButton",
    onMouseDown: onMouseDown,
    onClick: onSearch,
    loading: loading,
    icon: searchIcon,
    size: size
  });
  var cls = (0, _clsx.default)(prefixCls, (_classNames = {}, _classNames[prefixCls + "-" + size] = !!size, _classNames), className);
  var handleOnCompositionStart = function handleOnCompositionStart(e) {
    composedRef.current = true;
    onCompositionStart == null || onCompositionStart(e);
  };
  var handleOnCompositionEnd = function handleOnCompositionEnd(e) {
    composedRef.current = false;
    onCompositionEnd == null || onCompositionEnd(e);
  };
  return /*#__PURE__*/_react.default.createElement(_Input.default, (0, _extends2.default)({
    ref: (0, _ref.composeRef)(inputRef, ref),
    onPressEnter: onPressEnter
  }, restProps, {
    size: size,
    label: "",
    helperText: "",
    onCompositionStart: handleOnCompositionStart,
    onCompositionEnd: handleOnCompositionEnd,
    prefix: buttonSearch,
    suffix: suffix,
    onChange: onChange,
    className: cls,
    disabled: disabled
  }));
});
var _default = exports.default = Search;