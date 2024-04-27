"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = findDOMNode;
var _reactDom = _interopRequireDefault(require("react-dom"));
function findDOMNode(node) {
  if (node instanceof HTMLElement) {
    return node;
  }
  // eslint-disable-next-line react/no-find-dom-node
  return _reactDom.default.findDOMNode(node);
}