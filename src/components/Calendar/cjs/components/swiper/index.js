"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _Swiper = _interopRequireDefault(require("./Swiper"));
var _SwiperSlide = _interopRequireDefault(require("./SwiperSlide"));
var Swiper = _Swiper.default;
Swiper.Slide = _SwiperSlide.default;
var _default = exports.default = Swiper;