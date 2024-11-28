"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GameScene = void 0;
var _GameProvider = require("./GameProvider");
var GameScene = exports.GameScene = function GameScene(_ref) {
  var children = _ref.children;
  var _useGameContext = (0, _GameProvider.useGameContext)(),
    viewportWidth = _useGameContext.viewportWidth,
    viewportHeight = _useGameContext.viewportHeight;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: viewportWidth,
      height: viewportHeight
    }
  }, children);
};