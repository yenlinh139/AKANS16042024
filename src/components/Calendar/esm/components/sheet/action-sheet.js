import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["className", "actions", "title"];
import React, { useImperativeHandle, useRef } from "react";
import classNames from "clsx";
import Button from "../button";
import { getPrefixCls } from "../../utils/class";
import Sheet from "./sheet";
var Action = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var className = props.className,
    actions = props.actions,
    title = props.title,
    rest = _objectWithoutPropertiesLoose(props, _excluded);
  var sheetRef = useRef(null);
  var prefixCls = getPrefixCls("action-sheet");
  var groups = actions || [];
  if (!Array.isArray(groups[0])) {
    groups = [groups.filter(function (group) {
      return !Array.isArray(group);
    })];
  }
  useImperativeHandle(ref, function () {
    var _sheetRef$current;
    return (_sheetRef$current = sheetRef.current) == null ? void 0 : _sheetRef$current.sheet;
  });
  var cls = classNames(prefixCls, {}, className);
  var actionsChildren = groups.map(function (group, indx) {
    return /*#__PURE__*/React.createElement("ul", {
      className: prefixCls + "-actions-group"
      // eslint-disable-next-line react/no-array-index-key
      ,
      key: "zaui-modal-action-group-key-" + indx
    }, group.map(function (action, index) {
      var _classNames;
      var text = action.text,
        onClick = action.onClick,
        actionClassName = action.className,
        style = action.style,
        close = action.close,
        highLight = action.highLight,
        danger = action.danger,
        disabled = action.disabled;
      var onClose = props.onClose;
      var btnCls = classNames(actionClassName, prefixCls + "-action", (_classNames = {}, _classNames[prefixCls + "-action-highlight"] = highLight, _classNames));
      var onActionClick = function onActionClick(e) {
        if (close && onClose) {
          onClose(e);
          return;
        }
        if (onClick) {
          onClick(e);
        }
      };
      var actionType = "neutral";
      if (highLight) {
        actionType = "highlight";
      }
      if (danger) {
        actionType = "danger";
      }
      return /*#__PURE__*/React.createElement("li", {
        className: btnCls,
        key: action.key || "zaui-modal-action-key-" + index
      }, /*#__PURE__*/React.createElement(Button, {
        type: actionType,
        style: style,
        variant: "tertiary",
        disabled: disabled,
        fullWidth: true,
        className: prefixCls + "-action-button",
        onClick: onActionClick
      }, text));
    }));
  }) || null;
  return /*#__PURE__*/React.createElement(Sheet, _extends({
    className: cls,
    ref: sheetRef,
    handler: false,
    title: undefined
  }, rest), title && /*#__PURE__*/React.createElement("div", {
    className: prefixCls + "-title-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: prefixCls + "-title"
  }, title)), actionsChildren && /*#__PURE__*/React.createElement("div", {
    className: prefixCls + "-actions-groups"
  }, actionsChildren));
});
Action.displayName = "zaui-action-sheet";
export default Action;