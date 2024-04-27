"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.convertChildrenToData = convertChildrenToData;
exports.flattenOptions = flattenOptions;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var React = _interopRequireWildcard(require("react"));
var _childrens = require("../../../utils/childrens");
var _excluded = ["children", "value"],
  _excluded2 = ["children"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2.default)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function convertNodeToOption(node) {
  var _ref = node,
    key = _ref.key,
    _ref$props = _ref.props,
    children = _ref$props.children,
    value = _ref$props.value,
    restProps = (0, _objectWithoutPropertiesLoose2.default)(_ref$props, _excluded);
  return _objectSpread({
    key: key,
    value: value !== undefined ? value : key,
    children: children
  }, restProps);
}
function convertChildrenToData(nodes, optionOnly) {
  if (optionOnly === void 0) {
    optionOnly = false;
  }
  return (0, _childrens.toArray)(nodes).map(function (node, index) {
    if (! /*#__PURE__*/React.isValidElement(node) || !node.type) {
      return null;
    }
    var _ref2 = node,
      isSelectOptGroup = _ref2.type.isSelectOptGroup,
      key = _ref2.key,
      _ref2$props = _ref2.props,
      children = _ref2$props.children,
      restProps = (0, _objectWithoutPropertiesLoose2.default)(_ref2$props, _excluded2);
    if (optionOnly || !isSelectOptGroup) {
      return convertNodeToOption(node);
    }
    return _objectSpread(_objectSpread({
      key: "__ZAUI_SELECT_GRP__" + (key === null ? index : key) + "__",
      label: key
    }, restProps), {}, {
      options: convertChildrenToData(children)
    });
  }).filter(function (data) {
    return data !== null;
  });
}
function getKey(data, index) {
  var key = data.key;
  var value = data.value;
  if (key !== null && key !== undefined) {
    return key;
  }
  if (value !== undefined) {
    return value;
  }
  return "zaui-index-key-" + index;
}
function flattenOptions(options) {
  var flattenList = [];
  function dig(list, isGroupOption) {
    list.forEach(function (data) {
      var label = data.label;
      if (isGroupOption || !("options" in data)) {
        var value = data.value;
        flattenList.push({
          key: getKey(data, flattenList.length),
          groupOption: isGroupOption,
          data: data,
          label: data.title,
          value: value
        });
      } else {
        flattenList.push({
          key: getKey(data, flattenList.length),
          group: true,
          data: data,
          label: label
        });
        dig(data.options, true);
      }
    });
  }
  dig(options, false);
  return flattenList;
}