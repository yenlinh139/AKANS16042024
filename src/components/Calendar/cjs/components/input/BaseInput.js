"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _commonUtils = require("./utils/commonUtils");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
var BaseInput = function BaseInput(props) {
  var _classNames2;
  var inputElement = props.inputElement,
    prefixCls = props.prefixCls,
    prefix = props.prefix,
    suffix = props.suffix,
    addonBefore = props.addonBefore,
    addonAfter = props.addonAfter,
    className = props.className,
    style = props.style,
    affixWrapperClassName = props.affixWrapperClassName,
    groupClassName = props.groupClassName,
    wrapperClassName = props.wrapperClassName,
    disabled = props.disabled,
    readOnly = props.readOnly,
    focused = props.focused,
    triggerFocus = props.triggerFocus,
    allowClear = props.allowClear,
    value = props.value,
    handleReset = props.handleReset,
    hidden = props.hidden,
    onInputTriggerClick = props.onInputTriggerClick;
  var containerRef = (0, _react.useRef)(null);
  var onInputMouseDown = function onInputMouseDown(e) {
    var _containerRef$current;
    if ((_containerRef$current = containerRef.current) != null && _containerRef$current.contains(e.target)) {
      triggerFocus == null || triggerFocus();
    }
  };

  // ================== Clear Icon ================== //
  var getClearIcon = function getClearIcon() {
    var _classNames;
    if (!allowClear) {
      return null;
    }
    var needClear = !disabled && !readOnly && value;
    var clearIconCls = prefixCls + "-clear-btn";
    var iconNode = typeof allowClear === "object" && allowClear != null && allowClear.clearIcon ? allowClear.clearIcon : "✖";
    return /*#__PURE__*/_react.default.createElement("span", {
      key: prefixCls + "-clear-btn",
      onClick: handleReset,
      onMouseDown: function onMouseDown(e) {
        return e.preventDefault();
      },
      className: (0, _clsx.default)(prefixCls + "-suffix-item", clearIconCls, (_classNames = {}, _classNames[clearIconCls + "-hidden"] = !needClear, _classNames[clearIconCls + "-has-suffix"] = !!suffix, _classNames)),
      role: "button",
      tabIndex: -1
    }, iconNode);
  };
  var element = /*#__PURE__*/(0, _react.cloneElement)(inputElement, {
    value: value,
    hidden: hidden
  });
  var affixWrapperPrefixCls = prefixCls + "-affix-wrapper";
  var affixWrapperCls = (0, _clsx.default)(affixWrapperPrefixCls, (_classNames2 = {}, _classNames2[affixWrapperPrefixCls + "-disabled"] = disabled, _classNames2[affixWrapperPrefixCls + "-focused"] = focused, _classNames2[affixWrapperPrefixCls + "-readonly"] = readOnly, _classNames2[affixWrapperPrefixCls + "-input-with-clear-btn"] = suffix && allowClear && value, _classNames2), !(0, _commonUtils.hasAddon)(props) && className, affixWrapperClassName);
  var suffixNode = (suffix || allowClear) && /*#__PURE__*/_react.default.createElement("span", {
    className: prefixCls + "-suffix"
  }, !disabled && getClearIcon(), suffix);
  element = /*#__PURE__*/_react.default.createElement("span", {
    className: affixWrapperCls,
    style: style,
    hidden: !(0, _commonUtils.hasAddon)(props) && hidden,
    onMouseDown: onInputMouseDown,
    ref: containerRef,
    role: "presentation",
    onClick: onInputTriggerClick
  }, prefix && /*#__PURE__*/_react.default.createElement("span", {
    className: prefixCls + "-prefix"
  }, prefix), /*#__PURE__*/(0, _react.cloneElement)(inputElement, {
    style: null,
    value: value,
    hidden: null
  }), suffixNode);

  // ================== Addon ================== //
  if ((0, _commonUtils.hasAddon)(props)) {
    var wrapperCls = prefixCls + "-group";
    var addonCls = wrapperCls + "-addon";
    var mergedWrapperClassName = (0, _clsx.default)(prefixCls + "-wrapper", wrapperCls, wrapperClassName);
    var mergedGroupClassName = (0, _clsx.default)(prefixCls + "-group-wrapper", className, groupClassName);

    // Need another wrapper for changing display:table to display:inline-block
    // and put style prop in wrapper
    return /*#__PURE__*/_react.default.createElement("span", {
      className: mergedGroupClassName,
      style: style,
      hidden: hidden
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: mergedWrapperClassName
    }, addonBefore && /*#__PURE__*/_react.default.createElement("span", {
      className: addonCls
    }, addonBefore), /*#__PURE__*/(0, _react.cloneElement)(element, {
      style: null,
      hidden: null
    }), addonAfter && /*#__PURE__*/_react.default.createElement("span", {
      className: addonCls
    }, addonAfter)));
  }
  return element;
};
var _default = exports.default = BaseInput;