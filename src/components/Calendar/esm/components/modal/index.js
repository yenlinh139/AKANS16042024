import _extends from "@babel/runtime/helpers/extends";
import React, { useEffect, useRef, useState } from "react";
import classNames from "clsx";
import { getPrefixCls } from "../../utils/class";
import Mask from "../../common/modal-mask";
import Content from "./content";
import ModalWrapper from "../../common/modal-wrapper";

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
var Modal = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
  var _useState = useState(visible),
    animatedVisible = _useState[0],
    setAnimatedVisible = _useState[1];
  var _useState2 = useState(!unmountOnClose),
    contentVisible = _useState2[0],
    setContentVisible = _useState2[1];
  var contentRef = useRef(null);
  useEffect(function () {
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
  var prefixCls = getPrefixCls("modal");
  var cls = classNames(prefixCls, className);
  if (unmountOnClose && !contentVisible) {
    return null;
  }
  return /*#__PURE__*/React.createElement("div", {
    className: cls,
    ref: ref
  }, mask && /*#__PURE__*/React.createElement(Mask, {
    visible: animatedVisible,
    style: maskStyle,
    className: maskClassName
  }), /*#__PURE__*/React.createElement(ModalWrapper, {
    style: {
      zIndex: zIndex
    },
    maskClosable: maskClosable,
    visible: animatedVisible,
    afterClose: handleAfterClose,
    onClose: onClose
  }, /*#__PURE__*/React.createElement(Content, _extends({}, props, {
    visible: animatedVisible,
    ref: contentRef
  }))));
});
Modal.displayName = "zaui-modal";
export default Modal;