"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _clsx2 = _interopRequireDefault(require("clsx"));
var _react = _interopRequireWildcard(require("react"));
var _class = require("../../utils/class");
var _context = require("./context");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
var SwiperDots = function SwiperDots() {
  var context = (0, _react.useContext)(_context.SwiperContext);
  var prefixCls = (0, _class.getPrefixCls)("swiper-dots");
  var cls = (0, _clsx2.default)(prefixCls);
  var getDots = function getDots() {
    if (!context) return null;
    var slides = context.slides,
      activeIndex = context.activeIndex;
    return slides.map(function (slide, index) {
      var _clsx;
      var slideCls = (0, _clsx2.default)(prefixCls + "-item", (_clsx = {}, _clsx[prefixCls + "-item-active"] = activeIndex === index, _clsx));
      return /*#__PURE__*/_react.default.createElement("div", {
        key: "dot-" + slide.key,
        className: slideCls
      });
    });
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: cls
  }, getDots());
};
var _default = exports.default = SwiperDots;