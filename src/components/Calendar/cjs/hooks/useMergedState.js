"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = useMergedState;
var _react = _interopRequireWildcard(require("react"));
var _useEvent = _interopRequireDefault(require("./useEvent"));
var _useLayoutUpdateEffect = require("./useLayoutUpdateEffect");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
var Source = /*#__PURE__*/function (Source) {
  Source[Source["INNER"] = 0] = "INNER";
  Source[Source["PROP"] = 1] = "PROP";
  return Source;
}(Source || {});
/** We only think `undefined` is empty */
function hasValue(value) {
  return value !== undefined;
}

/**
 * Similar to `useState` but will use props value if provided.
 */
function useMergedState(defaultStateValue, option) {
  var _ref = option || {},
    defaultValue = _ref.defaultValue,
    value = _ref.value,
    onChange = _ref.onChange,
    postState = _ref.postState;

  // ======================= Init =======================
  var _useState = (0, _react.useState)(function () {
      var finalValue;
      var source;
      if (hasValue(value)) {
        finalValue = value;
        source = Source.PROP;
      } else if (hasValue(defaultValue)) {
        finalValue = typeof defaultValue === "function" ? defaultValue() : defaultValue;
        source = Source.PROP;
      } else {
        finalValue = typeof defaultStateValue === "function" ? defaultStateValue() : defaultStateValue;
        source = Source.INNER;
      }
      return [finalValue, source, finalValue];
    }),
    mergedValue = _useState[0],
    setMergedValue = _useState[1];
  var chosenValue = hasValue(value) ? value : mergedValue[0];
  var postMergedValue = postState ? postState(chosenValue) : chosenValue;

  // ======================= Sync =======================
  (0, _useLayoutUpdateEffect.useLayoutUpdateEffect)(function () {
    if (hasValue(value)) {
      setMergedValue(function (_ref2) {
        var prevValue = _ref2[0];
        return [value, Source.PROP, prevValue];
      });
    }
  }, [value]);

  // ====================== Update ======================
  var changeEventPrevRef = _react.default.useRef();
  var triggerChange = (0, _useEvent.default)(function (updater) {
    setMergedValue(function (prev) {
      var prevValue = prev[0],
        prevSource = prev[1],
        prevPrevValue = prev[2];
      var nextValue = typeof updater === "function" ? updater(prevValue) : updater;

      // Do nothing if value not change
      if (nextValue === prevValue) {
        return prev;
      }

      // Use prev prev value if is in a batch update to avoid missing data
      var overridePrevValue = prevSource === Source.INNER && changeEventPrevRef.current !== prevPrevValue ? prevPrevValue : prevValue;
      return [nextValue, Source.INNER, overridePrevValue];
    });
  });

  // ====================== Change ======================
  var onChangeFn = (0, _useEvent.default)(onChange);
  (0, _react.useLayoutEffect)(function () {
    var current = mergedValue[0],
      source = mergedValue[1],
      prev = mergedValue[2];
    if (current !== prev && source === Source.INNER) {
      onChangeFn(current, prev);
      changeEventPrevRef.current = prev;
    }
  }, [mergedValue]);
  return [postMergedValue, triggerChange];
}