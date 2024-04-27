"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _react = _interopRequireWildcard(require("react"));
var _useTheme = require("../../hooks/useTheme");
var _excluded = ["theme"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/**
 * App là component chính chứa toàn bộ nội dung, cài đặt chung của ứng dụng. Những Component trong App có thể sử dụng chung các context và hook được cung cấp sẵn.
 *
 * @category Container
 * @catPosition 1
 * @subCategory App
 * @component
 *
 * @example <data>{"title": "SwitchTheme.jsx"}</data>
import React from "react";
import { useTheme, Button } from "zmp-ui";

const SwitchTheme = () => {
  const [theme, setTheme] = useTheme();
  const switchTheme = () => {
    if (theme === "light") {
      setTheme({ mode: "dark" });
      return;
    }
    setTheme({ mode: "light" });
  };

  const icon =
    theme === "light" ? (
      <span className="switch-theme-icon">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.99975 9.807C8.74152 8.54828 7.88464 6.94484 7.53738 5.1993C7.19012 3.45375 7.36807 1.64444 8.04875 0C6.10802 0.382051 4.32535 1.33431 2.92875 2.735C-0.97625 6.64 -0.97625 12.972 2.92875 16.877C6.83475 20.783 13.1658 20.782 17.0718 16.877C18.4721 15.4805 19.4243 13.6983 19.8067 11.758C18.1623 12.4385 16.353 12.6164 14.6075 12.2692C12.862 11.9219 11.2585 11.0651 9.99975 9.807Z"
            fill="white"
          />
        </svg>
      </span>
    ) : (
      <span className="switch-theme-icon">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.0004 0.400024C10.3187 0.400024 10.6239 0.526453 10.8489 0.751496C11.074 0.97654 11.2004 1.28176 11.2004 1.60002V2.80002C11.2004 3.11828 11.074 3.42351 10.8489 3.64855C10.6239 3.8736 10.3187 4.00002 10.0004 4.00002C9.68213 4.00002 9.37691 3.8736 9.15186 3.64855C8.92682 3.42351 8.80039 3.11828 8.80039 2.80002V1.60002C8.80039 1.28176 8.92682 0.97654 9.15186 0.751496C9.37691 0.526453 9.68213 0.400024 10.0004 0.400024ZM14.8004 10C14.8004 11.2731 14.2947 12.494 13.3945 13.3941C12.4943 14.2943 11.2734 14.8 10.0004 14.8C8.72735 14.8 7.50645 14.2943 6.60628 13.3941C5.7061 12.494 5.20039 11.2731 5.20039 10C5.20039 8.72698 5.7061 7.50609 6.60628 6.60591C7.50645 5.70574 8.72735 5.20002 10.0004 5.20002C11.2734 5.20002 12.4943 5.70574 13.3945 6.60591C14.2947 7.50609 14.8004 8.72698 14.8004 10ZM14.2436 15.94L15.092 16.7884C15.3183 17.007 15.6214 17.128 15.9361 17.1252C16.2507 17.1225 16.5517 16.9963 16.7742 16.7738C16.9967 16.5513 17.1229 16.2503 17.1256 15.9357C17.1283 15.6211 17.0074 15.3179 16.7888 15.0916L15.9404 14.2432C15.7141 14.0246 15.4109 13.9037 15.0963 13.9064C14.7817 13.9091 14.4807 14.0354 14.2582 14.2578C14.0357 14.4803 13.9095 14.7813 13.9068 15.0959C13.904 15.4106 14.025 15.7137 14.2436 15.94ZM16.7876 3.21162C17.0126 3.43666 17.1389 3.74183 17.1389 4.06002C17.1389 4.37822 17.0126 4.68339 16.7876 4.90842L15.9404 5.75682C15.8297 5.87144 15.6973 5.96285 15.5509 6.02575C15.4045 6.08864 15.247 6.12174 15.0877 6.12312C14.9283 6.12451 14.7703 6.09415 14.6228 6.03381C14.4754 5.97347 14.3414 5.88437 14.2287 5.7717C14.116 5.65903 14.0269 5.52504 13.9666 5.37757C13.9063 5.23009 13.8759 5.07208 13.8773 4.91274C13.8787 4.75341 13.9118 4.59594 13.9747 4.44954C14.0376 4.30313 14.129 4.17072 14.2436 4.06002L15.092 3.21162C15.317 2.98666 15.6222 2.86028 15.9404 2.86028C16.2586 2.86028 16.5638 2.98666 16.7888 3.21162H16.7876ZM18.4004 11.2C18.7186 11.2 19.0239 11.0736 19.2489 10.8486C19.474 10.6235 19.6004 10.3183 19.6004 10C19.6004 9.68176 19.474 9.37654 19.2489 9.1515C19.0239 8.92645 18.7186 8.80002 18.4004 8.80002H17.2004C16.8821 8.80002 16.5769 8.92645 16.3519 9.1515C16.1268 9.37654 16.0004 9.68176 16.0004 10C16.0004 10.3183 16.1268 10.6235 16.3519 10.8486C16.5769 11.0736 16.8821 11.2 17.2004 11.2H18.4004ZM10.0004 16C10.3187 16 10.6239 16.1265 10.8489 16.3515C11.074 16.5765 11.2004 16.8818 11.2004 17.2V18.4C11.2004 18.7183 11.074 19.0235 10.8489 19.2486C10.6239 19.4736 10.3187 19.6 10.0004 19.6C9.68213 19.6 9.37691 19.4736 9.15186 19.2486C8.92682 19.0235 8.80039 18.7183 8.80039 18.4V17.2C8.80039 16.8818 8.92682 16.5765 9.15186 16.3515C9.37691 16.1265 9.68213 16 10.0004 16ZM4.06039 5.75682C4.1718 5.86832 4.30409 5.95677 4.44969 6.01714C4.59528 6.07751 4.75135 6.10861 4.90897 6.10867C5.06658 6.10872 5.22267 6.07773 5.36831 6.01747C5.51395 5.9572 5.6463 5.86884 5.75779 5.75742C5.86928 5.64601 5.95774 5.51373 6.01811 5.36813C6.07848 5.22253 6.10958 5.06647 6.10963 4.90885C6.10969 4.75123 6.0787 4.59514 6.01843 4.4495C5.95817 4.30386 5.8698 4.17152 5.75839 4.06002L4.90879 3.21162C4.68247 2.99303 4.37935 2.87208 4.06471 2.87482C3.75007 2.87755 3.4491 3.00375 3.22661 3.22624C3.00412 3.44873 2.87792 3.74971 2.87518 4.06434C2.87245 4.37898 2.9934 4.6821 3.21199 4.90842L4.06039 5.75682ZM5.75719 15.94L4.90879 16.7884C4.68247 17.007 4.37935 17.128 4.06471 17.1252C3.75007 17.1225 3.4491 16.9963 3.22661 16.7738C3.00412 16.5513 2.87792 16.2503 2.87518 15.9357C2.87245 15.6211 2.9934 15.3179 3.21199 15.0916L4.06039 14.2432C4.28671 14.0246 4.58984 13.9037 4.90447 13.9064C5.21911 13.9091 5.52008 14.0354 5.74257 14.2578C5.96506 14.4803 6.09127 14.7813 6.094 15.0959C6.09673 15.4106 5.97578 15.7137 5.75719 15.94ZM2.80039 11.2C3.11865 11.2 3.42387 11.0736 3.64892 10.8486C3.87396 10.6235 4.00039 10.3183 4.00039 10C4.00039 9.68176 3.87396 9.37654 3.64892 9.1515C3.42387 8.92645 3.11865 8.80002 2.80039 8.80002H1.60039C1.28213 8.80002 0.976906 8.92645 0.751862 9.1515C0.526819 9.37654 0.400391 9.68176 0.400391 10C0.400391 10.3183 0.526819 10.6235 0.751862 10.8486C0.976906 11.0736 1.28213 11.2 1.60039 11.2H2.80039Z"
            fill="#141415"
          />
        </svg>
      </span>
    );
  return (
    <Button className="switch-theme" icon={icon} onClick={switchTheme} />
  );
}
 * @example <data>{"title": "TestPage.jsx"}</data>
import React from "react";
import { useTheme, Box, Input, Page } from "zmp-ui";

const TestPage = () => {
  const [theme, setTheme] = useTheme();

  return (
    <Page>
        <Box mt="10">
        <p>Theme: {theme}</p>
        <Input label="Label" helperText="Helper text"/>
        </Box>
    </Page>
  )
}
export default TestPage;
 * @example <data>{"title": "App.jsx"}</data>
import React from "react";
import { Route } from "react-router-dom";
import { AnimationRoutes, App, ZMPRouter } from "zmp-ui";

import SwitchTheme from "./SwitchTheme.jsx"
import TestPage from "./TestPage";

function MyApp(props){
    return (
        <App>
            <SwitchTheme />
            <ZMPRouter>
                <AnimationRoutes>
                    <Route path="/" element={<TestPage />} />
                </AnimationRoutes>
            </ZMPRouter>
        </App>
    );
}
 */
var App = function App(props) {
  var _props$theme = props.theme,
    theme = _props$theme === void 0 ? "light" : _props$theme,
    rest = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  var _useState = (0, _react.useState)(theme || "light"),
    currentTheme = _useState[0],
    setCurrentTheme = _useState[1];
  (0, _react.useEffect)(function () {
    if (currentTheme === "dark" || currentTheme === "light") {
      document.body.setAttribute("zaui-theme", currentTheme);
    }
  }, [currentTheme]);
  var switcher = (0, _react.useCallback)(function (_ref) {
    var mode = _ref.mode;
    if (mode === currentTheme) return;
    if (mode === "dark" || mode === "light") {
      setCurrentTheme(mode);
    }
  }, [currentTheme]);
  var value = _react.default.useMemo(function () {
    return {
      setThemeMode: switcher,
      themeMode: currentTheme
    };
  }, [switcher, currentTheme]);
  return /*#__PURE__*/_react.default.createElement(_useTheme.ThemeSwitcherContext.Provider, (0, _extends2.default)({
    value: value
  }, rest));
};
var _default = exports.default = App;