"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.ThemeSwitcherContext = void 0;
exports.useTheme = useTheme;
var _react = _interopRequireDefault(require("react"));
var ThemeSwitcherContext = exports.ThemeSwitcherContext = /*#__PURE__*/_react.default.createContext(undefined);
function useTheme() {
  var context = _react.default.useContext(ThemeSwitcherContext);
  if (!context) {
    throw new Error("To use `useTheme`, component must be contained with App components");
  }
  return [context.themeMode, context.setThemeMode];
}