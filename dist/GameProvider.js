"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGameContext = exports.GameProvider = void 0;
var _react = require("react");
var GameContext = /*#__PURE__*/(0, _react.createContext)();
var useGameContext = exports.useGameContext = function useGameContext() {
  return (0, _react.useContext)(GameContext);
};
var GameProvider = exports.GameProvider = function GameProvider(_ref) {
  var worldWidth = _ref.worldWidth,
    worldHeight = _ref.worldHeight,
    viewportWidth = _ref.viewportWidth,
    viewportHeight = _ref.viewportHeight,
    children = _ref.children;
  return /*#__PURE__*/React.createElement(GameContext.Provider, {
    value: {
      worldWidth: worldWidth,
      worldHeight: worldHeight,
      viewportWidth: viewportWidth,
      viewportHeight: viewportHeight
    }
  }, children);
};