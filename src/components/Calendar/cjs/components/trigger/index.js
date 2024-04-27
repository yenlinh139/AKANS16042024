"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
exports.generateTrigger = generateTrigger;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireDefault(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _context = _interopRequireDefault(require("./context"));
var _addEventListener = _interopRequireDefault(require("../../utils/addEventListener"));
var _raf = _interopRequireDefault(require("../../utils/raf"));
var _contains = _interopRequireDefault(require("../../utils/contains"));
var _ref3 = require("../../utils/ref");
var _portal = _interopRequireDefault(require("../portal"));
var _sheet = _interopRequireDefault(require("../sheet"));
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2.default)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var noop = function noop() {
  return {};
};
function returnEmptyString() {
  return "";
}
function returnDocument(element) {
  if (element) {
    return element.ownerDocument;
  }
  return window.document;
}
var ALL_HANDLERS = ["onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur", "onContextMenu"];
function generateTrigger(PortalComponent) {
  var Trigger = /*#__PURE__*/function (_React$Component) {
    (0, _inheritsLoose2.default)(Trigger, _React$Component);
    function Trigger(props) {
      var _this;
      _this = _React$Component.call(this, props) || this;
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "sheetRef", /*#__PURE__*/_react.default.createRef());
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "triggerRef", /*#__PURE__*/_react.default.createRef());
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "portalContainer", void 0);
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "attachId", void 0);
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "clickOutsideHandler", void 0);
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "touchOutsideHandler", void 0);
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "mouseDownTimeout", void 0);
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "focusTime", void 0);
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "preClickTime", void 0);
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "preTouchTime", void 0);
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "delayTimer", void 0);
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "hasPopupMouseDown", void 0);
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "eventHandlers", {});
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onFocus", function (e) {
        var focusDelay = _this.props.focusDelay;
        _this.fireEvents("onFocus", e);
        // incase focusin and focusout
        _this.clearDelayTimer();
        if (_this.isFocusToShow()) {
          _this.focusTime = Date.now();
          if (focusDelay) _this.delaySetPopupVisible(true, focusDelay);
        }
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onMouseDown", function (e) {
        _this.fireEvents("onMouseDown", e);
        _this.preClickTime = Date.now();
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onTouchStart", function (e) {
        _this.fireEvents("onTouchStart", e);
        _this.preTouchTime = Date.now();
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onBlur", function (e) {
        var blurDelay = _this.props.blurDelay;
        _this.fireEvents("onBlur", e);
        _this.clearDelayTimer();
        if (_this.isBlurToHide() && blurDelay) {
          _this.delaySetPopupVisible(false, blurDelay);
        }
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onClick", function (event) {
        event.stopPropagation();
        var popupVisible = _this.state.popupVisible;
        _this.fireEvents("onClick", event);
        // focus will trigger click
        if (_this.focusTime) {
          var preTime;
          if (_this.preClickTime && _this.preTouchTime) {
            preTime = Math.min(_this.preClickTime, _this.preTouchTime);
          } else if (_this.preClickTime) {
            preTime = _this.preClickTime;
          } else if (_this.preTouchTime) {
            preTime = _this.preTouchTime;
          }
          if (preTime && Math.abs(preTime - _this.focusTime) < 20) {
            return;
          }
          _this.focusTime = 0;
        }
        _this.preClickTime = 0;
        _this.preTouchTime = 0;
        if (_this.isClickToShow() && (_this.isClickToHide() || _this.isBlurToHide()) && event && event.preventDefault) {
          event.preventDefault();
        }
        var nextVisible = !popupVisible;
        if (_this.isClickToHide() && !nextVisible || nextVisible && _this.isClickToShow()) {
          _this.setPopupVisible(!popupVisible);
        }
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onPopupMouseDown", function () {
        _this.hasPopupMouseDown = true;
        clearTimeout(_this.mouseDownTimeout);
        _this.mouseDownTimeout = window.setTimeout(function () {
          _this.hasPopupMouseDown = false;
        }, 0);
        if (_this.context) {
          var _ref = _this.context,
            onPopupMouseDown = _ref.onPopupMouseDown;
          onPopupMouseDown.apply(void 0, arguments);
        }
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onDocumentClick", function (event) {
        var _this$props = _this.props,
          mask = _this$props.mask,
          maskClosable = _this$props.maskClosable,
          popupType = _this$props.popupType;
        if (mask && !maskClosable || popupType === "sheet") {
          return;
        }
        var target = event.target;
        var root = _this.getRootDomNode();
        var popupNode = _this.getPopupDomNode();
        if (!(0, _contains.default)(root, target) && !(0, _contains.default)(popupNode, target) && !_this.hasPopupMouseDown) {
          _this.close();
        }
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getRootDomNode", function () {
        var _this$triggerRef$curr;
        return ((_this$triggerRef$curr = _this.triggerRef.current) == null ? void 0 : _this$triggerRef$curr.input) || _this.triggerRef.current;
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getComponent", function () {
        var _this$props2 = _this.props,
          popupClassName = _this$props2.popupClassName,
          popupStyle = _this$props2.popupStyle,
          mask = _this$props2.mask,
          maskClosable = _this$props2.maskClosable,
          zIndex = _this$props2.zIndex,
          popup = _this$props2.popup,
          onPopupVisibleChange = _this$props2.onPopupVisibleChange;
        var sheetAnimationVisible = _this.state.sheetAnimationVisible;
        var mouseProps = {};
        mouseProps.onMouseDown = _this.onPopupMouseDown;
        mouseProps.onTouchStart = _this.onPopupMouseDown;
        return /*#__PURE__*/_react.default.createElement(_sheet.default, (0, _extends2.default)({
          visible: sheetAnimationVisible,
          className: popupClassName
        }, mouseProps, {
          style: popupStyle,
          mask: mask,
          maskClosable: maskClosable,
          onClose: function onClose() {
            _this.close();
          },
          afterClose: function afterClose() {
            _this.setState({
              popupVisible: false,
              sheetAnimationVisible: false,
              prevPopupVisible: false
            });
            onPopupVisibleChange == null || onPopupVisibleChange(false);
          },
          zIndex: zIndex,
          handler: false,
          contentRef: _this.sheetRef
        }), typeof popup === "function" ? popup() : popup);
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "attachParent", function (popupContainer) {
        if (_this.attachId) _raf.default.cancel(_this.attachId);
        var _this$props3 = _this.props,
          getPopupContainer = _this$props3.getPopupContainer,
          getDocument = _this$props3.getDocument;
        var domNode = _this.getRootDomNode();
        var mountNode;
        if (!getPopupContainer) {
          mountNode = getDocument == null ? void 0 : getDocument(_this.getRootDomNode()).body;
        } else if (domNode || getPopupContainer.length === 0) {
          mountNode = getPopupContainer(domNode);
        }
        if (mountNode) {
          mountNode.appendChild(popupContainer);
        } else {
          // Retry after frame render in case parent not ready
          _this.attachId = (0, _raf.default)(function () {
            _this.attachParent(popupContainer);
          });
        }
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getContainer", function () {
        if (!_this.portalContainer) {
          var getDocument = _this.props.getDocument;
          var popupContainer = getDocument == null ? void 0 : getDocument(_this.getRootDomNode()).createElement("div");
          // Make sure default popup container will never cause scrollbar appearing
          if (popupContainer) {
            popupContainer.style.position = "absolute";
            popupContainer.style.top = "0";
            popupContainer.style.left = "0";
            popupContainer.style.width = "100%";
          }
          _this.portalContainer = popupContainer;
        }
        if (_this.portalContainer) _this.attachParent(_this.portalContainer);
        return _this.portalContainer;
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handlePortalUpdate", function () {
        var _this$state = _this.state,
          prevPopupVisible = _this$state.prevPopupVisible,
          popupVisible = _this$state.popupVisible;
        var afterPopupVisibleChange = _this.props.afterPopupVisibleChange;
        if (prevPopupVisible !== popupVisible) {
          afterPopupVisibleChange == null || afterPopupVisibleChange(popupVisible);
        }
      });
      // eslint-disable-next-line react/sort-comp
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "triggerContextValue", {
        onPopupMouseDown: _this.onPopupMouseDown
      });
      var _popupVisible;
      if ("popupVisible" in props) {
        _popupVisible = !!props.popupVisible;
      } else {
        _popupVisible = !!props.defaultPopupVisible;
      }
      _this.state = {
        prevPopupVisible: _popupVisible,
        popupVisible: _popupVisible,
        sheetAnimationVisible: false
      };
      ALL_HANDLERS.forEach(function (h) {
        _this.eventHandlers["fire" + h] = function (e) {
          _this.fireEvents(h, e);
        };
      });
      return _this;
    }
    var _proto = Trigger.prototype;
    _proto.componentDidMount = function componentDidMount() {
      this.componentDidUpdate();
    };
    _proto.componentDidUpdate = function componentDidUpdate() {
      var props = this.props;
      var state = this.state;
      if (state.popupVisible) {
        var currentDocument;
        if (!this.clickOutsideHandler && this.isClickToHide()) {
          currentDocument = props.getDocument == null ? void 0 : props.getDocument(this.getRootDomNode());
          this.clickOutsideHandler = (0, _addEventListener.default)(currentDocument, "mousedown", this.onDocumentClick);
        }
        if (!this.touchOutsideHandler) {
          currentDocument = currentDocument || (props.getDocument == null ? void 0 : props.getDocument(this.getRootDomNode()));
          this.touchOutsideHandler = (0, _addEventListener.default)(currentDocument, "touchstart", this.onDocumentClick);
        }
        return;
      }
      this.clearOutsideHandler();
    };
    _proto.componentWillUnmount = function componentWillUnmount() {
      this.clearDelayTimer();
      this.clearOutsideHandler();
      clearTimeout(this.mouseDownTimeout);
      if (this.attachId) _raf.default.cancel(this.attachId);
    }

    /**
     * @param popupVisible    Show or not the popup element
     * @param event           SyntheticEvent, used for `pointAlign`
     */;
    _proto.setPopupVisible = function setPopupVisible(popupVisible) {
      var onPopupVisibleChange = this.props.onPopupVisibleChange;
      var prevPopupVisible = this.state.popupVisible;
      this.clearDelayTimer();
      if (prevPopupVisible !== popupVisible) {
        if (popupVisible) {
          if (!("popupVisible" in this.props)) {
            this.setState({
              popupVisible: popupVisible,
              prevPopupVisible: prevPopupVisible,
              sheetAnimationVisible: popupVisible
            });
          } else {
            this.setState({
              sheetAnimationVisible: popupVisible,
              prevPopupVisible: prevPopupVisible
            });
          }
          onPopupVisibleChange == null || onPopupVisibleChange(popupVisible);
        } else {
          this.setState({
            sheetAnimationVisible: popupVisible,
            prevPopupVisible: prevPopupVisible
          });
        }
      }
    };
    Trigger.getDerivedStateFromProps = function getDerivedStateFromProps(_ref2, prevState) {
      var popupVisible = _ref2.popupVisible;
      var newState = {};
      if (popupVisible !== undefined && prevState.popupVisible !== popupVisible) {
        if (popupVisible) {
          newState.popupVisible = popupVisible;
          newState.prevPopupVisible = prevState.popupVisible;
          newState.sheetAnimationVisible = true;
        } else {
          newState.sheetAnimationVisible = popupVisible;
          newState.prevPopupVisible = prevState.prevPopupVisible;
        }
      }
      return newState;
    };
    _proto.getPopupDomNode = function getPopupDomNode() {
      return this.sheetRef.current || null;
    };
    _proto.delaySetPopupVisible = function delaySetPopupVisible(visible, delayS) {
      var _this2 = this;
      var delay = delayS * 1000;
      this.clearDelayTimer();
      if (delay) {
        this.delayTimer = window.setTimeout(function () {
          _this2.setPopupVisible(visible);
          _this2.clearDelayTimer();
        }, delay);
      } else {
        this.setPopupVisible(visible);
      }
    };
    _proto.clearDelayTimer = function clearDelayTimer() {
      if (this.delayTimer) {
        clearTimeout(this.delayTimer);
        this.delayTimer = null;
      }
    };
    _proto.clearOutsideHandler = function clearOutsideHandler() {
      if (this.clickOutsideHandler) {
        this.clickOutsideHandler.remove();
        this.clickOutsideHandler = null;
      }
      if (this.touchOutsideHandler) {
        this.touchOutsideHandler.remove();
        this.touchOutsideHandler = null;
      }
    };
    _proto.createTwoChains = function createTwoChains(event) {
      var children = this.props.children;
      var childPros = children.props;
      var props = this.props;
      if (childPros[event] && props[event]) {
        return this.eventHandlers["fire" + event];
      }
      return childPros[event] || props[event];
    };
    _proto.isClickToShow = function isClickToShow() {
      var _this$props4 = this.props,
        action = _this$props4.action,
        showAction = _this$props4.showAction;
      return (action == null ? void 0 : action.indexOf("click")) !== -1 || (showAction == null ? void 0 : showAction.indexOf("click")) !== -1;
    };
    _proto.isClickToHide = function isClickToHide() {
      var _this$props5 = this.props,
        action = _this$props5.action,
        hideAction = _this$props5.hideAction;
      return (action == null ? void 0 : action.indexOf("click")) !== -1 || (hideAction == null ? void 0 : hideAction.indexOf("click")) !== -1;
    };
    _proto.isFocusToShow = function isFocusToShow() {
      var _this$props6 = this.props,
        action = _this$props6.action,
        showAction = _this$props6.showAction;
      return (action == null ? void 0 : action.indexOf("focus")) !== -1 || (showAction == null ? void 0 : showAction.indexOf("focus")) !== -1;
    };
    _proto.isBlurToHide = function isBlurToHide() {
      var _this$props7 = this.props,
        action = _this$props7.action,
        hideAction = _this$props7.hideAction;
      return (action == null ? void 0 : action.indexOf("focus")) !== -1 || (hideAction == null ? void 0 : hideAction.indexOf("blur")) !== -1;
    };
    _proto.fireEvents = function fireEvents(type, e) {
      var children = this.props.children;
      var childCallback = children.props[type];
      if (childCallback) {
        childCallback(e);
      }
      // eslint-disable-next-line react/destructuring-assignment
      var callback = this.props[type];
      if (callback) {
        callback(e);
      }
    };
    _proto.close = function close() {
      this.setPopupVisible(false);
    };
    _proto.render = function render() {
      var popupVisible = this.state.popupVisible;
      var _this$props8 = this.props,
        children = _this$props8.children,
        forceRender = _this$props8.forceRender,
        className = _this$props8.className,
        autoDestroy = _this$props8.autoDestroy;
      var child = _react.default.Children.only(children);
      var newChildProps = {
        key: "trigger"
      };

      // ============================== Visible Handlers ==============================

      // >>> Click
      if (this.isClickToHide() || this.isClickToShow()) {
        newChildProps.onClick = this.onClick;
        newChildProps.onInputTriggerClick = this.onClick;
        newChildProps.onMouseDown = this.onMouseDown;
        newChildProps.onTouchStart = this.onTouchStart;
      } else {
        newChildProps.onClick = this.createTwoChains("onClick");
        newChildProps.onInputTriggerClick = this.createTwoChains("onClick");
        newChildProps.onMouseDown = this.createTwoChains("onMouseDown");
        newChildProps.onTouchStart = this.createTwoChains("onTouchStart");
      }

      // >>> Focus
      if (this.isFocusToShow() || this.isBlurToHide()) {
        newChildProps.onFocus = this.onFocus;
        newChildProps.onBlur = this.onBlur;
      } else {
        newChildProps.onFocus = this.createTwoChains("onFocus");
        newChildProps.onBlur = this.createTwoChains("onBlur");
      }

      // =================================== Render ===================================
      var childrenClassName = (0, _clsx.default)(child && child.props && child.props.className, className);
      if (childrenClassName) {
        newChildProps.className = childrenClassName;
      }
      var cloneProps = _objectSpread({}, newChildProps);
      if ((0, _ref3.supportRef)(child)) {
        cloneProps.ref = (0, _ref3.composeRef)(this.triggerRef, child.ref);
      }
      var trigger = /*#__PURE__*/_react.default.cloneElement(child, cloneProps);
      var portal = null;
      // prevent unmounting after it's rendered
      if (popupVisible || forceRender) {
        portal = /*#__PURE__*/_react.default.createElement(PortalComponent, {
          key: "portal",
          getContainer: this.getContainer,
          didUpdate: this.handlePortalUpdate
        }, this.getComponent());
      }
      if (!popupVisible && autoDestroy) {
        portal = null;
      }
      return /*#__PURE__*/_react.default.createElement(_context.default.Provider, {
        value: this.triggerContextValue
      }, trigger, portal);
    };
    return Trigger;
  }(_react.default.Component);
  // eslint-disable-next-line react/static-property-placement
  (0, _defineProperty2.default)(Trigger, "defaultProps", void 0);
  Trigger.contextType = _context.default;
  Trigger.defaultProps = {
    getPopupClassNameFromAlign: returnEmptyString,
    getDocument: returnDocument,
    onPopupVisibleChange: noop,
    afterPopupVisibleChange: noop,
    onPopupAlign: noop,
    popupClassName: "",
    mouseEnterDelay: 0,
    mouseLeaveDelay: 0.1,
    focusDelay: 0,
    blurDelay: 0.15,
    popupStyle: {},
    destroyPopupOnHide: false,
    popupAlign: {},
    defaultPopupVisible: false,
    mask: false,
    maskClosable: true,
    action: [],
    showAction: [],
    hideAction: [],
    autoDestroy: false,
    zIndex: 1001,
    popupType: "sheet"
  };
  return Trigger;
}
var _default = exports.default = generateTrigger(_portal.default);