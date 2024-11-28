"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGameContext = exports.GameProvider = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
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
  return /*#__PURE__*/_react["default"].createElement(GameContext.Provider, {
    value: {
      worldWidth: worldWidth,
      worldHeight: worldHeight,
      viewportWidth: viewportWidth,
      viewportHeight: viewportHeight
    }
  }, children);
};