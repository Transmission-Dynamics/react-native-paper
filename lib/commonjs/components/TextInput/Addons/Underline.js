"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Underline = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _theming = require("../../../core/theming");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Underline = _ref => {
  let {
    parentState,
    error,
    colors,
    activeColor,
    underlineColorCustom,
    hasActiveOutline,
    style,
    theme: themeOverrides
  } = _ref;
  const {
    isV3
  } = (0, _theming.useInternalTheme)(themeOverrides);
  let backgroundColor = parentState.focused ? activeColor : underlineColorCustom;
  if (error) backgroundColor = colors === null || colors === void 0 ? void 0 : colors.error;
  const activeScale = isV3 ? 2 : 1;
  return /*#__PURE__*/React.createElement(_reactNative.Animated.View, {
    testID: "text-input-underline",
    style: [styles.underline, isV3 && styles.md3Underline, {
      backgroundColor,
      // Underlines is thinner when input is not focused
      transform: [{
        scaleY: (isV3 ? hasActiveOutline : parentState.focused) ? activeScale : 0.5
      }]
    }, style]
  });
};
exports.Underline = Underline;
const styles = _reactNative.StyleSheet.create({
  underline: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 2,
    zIndex: 1
  },
  md3Underline: {
    height: 1
  }
});
//# sourceMappingURL=Underline.js.map