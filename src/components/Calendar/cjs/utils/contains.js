"use strict";

exports.__esModule = true;
exports.default = contains;
function contains(root, n) {
  if (!root) {
    return false;
  }
  return root.contains(n);
}