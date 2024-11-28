"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GameObject = void 0;
var _GameProvider = require("./GameProvider");
var GameObject = exports.GameObject = function GameObject(_ref) {
  var x = _ref.x,
    y = _ref.y,
    width = _ref.width,
    height = _ref.height;
  var _useGameContext = (0, _GameProvider.useGameContext)(),
    worldWidth = _useGameContext.worldWidth,
    worldHeight = _useGameContext.worldHeight;
  var left = x - worldWidth / 2 - width / 2;
  var top = y - worldHeight / 2 - height / 2;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: left,
      top: top,
      width: width,
      height: height
    }
  }, children);
};