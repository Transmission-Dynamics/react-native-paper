"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Outline = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Outline = _ref => {
  let {
    isV3,
    label,
    activeColor,
    backgroundColor,
    hasActiveOutline,
    focused,
    outlineColor,
    roundness,
    style
  } = _ref;
  return /*#__PURE__*/React.createElement(_reactNative.View, {
    testID: "text-input-outline",
    pointerEvents: "none",
    style: [styles.outline, !label && styles.noLabelOutline,
    // eslint-disable-next-line react-native/no-inline-styles
    {
      backgroundColor,
      borderRadius: roundness,
      borderWidth: (isV3 ? hasActiveOutline : focused) ? 2 : 1,
      borderColor: hasActiveOutline ? activeColor : outlineColor
    }, style]
  });
};
exports.Outline = Outline;
const styles = _reactNative.StyleSheet.create({
  outline: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 6,
    bottom: 0
  },
  noLabelOutline: {
    top: 0
  }
});
//# sourceMappingURL=Outline.js.map