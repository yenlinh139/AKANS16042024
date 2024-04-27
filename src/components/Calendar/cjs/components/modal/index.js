"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireWildcard(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _class = require("../../utils/class");
var _modalMask = _interopRequireDefault(require("../../common/modal-mask"));
var _content = _interopRequireDefault(require("./content"));
var _modalWrapper = _interopRequireDefault(require("../../common/modal-wrapper"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/**
 * @category Feedback
 * @subcategory Modal
 * @component
 *
 * @example
import React from "react";
import { Page, Button, Modal } from "zmp-ui";

function HomePage(props){
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <Page>
            <Button onClick={() => {setModalVisible(true)}}>Open Modal</Button>
            <Modal
                visible={modalVisible}
                title="ZaUI 2.0 Modal"
                coverSrc={"https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8"}
                onClose={() => {
                    setModalVisible(false);
                }}
                zIndex={1200}
                actions={[
                    {
                        text: "Button",
                    },
                    {
                        text: "Cancel",
                        close: true,
                        highLight: true,
                    },
                ]}
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
            />
        </Page>
    );
}
 */
var Modal = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var _props$visible = props.visible,
    visible = _props$visible === void 0 ? false : _props$visible,
    afterClose = props.afterClose,
    className = props.className,
    maskClassName = props.maskClassName,
    maskStyle = props.maskStyle,
    _props$maskClosable = props.maskClosable,
    maskClosable = _props$maskClosable === void 0 ? true : _props$maskClosable,
    _props$mask = props.mask,
    mask = _props$mask === void 0 ? true : _props$mask,
    zIndex = props.zIndex,
    onClose = props.onClose,
    unmountOnClose = props.unmountOnClose;
  var _useState = (0, _react.useState)(visible),
    animatedVisible = _useState[0],
    setAnimatedVisible = _useState[1];
  var _useState2 = (0, _react.useState)(!unmountOnClose),
    contentVisible = _useState2[0],
    setContentVisible = _useState2[1];
  var contentRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    if (unmountOnClose && visible) {
      setContentVisible(visible);
    }
    setAnimatedVisible(visible);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);
  var handleAfterClose = function handleAfterClose() {
    if (unmountOnClose) {
      setContentVisible(false);
    }
    afterClose == null || afterClose();
  };
  var prefixCls = (0, _class.getPrefixCls)("modal");
  var cls = (0, _clsx.default)(prefixCls, className);
  if (unmountOnClose && !contentVisible) {
    return null;
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: cls,
    ref: ref
  }, mask && /*#__PURE__*/_react.default.createElement(_modalMask.default, {
    visible: animatedVisible,
    style: maskStyle,
    className: maskClassName
  }), /*#__PURE__*/_react.default.createElement(_modalWrapper.default, {
    style: {
      zIndex: zIndex
    },
    maskClosable: maskClosable,
    visible: animatedVisible,
    afterClose: handleAfterClose,
    onClose: onClose
  }, /*#__PURE__*/_react.default.createElement(_content.default, (0, _extends2.default)({}, props, {
    visible: animatedVisible,
    ref: contentRef
  }))));
});
Modal.displayName = "zaui-modal";
var _default = exports.default = Modal;