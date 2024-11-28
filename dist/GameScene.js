"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GameScene = void 0;
var _react = _interopRequireDefault(require("react"));
var _GameProvider = require("./GameProvider");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var GameScene = exports.GameScene = function GameScene(_ref) {
  var children = _ref.children;
  var _useGameContext = (0, _GameProvider.useGameContext)(),
    viewportWidth = _useGameContext.viewportWidth,
    viewportHeight = _useGameContext.viewportHeight;
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      position: 'relative',
      width: viewportWidth,
      height: viewportHeight
    }
  }, children);
};