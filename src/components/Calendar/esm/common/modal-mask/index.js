import _extends from "@babel/runtime/helpers/extends";
import React, { useEffect, useState, useRef } from "react";
import classNames from "clsx";
import { CSSTransition } from "react-transition-group";
import { getPrefixCls } from "../../utils/class";
var Mask = function Mask(props) {
  var _useState = useState(false),
    animationVisible = _useState[0],
    setAnimationVisible = _useState[1];
  var nodeRef = useRef(null);
  var _props$visible = props.visible,
    visible = _props$visible === void 0 ? false : _props$visible,
    style = props.style,
    maskProps = props.maskProps,
    children = props.children,
    className = props.className;
  var prefixCls = getPrefixCls("mask");
  var cls = classNames(prefixCls, className);
  useEffect(function () {
    setAnimationVisible(visible);
  }, [visible]);
  return /*#__PURE__*/React.createElement(CSSTransition, {
    key: "modal-mask",
    in: animationVisible,
    nodeRef: nodeRef,
    timeout: {
      exit: 300,
      enter: 300
    },
    classNames: prefixCls
  }, /*#__PURE__*/React.createElement("div", _extends({
    ref: nodeRef,
    style: style,
    className: cls
  }, maskProps), children));
};
Mask.displayName = "zaui-mask";
export default Mask;