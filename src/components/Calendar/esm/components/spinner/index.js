import React from "react";
import classNames from "clsx";
import { getPrefixCls } from "../../utils/class";

/**
 * Spinner component: Component hiển thị loading cho phần nội dung khi cần thiết
 *
 * @category Data Display
 * @subCategory Spinner
 * @component
 *
 * @example
import React from 'react';
import { Spinner } from 'zmp-ui';

const TestPage = () => {
    return (
        <Spinner logo="logo-url-here" />
    )
}
export default TestPage;
 * @example 
import React from 'react';
import { Spinner } from 'zmp-ui';

const TestPage = () => {
    return (
        <Spinner />
    )
}
 *  @example 
import React from 'react';
import { Spinner } from 'zmp-ui';

const TestPage = () => {
    return (
        <Spinner
            logo={
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: "red",
                    }}
                />
            }
        />
    )
}
 */
var Spinner = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var prefixCls = getPrefixCls("spinner");
  var _props$visible = props.visible,
    visible = _props$visible === void 0 ? true : _props$visible,
    _props$logo = props.logo,
    logo = _props$logo === void 0 ? null : _props$logo;
  var cls = classNames(prefixCls);
  if (!visible) {
    return null;
  }
  var logoEl = typeof logo === "string" ? /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "spinner"
  }) : logo;
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: cls
  }, /*#__PURE__*/React.createElement("div", {
    className: prefixCls + "-ring"
  }), /*#__PURE__*/React.createElement("div", {
    className: prefixCls + "-dot"
  }), /*#__PURE__*/React.createElement("div", {
    className: prefixCls + "-logo"
  }, logoEl));
});
Spinner.displayName = "zaui-spinner";
export default Spinner;